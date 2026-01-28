//═══════════════════════════════════════════════//
//           🚀 Alice Assistent - Bot WhatsApp Canggih           //
//═══════════════════════════════════════════════//
//
//   🤖 Powered By XyrooRynzz
//   © XyrooRynzz 2022 - 2026
//
//   📌 Source & Official Contact:
//   ➤ Telegram : t.me/XyrooRynzz
//   ➤ Gmail    : xyroorynzz@gmail.com
//   ➤ Github   : github.com/xyroorynzz
//
//   📢 Telegram Channels:
//   ➤ Utama : t.me/xyrooinformations
//   ➤ Testi : t.me/xyrootestimoni
//
//───────────────────────────────────────────────//
// 📖 PANDUAN MEMBACA FILE README.MD
//───────────────────────────────────────────────//
//
//   📂 File readme.md berisi panduan lengkap:
//   • Cara menjalankan script Alice Assistent
//   • Aturan & informasi penting
//   • File yang boleh/tidak boleh diubah
//   • Kontak & promo resmi dari XyrooRynzz
//
//   💡 Cara membacanya:
//   1. Buka panel / file manager kalian
//   2. Masuk ke direktori utama script
//   3. Klik file "readme.md"
//   4. Pilih "View" atau "Edit" untuk melihat isi panduan
//
//   🧠 Disarankan membaca readme.md terlebih dahulu
//   sebelum menjalankan atau mengedit script.
//
//───────────────────────────────────────────────//
//
//   ⚡ Fast • Secure • Automated • Stylish ⚡
//
//═══════════════════════════════════════════════//
//
// 📈━━━━━━━━━━━━━━━━━━━ [ © XyrooRynzz ] ━━━━━━━━━━━━━━━━━━━📉//

const fs = require('fs')

const loadAfk = () => {
  try {
    return JSON.parse(fs.readFileSync('./AliceDatabase/afk.json'))
  } catch {
    return {}
  }
}

const saveAfk = (data) => {
  fs.writeFileSync('./AliceDatabase/afk.json', JSON.stringify(data, null, 2))
}

const addAfkUser = (groupId, userId, time, reason, db) => {
  if (!db[groupId]) db[groupId] = []
  db[groupId].push({ id: userId, time, reason })
  saveAfk(db)
}

const checkAfkUser = (groupId, userId, db) => {
  if (!db[groupId]) return false
  return db[groupId].some(x => x.id === userId)
}

const getAfkData = (groupId, userId, db) => {
  if (!db[groupId]) return null
  return db[groupId].find(x => x.id === userId)
}

const removeAfkUser = (groupId, userId, db) => {
  if (!db[groupId]) return
  db[groupId] = db[groupId].filter(x => x.id !== userId)
  saveAfk(db)
}

module.exports = {
  loadAfk,
  saveAfk,
  addAfkUser,
  checkAfkUser,
  getAfkData,
  removeAfkUser
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})