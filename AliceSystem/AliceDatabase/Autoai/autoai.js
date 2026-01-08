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
const axios = require('axios')
const chalk = require('chalk')
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const yts = require('yt-search')
const { ytmp3 } = require('@vreden/youtube_scraper')

// ===============================
// DATABASE
// ===============================
const dbPath = './AliceSystem/AliceDatabase/Autoai/autoai.json'
if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, "{}")
let db = JSON.parse(fs.readFileSync(dbPath))

function saveDb() {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
}

// ===============================
// GLOBAL VAR
// ===============================
let bot = global.botname || 'Bot'
let own = global.ownername || 'Owner'
let sos = global.sosialmedia || {}
let pay = global.payment || {}

// ===============================
// PROMPT
// ===============================
let basePrompt = `
Kamu adalah ${bot}, AI yang sangat lembut, ramah, dan empatik. Gunakan bahasa Indonesia santai namun sopan, panggil user "kak" dengan halus. Jawab hangat seperti teman baik ya 😊

— GAYA —
• Lembut, menenangkan, nggak kaku.  
• Pakai emot lembut secukupnya ✨  
• Jelasin pelan-pelan, nggak menggurui.

— CARA JAWAB —
• Singkat, jelas, mudah dipahami.  
• Topik sulit → sederhanakan dulu.  
• Jika user bingung → ulangi lebih mudah.

— EMOSI USER —
• Sedih → tenangkan: "nggak apa-apa kak 🌸"  
• Cemas → beri rasa aman.  
• Marah → minta maaf lembut.  
• Curhat → dengarkan dulu, baru beri saran halus.

— BATASAN —
Tolak lembut hal berbahaya, ilegal, dewasa, atau privasi.  
"maaf ya kak… aku nggak bisa bantu yang itu 😊"

— IDENTITAS —
Bot: ${bot}  
Owner: ${own}  
Sosial: WhatsApp ${sos.whatsapp}, Telegram ${sos.telegram}, Instagram ${sos.instagram}, YouTube ${sos.youtube}, Tiktok ${sos.tiktok}

Pembayaran:
QRIS ${pay.qris} a.n ${pay.qris_an}  
Dana ${pay.dana} a.n ${pay.dana_an}  
Gopay ${pay.gopay} a.n ${pay.gopay_an}

Nama bot, owner, dan data pembayaran **tetap**, tidak bisa diubah.

— KEMAMPUAN —
• Putar musik YouTube 🎶  
• Cari foto Pinterest 📷  
• Balas pakai VN 🎤  
• Temani ngobrol hangat 🌸  
• Jelaskan hal rumit dengan simple ✨  

Mulai sekarang, jawab semua pesan user sebagai ${bot} dengan gaya lembut & penuh empati.
`

// ===============================
// REACTION (WAIT → DONE)
// ===============================
async function XReaction(Alice, m, waitEmoji = "🕐", doneEmoji = "✨") {
    try {
        await Alice.sendMessage(m.chat, { react: { text: waitEmoji, key: m.key } })
        await new Promise(r => setTimeout(r, 150))
        await Alice.sendMessage(m.chat, { react: { text: doneEmoji, key: m.key } })
    } catch (e) {
        console.log("ReactionErr:", e.message)
    }
}

// ===============================
// CEK REPLY KE BOT
// ===============================
function isReplyToBot(Alice, m){
    try {
        let ctx = m.message?.extendedTextMessage?.contextInfo ||
                  m.message?.imageMessage?.contextInfo ||
                  m.message?.videoMessage?.contextInfo ||
                  m.message?.stickerMessage?.contextInfo ||
                  m.message?.audioMessage?.contextInfo ||
                  m.message?.documentMessage?.contextInfo

        if (!ctx) return false
        
        let botId = Alice.user.id.split(':')[0]
        let quoted = ctx.participant?.split(':')[0]

        if (quoted && quoted.includes(botId)) return true
        if (ctx?.remoteJid === Alice.user.id) return true

        return false
    } catch {
        return false
    }
}

