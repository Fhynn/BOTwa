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

module.exports = {

/* ===============================  
   FAKE QUOTED — TOKO / MARKETPLACE  
   =============================== */
qtoko: {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        remoteJid: "status@broadcast"
    },
    message: {
        productMessage: {
            product: {
                productImage: { mimetype: "image/jpeg", jpegThumbnail: "" },
                title: `${global.packname} - Marketplace`,
                description: null,
                currencyCode: "IDR",
                priceAmount1000: "999999999999999",
                retailerId: `Powered By ${global.ownername}`,
                productImageCount: 1
            },
            businessOwnerJid: `0@s.whatsapp.net`
        }
    }
},

/* ===============================  
   REQUEST PAYMENT MESSAGE  
   =============================== */
XR: {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: `628555`,
        participant: '0@s.whatsapp.net'
    },
    message: {
        requestPaymentMessage: {
            currencyCodeIso4217: "USD",
            amount1000: 999999999,
            requestFrom: '0@s.whatsapp.net',
            noteMessage: {
                extendedTextMessage: {
                    text: `${global.ownername} 2025`
                }
            },
            expiryTimestamp: 222222222,
            amount: {
                value: 91929291929,
                offset: 1000,
                currencyCode: "INR"
            }
        }
    }
},

/* ===============================  
   ORDER MESSAGE  
   =============================== */
xy: {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            itemCount: 99999,
            status: 200,
            thumbnailUrl: global.thumbnailReply,
            surface: 200,
            message: `${global.packname}`,
            orderTitle: '@ciro',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: { forwardingScore: 999, isForwarded: true },
    sendEphemeral: true
},

/* ===============================  
   LOCATION MESSAGE  
   =============================== */
qlocJpm: {
    key: {
        participant: '0@s.whatsapp.net',
        remoteJid: `status@broadcast`
    },
    message: {
        locationMessage: {
            name: `WhatsApp Bot ${global.ownername}`,
            jpegThumbnail: ""
        }
    }
},

/* ===============================  
   ORDER MESSAGE (TYPE 2)  
   =============================== */
p: {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            itemCount: 9999,
            status: 200,
            thumbnail: global.thumb,
            surface: 200,
            message: global.botname,
            orderTitle: global.ownername,
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: { forwardingScore: 999, isForwarded: true },
    sendEphemeral: true
},

/* ===============================  
   CONTACT MESSAGE  
   =============================== */
fkontak: {
    key: {
        participant: `0@s.whatsapp.net`,
        remoteJid: `status@broadcast`
    },
    message: {
        contactMessage: {
            displayName: global.ownername,
            vcard:
`BEGIN:VCARD
VERSION:3.0
N:XL;${global.ownername},;;;
FN:${global.ownername}
item1.TEL;waid=6281328139682:6281328139682
item1.X-ABLabel:Mobile
END:VCARD`,
            jpegThumbnail: global.thumb,
            thumbnail: global.thumb,
            sendEphemeral: true
        }
    }
},

/* ===============================  
   IMAGE MESSAGE  
   =============================== */
al: {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        remoteJid: "status@broadcast"
    },
    message: {
        imageMessage: {
            url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            mimetype: "image/jpeg",
            caption: `${global.ownername}`,
            fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            fileLength: "28777",
            height: 1080,
            width: 1079,
            mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            directPath: "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc",
            mediaKeyTimestamp: "1610993486",
            jpegThumbnail: fs.existsSync('./AliceMedia/image/Alice.jpg')
                ? fs.readFileSync('./AliceMedia/image/Alice.jpg')
                : "",
            scansSidecar: "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
},

/* ===============================  
   NEWSLETTER INVITE  
   =============================== */
ftroli: {
    key: {
        remoteJid: 'status@broadcast',
        participant: '0@s.whatsapp.net'
    },
    message: {
        newsletterAdminInviteMessage: {
            newsletterJid: 'nd@newsletter',
            newsletterName: 'Information',
            caption: `© ${global.ownername} | 2025`,
            inviteExpiration: 0
        }
    }
},

/* ===============================  
   PAYMENT MESSAGE (TYPE 2)  
   =============================== */
xyyy: {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: `${global.ownername}`,
        participant: '0@s.whatsapp.net'
    },
    message: {
        requestPaymentMessage: {
            currencyCodeIso4217: "IDR",
            amount1000: 999999999,
            requestFrom: '0@s.whatsapp.net',
            noteMessage: {
                extendedTextMessage: {
                    text: `${global.botname}`
                }
            },
            expiryTimestamp: 999999999,
            amount: {
                value: 91929291929,
                offset: 1000,
                currencyCode: "INR"
            }
        }
    }
},

/* ===============================  
   LOCATION VERIFIED  
   =============================== */
floc: {
    key: {
        participant: '0@s.whatsapp.net',
        remoteJid: `status@broadcast`
    },
    message: {
        locationMessage: {
            name: `_${global.botname} Terverifikasi Oleh WhatsApp_`,
            thumbnailUrl: global.thumb
        }
    }
}

}