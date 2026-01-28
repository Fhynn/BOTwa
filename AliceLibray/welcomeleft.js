const fs = require("fs")
const path = require("path")

const WELCOME_DB_PATH = path.join(__dirname, "../AliceDatabase/groupWelcome.json")
const WELCOME_MEDIA_DIR = path.join(__dirname, "../AliceDatabase/welcome")
const LEFT_MEDIA_DIR = path.join(__dirname, "../AliceDatabase/left")

function ensureWelcomeDb() {
  if (!fs.existsSync(path.dirname(WELCOME_DB_PATH))) {
    fs.mkdirSync(path.dirname(WELCOME_DB_PATH), { recursive: true })
  }
  if (!fs.existsSync(WELCOME_DB_PATH)) {
    fs.writeFileSync(WELCOME_DB_PATH, JSON.stringify({}, null, 2))
  }
  if (!fs.existsSync(WELCOME_MEDIA_DIR)) {
    fs.mkdirSync(WELCOME_MEDIA_DIR, { recursive: true })
  }
  if (!fs.existsSync(LEFT_MEDIA_DIR)) {
    fs.mkdirSync(LEFT_MEDIA_DIR, { recursive: true })
  }
}

ensureWelcomeDb()

function readWelcomeDB() {
  try {
    return JSON.parse(fs.readFileSync(WELCOME_DB_PATH))
  } catch {
    return {}
  }
}

module.exports = (Alice) => {
  Alice.ev.on("group-participants.update", async (anu) => {
    try {
      if (!anu.participants || !Array.isArray(anu.participants)) return

      const metadata = await Alice.groupMetadata(anu.id)
      const groupName = metadata.subject
      const totalMember = metadata.participants.length

      const welcomeDB = readWelcomeDB()
      const groupCfg = welcomeDB[anu.id] || {}

      const toggleWelcome = groupCfg.welcome_enabled !== false
      const toggleLeft = groupCfg.left_enabled !== false

      const formatTemplate = (tpl, map) => {
        if (!tpl) return ""
        return tpl.replace(/@user|@group|@tanggal|@jam|@member/gi, (m) => map[m.toLowerCase()] || m)
      }

      for (let num of anu.participants) {
        const key = anu.action
        if (!["add", "remove"].includes(key)) continue
        if ((key === "add" && !toggleWelcome) || (key === "remove" && !toggleLeft)) continue

        const userTag = `@${num.split("@")[0]}`
        const tanggal = new Date().toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" })
        const jam = new Date().toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" })

        const map = {
          "@user": userTag,
          "@group": groupName,
          "@tanggal": tanggal,
          "@jam": jam,
          "@member": String(totalMember),
        }

        const DEFAULT_BG = {
          add: { url: "https://files.catbox.moe/g6ph8m.mp4", type: "video" },
          remove: { url: "https://files.catbox.moe/f215u5.mp4", type: "video" },
        }

        let bgUrl, bgType
        if (key === "add" && groupCfg.thumb?.add) {
          bgUrl = groupCfg.thumb.add
          bgType = groupCfg.thumb.addType || "video"
        } else if (key === "remove" && groupCfg.thumb?.remove) {
          bgUrl = groupCfg.thumb.remove
          bgType = groupCfg.thumb.removeType || "video"
        } else {
          bgUrl = DEFAULT_BG[key].url
          bgType = DEFAULT_BG[key].type
        }

        let caption
        if (key === "add") {
          caption = groupCfg.welcome
            ? formatTemplate(groupCfg.welcome, map)
            : `👋 Selamat datang ${userTag} di *${groupName}*!`
        } else {
          caption = groupCfg.left
            ? formatTemplate(groupCfg.left, map)
            : `👋 ${userTag} telah keluar dari *${groupName}*.`
        }

        const msg = { caption, mentions: [num] }

        if (bgType === "video") {
          msg.video = fs.existsSync(bgUrl) ? fs.readFileSync(bgUrl) : { url: bgUrl }
          msg.gifPlayback = true
        } else {
          msg.image = fs.existsSync(bgUrl) ? fs.readFileSync(bgUrl) : { url: bgUrl }
        }

        await Alice.sendMessage(anu.id, msg)
      }
    } catch (err) {
      console.error("Error welcomeleft:", err)
    }
  })
}