// ===============================
// BLOCKED COMMAND
// ===============================
function blockedCmd(t) {
    t = t.toLowerCase()

    const bad = [
        // ======================================
        // 🔥 SISTEM & PERINTAH BERBAHAYA
        // ======================================
        "rm -rf", "hapus sistem", "delete system", "format", "wipe",
        "shutdown", "restart server", "matikan server",

        // ======================================
        // 🔑 FILE / CREDENTIAL / SECURITY
        // ======================================
        "apikey", "api key", "token", "secret", "private key",
        "credential", "env", "environment",
        "kirimkan file", "send your file", "upload file",
        "sistemmu", "system32",

        // ======================================
        // ⚠️ HACKING / CYBERCRIME
        // ======================================
        "hack", "hacking", "hack akun", "hack fb", "hack wa",
        "crack", "bypass", "exploit", "keylogger",
        "ddos", "phishing", "malware", "virus", "trojan",
        "ambil akun", "ambil data", "curi akun", "breach",

        // ======================================
        // 🔞 SEKSUAL & PORNOGRAFI (explicit)
        // ======================================
        "porn", "porno", "bokep", "bugil", "telanjang",
        "sex", "seks", "hentai", "anal", "bdsm",
        "fetish", "playboy", "payudara", "vagina",
        "penis", "testis", "masturbasi", "coli",
        "raba tubuh", "jilmek", "ngewe",

        // variasi bahasa gaul
        "tete", "toket", "memek", "kontol",
        "nge nude", "nudes", "send nudes", "pap spicy",

        // ======================================
        // 🩸 KEKERASAN & GORE
        // ======================================
        "bunuh", "membunuh", "tusuk", "gorok",
        "darah", "gore", "sadis", "torture",
        "bom", "ledakan", "merakit bom",

        // ======================================
        // 🛑 MEMAKSA UBAH IDENTITAS BOT
        // ======================================
        "ganti nama bot", "ubah nama bot",
        "ubah owner", "ganti owner",
        "hapus prompt", "hilangkan aturan",
        "abaikan aturan", "ignore rules",
        "reset personality", "ganti kepribadian"
    ]

    return bad.some(v => t.includes(v))
}

// ===============================
// AI TEXT (YUPRA)
// ===============================
async function askAI(text, history) {
    try {
        let his = history.map(h => `User: ${h.u}\nAI: ${h.a}`).join("\n")
        let full = basePrompt + "\n" + his + "\nUser: " + text

        let r = await axios.get("https://api.yupra.my.id/api/ai/copilot-think", {
            params: { text: full }
        })

        if (!r.data?.result || r.data.result.trim() === "") {
            return "maaf kak, server AI lagi nggak ngasih jawaban 😔"
        }
        return r.data.result

    } catch (e) {
        return "maaf kak, ai nya lagi error... (" + (e.response?.status || e.message) + ")"
    }
}

// ===============================
// TERMAI TTS → VN
// ===============================
async function generateVN(text) {

    try {

        console.log("Generating VN for:", text) // Debug log

        

        let r = await axios.get("https://api.termai.cc/api/text2speech/elevenlabs", {

            params: {

                text: text,

                voice: "bella",

                key: "sk_06e05ce3438a4a77be7a3d461e69928fee5947f2d290230e"

            },

            responseType: "arraybuffer",

            timeout: 30000 // Tambah timeout 30 detik

        })

        

        console.log("VN generated successfully") // Debug log

        return Buffer.from(r.data)

    } catch (e) {

        console.log("VN Error:", e.message)

        console.log("Full error:", e.response?.data || e) // Error detail

        return null

    }

}

// ===============================
// PINTEREST IMAGE
// ===============================
async function getPinterest(q) {
    let api1 = `https://api-faa.my.id/faa/pinterest?q=${encodeURIComponent(q)}`
    let api2 = `https://api.zenzzx.my.id/api/search/pinterest?query=${encodeURIComponent(q)}`

    try {
        let x = await axios.get(api1)
        if (x.data?.result?.length) return x.data.result.map(v => ({ img: v, src: v }))
    } catch { }

    try {
        let y = await axios.get(api2)
        if (y.data?.data?.length) return y.data.data.map(v => ({ img: v.directLink, src: v.link }))
    } catch { }

    return []
}

