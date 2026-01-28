# ? ALICE ASSISTENT — Bot WhatsApp Modular

```
    _    _ _      _          ___        _     _            _   
   / \  | (_) ___| |__      / _ \ _   _ | |__ | | ___  _ __| |_ 
  / _ \ | | |/ __| '_ \    | | | | | | || '_ \| |/ _ \| '__| __|
 / ___ \| | | (__| | | |   | |_| | |_| || |_) | | (_) | |  | |_ 
/_/   \_\_|_|\___|_| |_|    \___/ \__, ||_.__/|_|\___/|_|   \__|
                                |___/                           
```

**Developer:** ALFHIN HIDAYAT  
**Telegram:** @fhinzanxiety  
**WhatsApp Group:** https://chat.whatsapp.com/FnZSFwyQ9ZD334HzB9Pri7

---

## ?? Tentang Bot
ALICE ASSISTENT adalah bot WhatsApp berbasis Node.js dengan sistem modular (case + plugin). Dirancang untuk stabil di panel murah, VPS, RDP, maupun lokal. Cocok untuk automasi, downloader, sticker, tools, game, dan manajemen grup.

---

## ?? Fitur Utama (Ringkas)
- ? **Menu & info bot**
- ? **Downloader** (YT, TikTok, IG, FB, X, dll)
- ? **Sticker & converter media**
- ? **AI / Chat / search**
- ? **Tools umum** (translate, qrcode, shortlink, dll)
- ? **RPG & Games**
- ? **Manajemen grup** (antilink, welcome/left, promote/demote)
- ? **Owner tools** (broadcast, set bot, backup, dll)

Catatan: daftar command lengkap ada di `Alice.js` (bagian `case` pada switch command).

---

## ?? Persyaratan
- Node.js 18+ (disarankan 20/22)
- npm
- ffmpeg (wajib untuk fitur media/sticker tertentu)

---

## ?? Instalasi
```bash
npm install
```

---

## ?? Menjalankan Bot
```bash
npm start
```

---

## ?? Konfigurasi Utama
Edit file `AliceSet.js`:
- `global.AliceBot`    : nomor bot (format internasional tanpa +)
- `global.owner`       : nomor owner
- `global.botname`     : nama bot
- `global.ownername`   : nama owner
- `global.packname`    : nama pack sticker
- `global.author`      : author sticker
- `global.sosialmedia` : kontak sosial

---

## ?? Pairing Code
Jika pairing code aktif, jalankan bot lalu cek terminal untuk kode pairing.

---

## ?? ffmpeg
Pastikan ffmpeg tersedia di PATH.

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install ffmpeg
```

**Windows:**
- Install ffmpeg
- Tambahkan folder `bin` ke PATH

---

## ??? Struktur Folder (Ringkas)
- `Alice.js`                 : inti command
- `AliceSet.js`              : konfigurasi global
- `AliceLibray/`             : fungsi dan utilitas
- `AlicePlugins/`            : plugin fitur
- `AliceSystem/`             : database & resource
- `AliceDatabase/`           : data JSON runtime
- `AliceSessions/`           : session auth

---

## ??? Troubleshooting
- **FFmpeg tidak ditemukan** ? install ffmpeg & pastikan PATH benar.
- **File terdeteksi diubah** ? kembalikan file ke versi aman.
- **Session error** ? hapus `AliceSessions/` lalu pairing ulang.

---

## ?? Kontak
- **Developer:** ALFHIN HIDAYAT
- **Telegram:** @fhinzanxiety
- **WhatsApp Group:** https://chat.whatsapp.com/FnZSFwyQ9ZD334HzB9Pri7

---

> ? Jika bot ini membantu, simpan README ini untuk panduan cepat.
