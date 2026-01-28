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

const replymessage = (Alice, m, XR, Styles) => {

  // BLOCKED
  global.XRBLOCK = async () => {
    let txt = Styles(`Error Terdeteksi, Fitur Di Block Sementara Sampai Owner Memfix\nFitur Tidak Bisa Digunakan Selama Masa Block`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // NOT OWNER
  global.XRO = async () => {
    let txt = Styles(`Kamu Bukan Owner ku !!`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // ONLY ADMIN
  global.XRA = async () => {
    let txt = Styles(`Command Hanya Untuk Admin Group`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // BOT NOT ADMIN
  global.XRBADM = async () => {
    let txt = Styles(`Jadikan Bot Sebagai Admin Terlebih Dahulu`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // PREMIUM USER
  global.XRP = async () => {
    let txt = Styles(`Kamu Bukan User Vip ( Premium Vip )`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // ONLY GROUP
  global.XRG = async () => {
    let txt = Styles(`Khusus Group Chat!`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // USER BANNED
  global.XRB = async () => {
    let txt = Styles(`kamu sedang di band oleh owner`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Kamu telah di banned !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // ONLY PRIVATE / PM
  global.XRPC = async () => {
    let txt = Styles(`Command Untuk Private Message`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Command Kamu Dibatasi !!',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

  // ERROR FEATURE
  global.XRR = async () => {
    let txt = Styles(`Fitur Sedang Error, Silahkan Menunggu Sampai Di Fix Owner`)
    let ctx = {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        serverMessageId: 100,
        newsletterName: botname
      },
      externalAdreply: {
        showAdAttribution: true,
        title: '❌ Maaf kak, fitur sedang dalam perbaikan',
        body: ownername,
        previewType: "PHOTO",
        thumbnailUrl: thumbnailReply,
        sourceUrl: global.sosialmedia.telegram
      }
    }
    Alice.sendMessage(m.chat, { text: txt, contextInfo: ctx }, { quoted: XR })
  }

}

module.exports = replymessage