function isPinterestQuery(t) {
    t = t.toLowerCase()

    const keys = [
        // umum
        "pinterest", "pin ", "pindirset", "pinteres",
        
        // minta gambar
        "cari foto", "carikan foto", "tolong cari foto",
        "minta foto", "minta gambar", "carikan gambar",
        "cari gambar", "cariin gambar", "cariin foto",
        "kirimin foto", "kirimin gambar", "kasih foto",
        "kasih gambar", "ambilin foto", "ambilin gambar",
        "carikan aku foto", "carikan aku gambar",
        "boleh minta foto", "boleh minta gambar",

        // request estetika
        "wallpaper", "background", "bg aesthetic",
        "foto aesthetic", "gambar aesthetic",

        // keyword tambahan
        "gambar ", "foto ", "pic ", "picture", "image",
    ]

    return keys.some(v => t.includes(v))
}

function extractPinterestKeyword(text) {
    let t = text.toLowerCase()

    const removeList = [
        // platform
        "pinterest", "pin", "pinteres", "pindirset", "pintrerest",

        // permintaan umum
        "carikan aku foto", "carikan aku gambar",
        "carikan foto", "carikan gambar",
        "cari foto", "cari gambar",
        "cariin foto", "cariin gambar",
        "tolong cari foto", "tolong cari gambar",
        "minta foto", "minta gambar",
        "beri aku foto", "beri aku gambar",
        "kasih foto", "kasih gambar",
        "kirimin foto", "kirimin gambar",
        "ambilin foto", "ambilin gambar",

        // kata dasar
        "foto", "gambar", "pic", "picture", "image",
        "wallpaper", "background",

        // kata tambahan yang tidak penting
        "dong", "ya", "nih", "deh", "kok", "tau", "dong",
        "tolong", "please", "pls", "boleh", "bisa", "ga", "nggak",
        "kan", "lah", "ya", "itu"
    ]

    removeList.forEach(word => {
        t = t.replace(new RegExp("\\b" + word + "\\b", "gi"), "")
    })

    // hapus sisa kata "di pinterest", "ke pinterest", dll
    t = t.replace(/di pinterest/gi, "")
         .replace(/ke pinterest/gi, "")

    // bersihkan spasi
    t = t.replace(/\s+/g, " ").trim()

    // fallback keyword default
    if (!t) t = "aesthetic wallpaper"

    return t
}

async function sendPinterest(Alice, m, reply, text) {
    let res = await getPinterest(text)
    if (!res.length) return reply("❌ Tidak ditemukan hasil kak.")

    let cards = []

    for (let v of res.slice(0, 5)) {
        let prep = await prepareWAMessageMedia(
            { image: { url: v.img } },
            { upload: Alice.waUploadToServer }
        )

        cards.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...prep
            }),
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `📌 Pinterest Result\n✨ Keyword: *${text}*`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `🌐 Pinterest Engine by ${bot}`
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"🔍 Lihat Asli","url":"${v.src}"}`
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"⬇️ Download","url":"${v.img}"}`
                    }
                ]
            })
        })
    }

    let msg = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessageV2Extension: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `✨ Hasil pencarian Pinterest untuk *${text}*`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards
                        })
                    })
                }
            }
        },
        { quoted: m }
    )

    await Alice.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

// ===============================
// PINTEREST VIDEO
// ===============================

