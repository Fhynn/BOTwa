# Alicee Bot WhatsApp (Alice Assistent)

Bot WhatsApp berbasis **Node.js** + **Baileys (WhatsApp Web API)**.

> **Pencipta:** **Alfhin Hidayat**  
> **Nama Bot:** **Alicee**  
> **WhatsApp Owner/Creator:** **6289635560147**  
> **Demo Bot:** **6285119016078**

---

## Fitur (ringkas)
- Bot WhatsApp multi-fitur (menu, sticker, downloader, tools, dll)
- Database JSON (tersimpan di folder `AliceDatabase/` dan `AliceSystem/`)
- Pairing Code / Linked Devices (lebih aman tanpa QR di beberapa device)

> Catatan: fitur lengkap mengikuti plugin & command yang ada di project ini.

---

## Yang Dibutuhkan
### Wajib
- **Node.js (LTS disarankan)**  
  Rekomendasi: Node **18+** / **20+**.
- **Git** (opsional, kalau ambil source lewat `git clone`)
- Koneksi internet yang stabil
- Akun WhatsApp yang akan dijadikan bot (disarankan nomor khusus bot)

### Opsional tapi sering diperlukan
- **FFmpeg** (untuk fitur audio/video tertentu)  
  Project sudah memakai `@ffmpeg-installer/ffmpeg`, tapi kalau ada error multimedia, install FFmpeg juga di sistem.
- **Build tools** (khusus beberapa OS):
  - Windows: *Windows Build Tools* / Visual Studio Build Tools (untuk modul native seperti `sharp`)
  - Linux: `build-essential`, `python3`, dll

---

## Cara Instalasi

### A) Cara Cepat (dari file ZIP)
1. Extract file ZIP project ini.
2. Masuk ke folder project lewat CMD/Terminal.
3. Jalankan install dependency:

```bash
npm install
```

> Jika ada error, coba:
> - `npm install --force`
> - atau `npm install --legacy-peer-deps`

---

### B) Via Git (kalau repo tersedia)
```bash
git clone <URL_REPO_KAMU>
cd <FOLDER_PROJECT>
npm install
```

---

## Cara Menjalankan (CMD / Terminal)

### Menjalankan Bot
Di folder project, jalankan salah satu:

```bash
npm start
```

atau (manual sesuai script project):

```bash
node AliceLibray/lowdb/connect.js
```

Jika bot menggunakan **Pairing Code**, biasanya terminal akan meminta **nomor WhatsApp**.
Masukkan nomor dengan format internasional (tanpa `+`), contoh:
- `628xxxxxx`

Lalu ambil **Pairing Code** yang tampil dan sambungkan di WhatsApp:
**WhatsApp > Perangkat tertaut (Linked devices) > Tautkan perangkat / Link a device > Tautkan dengan nomor (Link with phone number)**  
(istilah menu bisa sedikit berbeda tergantung versi WhatsApp).

> Kalau yang muncul adalah QR, cukup scan QR dari WhatsApp.

---

## Konfigurasi Owner, Nama, Prefix, dll

File pengaturan utama ada di:
- `AliceSet.js`

Bagian penting (contoh):
- `global.ownername`
- `global.owner`
- `global.prefa` (prefix)
- `global.packname` & `global.author` (sticker)

Contoh edit owner:
```js
global.ownername = 'ALFHIN HIDAYAT'
global.owner = ["6289635560147"]
```

> Tips: Pastikan format nomor **tanpa tanda +**.

---

## Struktur Project (singkat)
- `index.js` / `Alice.js` : core bot / handler
- `AlicePlugins/` : fitur/command tambahan
- `AliceDatabase/` & `AliceSystem/` : database JSON & data pendukung
- `AliceMedia/` : media (gambar, audio, dll)
- `AliceSet.js` : konfigurasi global

---

## Troubleshooting

### 1) Error modul native (misal: `sharp`)
- Windows: install **Visual Studio Build Tools**
- Linux:
```bash
sudo apt update
sudo apt install -y build-essential python3 make g++
```
Lalu ulang:
```bash
npm install
```

### 2) Bot tidak connect / sering putus
- Pastikan internet stabil
- Hapus sesi lama (biasanya folder session/credentials jika ada) lalu pairing ulang
- Jangan jalankan 2 instance bot dengan nomor yang sama

### 3) FFmpeg error saat fitur audio/video
- Install FFmpeg di sistem dan pastikan bisa dipanggil lewat terminal:
```bash
ffmpeg -version
```

---

## Keamanan
- Jangan share folder session/credentials ke orang lain.
- Disarankan pakai nomor bot khusus (bukan nomor utama).

---

## Kredit
- Base engine: Baileys (WhatsApp Web API)
- Project ini dipaketkan & dikonfigurasi oleh **Alfhin Hidayat** (Alicee Bot WhatsApp)

---

## Kontak
- **WA Creator:** 6289635560147  
- **Demo Bot:** 6285119016078