function isPinterestVideoQuery(t) {
    t = t.toLowerCase();

    const keys = [

        // --- direct mentions ---
        "pinterest video", "video pinterest", "pin video", "video pin",
        "pinterest vid", "vid pinterest", "pin vid", "vid pin",
        "pinterest vdo", "vdo pinterest",

        // --- general query forms ---
        "cari video pinterest", "carikan video pinterest",
        "tolong cari video pinterest", "minta video pinterest",
        "download video pinterest", "unduh video pinterest",
        "ambil video pinterest", "kasih video pinterest",
        "kirimin video pinterest", "simpen video pinterest",

        // --- simple commands ---
        "pinvid", "pin video", "pinterestvid", "pinterest video please",
        "video pin please", "pinvideo", "pin-vid", "pin vdo",

        // --- short or slang ---
        "pin vid", "pint vid", "pin v", "pn vid",
        "pintvideo", "pinteres video", "pindrest video",
        "pinteres vid", "pint vidio", "pinterest vidio",

        // --- alay / typo forms ---
        "vidio pinterest", "vidio pin", "video pinteres",
        "videp pinterest", "pintes vid", "pintres video",
        "pintrest video", "pinterest vdeo", "pin vdeo",
        "video pintres", "video pint", "pin vidd",

        // --- English ---
        "pinterest clip", "pin clip", "pinterest reels",
        "pinterest short", "pin short", "pinterest short video",
        "pinterest collection video",

        // --- download wording ---
        "save pinterest video", "save pin video",
        "dl pinterest video", "dl pin video",
        "get pinterest video", "grab pinterest video",
        "fetch pinterest video", "fetch pin video",

        // --- request variants ---
        "bagi video pin", "bagikan video pin",
        "kasih vid pinterest", "tolong vid pinterest",
        "boleh minta vid pinterest", "bisa minta vid pinterest",
        "kirim video pin dong", "vid pin dong", "pin vid dong",

        // --- question-like ---
        "ada video pin?", "bisa ambilin video pinterest?",
        "punya video pinterest?", "video pin ada?",

        // --- describing keywords ---
        "lihat video pin", "lihat pinterest video",
        "pengen video pin", "pingin video pin",
        "mau video pin", "mau vid pin",

        // --- common prefixes/suffixes ---
        "video pin ya", "video pin nih", "video pin itu",
        "pinterest video kak", "pin video kak",

        // --- commands without pinterest explicitly ---
        "vid pin", "pin reels", "pin rill", "pin rils",
        "pin short", "pin shorts", "pin movie",
        "video dari pin", "video dari pinterest"
    ];

    return keys.some(v => t.includes(v));
}


function extractPinterestVideoKeyword(text) {
    let t = text.toLowerCase();

    // =========================
    // HAPUS SEMUA KATA TIDAK PENTING
    // =========================
    const remove = [
        // platform
        "pinterest", "pin", "pinteres", "pintes", "pintres", "pintrest",
        "pintrerest", "pindrest", "pindres",

        // video words
        "video", "vid", "vidio", "vdeo", "clip", "short", "reels", "ril", "rilis",

        // request verbs
        "cari", "carikan", "cariin", "tolong", "tolonglah",
        "minta", "mintain", "bantu", "bantukan", "tolong donk",
        "dong", "donk", "pls", "please",

        // download terms
        "download", "unduh", "dl", "ambil", "ambilin", "kasih", "kirimin",
        "kirimkan", "save", "get", "fetch", "grab", "ambilin",

        // conversational filler
        "lihat", "liatin", "ya", "nih", "itu", "tuh", "deh", "lah",
        "bang", "kak", "bro", "sis", "cu", "kok", "kan", "dong dong",

        // unnecessary filler
        "aku", "kamu", "gue", "gw", "loe", "gua",
        "lagi", "dong ya", "dong lah",
        "ini", "itu", "pun", "deh", "aja", "dong dong",

        // "wanting" words
        "pengen", "pingin", "ingin", "mau", "minta dong",
    ];

    remove.forEach(w => {
        t = t.replace(new RegExp("\\b" + w + "\\b", "gi"), "");
    });

    // bersihkan sisa kata
    t = t.replace(/\s+/g, " ").trim();

    // fallback default
    if (!t) return "aesthetic viral";

    return t;
}


async function searchPinVideo(keyword) {
    try {
        let url = `https://api.termai.cc/api/search/pinterest-video?query=${encodeURIComponent(keyword)}&key=${global.api.xtermai}`;
        let res = await axios.get(url);

        let pins = res.data?.data?.pins;
        if (!pins || !pins.length) return [];

        return pins.map(v => ({
            pin: v.link,
            title: v.title || "Pinterest Video"
        }));

    } catch (e) {
        console.log("SearchPinVideoErr:", e.message);
        return [];
    }
}

async function downloadPinVideo(pinUrl) {
    try {
        let url = `https://velyn.mom/api/downloader/pinterest?apikey=${global.api.velyn}&url=${encodeURIComponent(pinUrl)}`;

        let res = await axios.get(url);
        let data = res.data?.data;

        if (!data || !data.url) return null; // bukan video

        return {
            video: data.url,
            thumb: data.thumbnail,
            title: data.title || "Pinterest Video"
        };

    } catch (e) {
        console.log("VelynErr:", e.message);
        return null;
    }
}

async function sendPinterestVideo(Alice, m, reply, keyword) {
    try {
        // 1. Search dari Termai
        let search = await searchPinVideo(keyword);
        if (!search.length) return reply("❌ Video Pinterest tidak ditemukan kak.");

        let pin = search[0].pin;

        // 2. Download via Velyn
        let info = await downloadPinVideo(pin);

        if (!info) {
            return reply("❌ Gagal mengambil video kak.\n⚠️ *Detail:* Velyn API mengembalikan null");
        }

        // 3. Kirim videonya
        await Alice.sendMessage(
            m.chat,
            {
                video: { url: info.video },
                caption: 
`🎥 *Pinterest Video*
✨ Keyword: *${keyword}*
🔗 Link Pin: ${pin}`
            },
            { quoted: m }
        );

    } catch (e) {
        console.log("SendVideoErr:", e);

        // tampilkan detail error ke user (ringkas tapi jelas)
        return reply(
`❌ Gagal mengambil video kak.

🔍 *Error Detail:*  
${e?.response?.status || "No status"} — ${e?.message || "Unknown error"}

Coba ulangi beberapa saat lagi ya kak 🙏`
        );
    }
}


// ===============================
// MUSIC PLAY HELPER
// ===============================
function isMusicQuery(t){
    t = t.toLowerCase()

    let keys = [
        // dasar
        "putar lagu", "puter lagu", "puterin lagu", "setel lagu",
        "play lagu", "play musik", "play music",
        "putar musik", "putar music", "nyalakan lagu",

        // bahasa santai
        "muterin lagu", "muterin musik", "puterin music",
        "dengerin lagu", "pengen lagu", "minta lagu",
        "search lagu", "carikan lagu",

        // langsung sebut command
        "yt play", "yt musik", "yt lagu",

        // typo umum
        "plai lagu", "pley lagu", "play laguu", "play musiq"
    ]

    // juga support langsung command-style
    if (
        t.startsWith("play ") ||
        t.startsWith("putar ") ||
        t.startsWith("puter ") ||
        t.startsWith("lagu ") ||
        t.startsWith("musik ")
    ) return true

    return keys.some(v => t.includes(v))
}

function extractMusicKeyword(text){
    let t = text.toLowerCase()

    // hapus kata-kata tidak penting
    t = t
        .replace(/tolong/gi, "")
        .replace(/dong/gi, "")
        .replace(/ya/gi, "")
        .replace(/kak/gi, "")
        .replace(/bang/gi, "")
        .replace(/please/gi, "")
        .replace(/bgt/gi, "")
        .replace(/banget/gi, "")
        .replace(/sekali/gi, "")
        .replace(/donk/gi, "")

        // hapus perintah
        .replace(/putar/gi, "")
        .replace(/puter/gi, "")
        .replace(/puterin/gi, "")
        .replace(/setel/gi, "")
        .replace(/setelin/gi, "")
        .replace(/nyalakan/gi, "")
        .replace(/nyalain/gi, "")
        .replace(/play/gi, "")
        .replace(/musik/gi, "")
        .replace(/music/gi, "")
        .replace(/lagu/gi, "")
        .replace(/mp3/gi, "")

        // hapus noise lainnya
        .replace(/yang/gi, "")
        .replace(/di youtube/gi, "")
        .replace(/dengerin/gi, "")
        .replace(/dengarin/gi, "")
        .replace(/aku mau/gi, "")
        .replace(/aku pengen/gi, "")
        .replace(/pengen/gi, "")

        .replace(/\s+/g, " ") // rapikan spasi
        .trim()

    if (!t || t.length < 2) t = "lagu viral terbaru"

    return t
}

async function sendMusic(Alice, m, reply, query){
    try {
        let search = await yts(query)
        if (!search?.all?.length) return reply("Maaf kak, aku nggak nemu lagunya 😔")

        let firstVideo = search.all[0]

        let title = firstVideo.title || "Untitled"
        let url = firstVideo.url
        let durasi = firstVideo.timestamp || "Unknown"
        let thumb = firstVideo.thumbnail || null

        let hasil = await ytmp3(url)
        if (!hasil?.download?.url) throw new Error("Download link not found")

        await Alice.sendMessage(
            m.chat,
            {
                audio: { url: hasil.download.url },
                mimetype: "audio/mp4",
                fileName: hasil.download.filename || `${title}.mp3`,
                caption: `🎶 *${title}*\n⏱️ Durasi: ${durasi}\n📥 Source: Youtube`,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: `Durasi: ${durasi}`,
                        thumbnailUrl: thumb,
                        sourceUrl: url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: m }
        )
    } catch (e) {
        console.log("PlayMusicErr:", e)
        reply("Gagal mengambil lagu, coba kata kunci lain ya kak 😊")
    }
}

// ===============================
// COMMAND: autoai / autovn
// ===============================
async function autoAICommand(m, args, reply) {
    if (!m.isGroup) return reply("Hanya untuk grup kak.")

    let id = m.chat
    if (!db[id]) db[id] = { autoai:false, autovn:false, history:[] }

    let a = (args[0] || "").toLowerCase()
    let b = (args[1] || "").toLowerCase()

    if(a === "status"){
        let s1 = db[id].autoai ? "ON" : "OFF"
        let s2 = db[id].autovn ? "ON" : "OFF"
        return reply(`Status AutoAI\nchat: ${s1}\nvn: ${s2}`)
    }

    if(a === "on"){
        db[id].autoai = true
        db[id].autovn = false
        saveDb()
        return reply("AutoAI mode chat diaktifkan kak ✨")
    }

    if(a === "off"){
        db[id].autoai = false
        db[id].autovn = false
        saveDb()
        return reply("AutoAI dimatikan kak ✨")
    }

    if(a === "vn"){
        if(b === "on"){
            db[id].autoai = true
            db[id].autovn = true
            saveDb()
            return reply("AutoAI mode voice note aktif kak 🎤")
        }
        if(b === "off"){
            db[id].autovn = false
            saveDb()
            return reply("AutoAI VN dimatikan kak ✨")
        }
        return reply("autoai vn on/off kak")
    }

    reply("autoai on/off | autoai vn on/off | autoai status")
}

// ===============================
// HANDLER: TEXT AUTOAI
// ===============================
async function autoAIReply(Alice, m, reply){
    if(!m.isGroup) return;

    let id = m.chat;
    if(!db[id]) db[id] = { autoai:false, autovn:false, history:[] };
    if(!db[id].autoai) return;
    if(!isReplyToBot(Alice,m)) return;

    let text = m.text || "";
    if(!text) return;

    if(blockedCmd(text)){
        return reply("waduh itu agak berbahaya kak, aku nggak bisa bantu ya 😊");
    }

    // ============================
    // 🎵 1. PLAY MUSIK YOUTUBE
    // ============================
    if (isMusicQuery(text)) {
        let q = extractMusicKeyword(text);
        await XReaction(Alice, m, "🕐", "✨");
        await sendMusic(Alice, m, reply, q);
        return;
    }

    // ============================
    // 📹 2. PINTEREST VIDEO
    // ============================
    if (isPinterestVideoQuery(text)) {
    let key = extractPinterestVideoKeyword(text);
    await XReaction(Alice, m, "🕐", "✨");
    await sendPinterestVideo(Alice, m, reply, key);
    return;
   }

    // ============================
    // 🖼️ 3. PINTEREST FOTO
    // ============================
    if (isPinterestQuery(text)) {
        let key = extractPinterestKeyword(text);

        await XReaction(Alice, m, "🕐", "✨");
        await sendPinterest(Alice, m, reply, key);

        return;
    }

    // ============================
    // 🤖 5. AI TEXT RESPON / VN
    // ============================
    await XReaction(Alice, m, "🕐", "✨");

    let ans = await askAI(text, db[id].history);

    db[id].history.push({ u: text, a: ans });
    if (db[id].history.length > 10) db[id].history.shift();
    saveDb();

    // Kalau AutoVN OFF → balas teks
    if (!db[id].autovn) {
        return reply("🤖 " + ans);
    }

    // Kalau AutoVN ON → kirim VN
    let vn = await generateVN(ans);
    if (!vn) {
        return reply("maaf kak, VN nya gagal dibuat 😔");
    }

    await Alice.sendMessage(
        m.chat,
        { audio: vn, mimetype: "audio/mp4", ptt: true },
        { quoted: m }
    );
}

// ===============================
// EXPORT
// ===============================
module.exports = {
    autoAICommand,
    autoAIReply
}

// ===============================
// HOT RELOAD
// ===============================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`[ UPDATE ] ${__filename}`))
    delete require.cache[file]
    require(file)
})