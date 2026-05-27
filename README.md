# .: Cak Gup :. — Personal Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Website-cakgup.github.io-0052CC?style=for-the-badge&logo=githubpages&logoColor=white" alt="Website Badge">
  <img src="https://img.shields.io/badge/Stack-HTML%20%7C%20SCSS%20%7C%20JavaScript-00B4D8?style=for-the-badge" alt="Stack Badge">
  <img src="https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge" alt="License Badge">
</p>

<p align="center">
  <b>Website portfolio pribadi untuk menampilkan profil profesional, pengalaman, sertifikasi, karya, kontribusi sosial, dan jejak pembelajaran teknologi.</b>
</p>

<p align="center">
  <a href="https://cakgup.github.io">🌐 Lihat Website</a> ·
  <a href="https://github.com/cakgup">🐙 GitHub</a> ·
  <a href="https://www.linkedin.com/in/cakgup/">💼 LinkedIn</a>
</p>

---

## السلام عليكم ورحمة الله وبركاته

Repository ini berisi website portfolio **Cak Gup** — Mukhammad Gufron Ikhsan — yang dibangun sebagai halaman personal berbasis **GitHub Pages**. Website ini dirancang untuk menjadi etalase digital yang rapi, ringan, responsif, dan mudah dikembangkan ulang oleh siapa pun yang membutuhkan portfolio profesional sederhana.

Website ini memuat identitas profesional di bidang **cybersecurity**, **IT governance**, **IT infrastructure security**, **penetration testing**, **incident response**, **DevOps/CI/CD**, serta kontribusi sosial dan komunitas.

> **Didedikasikan untuk ummat.**  
> Semoga repository ini dapat menjadi inspirasi dan contoh sederhana bagi siapa pun yang ingin membangun jejak digital yang bermanfaat, profesional, dan mudah dibagikan.

---

## ✨ Tentang Website

Website ini berfungsi sebagai **personal landing page** dan **portfolio digital** yang menampilkan:

- profil singkat dan bidang keahlian;
- pengalaman profesional;
- sertifikasi dan pelatihan;
- proyek open source;
- proyek pemerintahan dan kontribusi organisasi;
- aktivitas sosial, dakwah, pendidikan, relawan, dan komunitas;
- form kontak;
- tautan media sosial dan kanal publik.

Website ini menggunakan pendekatan **static site**, sehingga dapat berjalan langsung melalui browser dan mudah dideploy ke GitHub Pages tanpa backend khusus.

---

## 🚀 Fitur Utama

| Fitur | Keterangan |
|---|---|
| 🏠 Hero Section | Tampilan pembuka dengan identitas, salam, dan ringkasan profesional |
| 👤 About Me | Profil singkat, fokus bidang, dan minat personal |
| 🧠 Technical Expertise | Daftar kompetensi utama seperti cybersecurity, pentesting, ITSM, ISO 27001, cloud, dan DevOps |
| 📁 Projects | Showcase proyek sosial, komunitas, open source, dan pemerintahan |
| 🎓 Certifications | Kumpulan sertifikasi dan pelatihan yang dikelompokkan per bidang |
| 🧭 Leadership & Taskforce | Peran dalam tim, task force, tata kelola, keamanan informasi, dan pengembangan aplikasi |
| 📬 Contact Form | Form kontak yang mengirim data ke endpoint Google Apps Script |
| 📱 Responsive Design | Tampilan menyesuaikan desktop, tablet, dan ponsel |
| 🎞️ Animasi Interaktif | Hamburger menu, typed text, scroll reveal, dan efek header saat scroll |
| 🌐 GitHub Pages Ready | Siap dideploy sebagai halaman `username.github.io` |

---

## 🧱 Teknologi yang Digunakan

Repository ini menggunakan teknologi web statis yang sederhana dan mudah dipelajari:

- **HTML5** untuk struktur halaman;
- **CSS / SCSS / Sass** untuk styling;
- **JavaScript Vanilla** untuk interaksi frontend;
- **Typed.js** untuk animasi teks pada hero section;
- **Google Apps Script** untuk menerima pesan dari form kontak;
- **GitHub Pages** untuk hosting gratis;
- **Node.js + npm** untuk proses build CSS.

---

## 📂 Struktur Repository

```text
cakgup.github.io/
├── assets/              # Gambar, ikon, dan aset visual website
├── css/                 # File CSS hasil kompilasi
├── sass/                # Source SCSS/Sass
├── .gitignore
├── CNAME                # Konfigurasi domain GitHub Pages
├── LICENSE              # Lisensi GPL-3.0
├── index.html           # Halaman utama portfolio
├── index.js             # Script interaksi frontend
├── package.json         # Konfigurasi npm dan build script
├── package-lock.json
├── profile.json         # Data profil, pengalaman, proyek, dan tautan sosial
├── project-1.html       # Halaman detail proyek Baghasasi Foundation
├── project-2.html       # Halaman detail proyek Relawan Indonesia
└── project-3.html       # Halaman detail proyek IMG Adventure
```

---

## 🖥️ Cara Menjalankan di Lokal

### 1. Clone repository

```bash
git clone https://github.com/cakgup/cakgup.github.io.git
cd cakgup.github.io
```

### 2. Buka langsung di browser

Karena ini static website, cara paling sederhana adalah membuka file berikut:

```text
index.html
```

Atau gunakan ekstensi **Live Server** di VS Code agar perubahan terlihat otomatis.

### 3. Instal dependency npm

Jika ingin mengubah file SCSS/Sass dan melakukan build CSS:

```bash
npm install
```

### 4. Jalankan mode compile SCSS

```bash
npm run compile:scss
```

Perintah ini akan memantau perubahan pada folder `sass/` dan menghasilkan file CSS ke folder `css/`.

### 5. Build CSS untuk produksi

```bash
npm run build
```

Perintah ini akan menjalankan autoprefixer dan kompresi CSS.

---

## 🧩 Cara Mengubah Data Portfolio

Sebagian data profil berada di file:

```text
profile.json
```

Anda dapat menyesuaikan bagian berikut:

```json
{
  "profile": {
    "name": "Nama Anda",
    "title": "Jabatan atau peran utama",
    "nickname": "Nama panggilan",
    "organization": "Organisasi",
    "location": "Lokasi",
    "email": "email@example.com",
    "about_me": "Ringkasan profil singkat"
  }
}
```

Bagian lain yang dapat diubah:

- `education` untuk riwayat pendidikan;
- `experience` untuk pengalaman kerja;
- `taskforces_and_roles` untuk peran khusus;
- `certifications_and_training` untuk sertifikasi;
- `projects` untuk daftar proyek;
- `skills` untuk kompetensi;
- `community_activities` untuk aktivitas sosial;
- `social_links` untuk tautan publik;
- `statistics` untuk ringkasan angka profil.

> Catatan: Pastikan format JSON tetap valid. Jika ada koma berlebih atau tanda kutip yang tidak tertutup, data tidak akan terbaca dengan benar.

---

## 🎨 Cara Mengubah Tampilan

### Ubah konten utama

Edit file:

```text
index.html
```

Gunakan file ini untuk mengubah teks, heading, section, tombol, dan struktur halaman.

### Ubah interaksi

Edit file:

```text
index.js
```

File ini mengatur:

- hamburger menu;
- klik logo ke homepage;
- animasi typed text;
- efek reveal saat scroll;
- efek header saat scroll;
- pengiriman contact form ke Google Apps Script.

### Ubah styling

Edit file SCSS di folder:

```text
sass/
```

Setelah mengubah SCSS, jalankan:

```bash
npm run compile:scss
```

atau build final:

```bash
npm run build
```

---

## 📬 Konfigurasi Contact Form

Form kontak pada website mengirimkan data ke endpoint **Google Apps Script** yang didefinisikan di `index.js`.

Cari bagian berikut:

```javascript
const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXX/exec'
```

Ganti URL tersebut dengan endpoint Apps Script milik Anda sendiri.

### Contoh data yang dikirim

```json
{
  "id": 123456789,
  "name": "Nama Pengirim",
  "email": "email@example.com",
  "message": "Isi pesan",
  "status": "email@example.com",
  "date": "27 Mei 2026 09.00",
  "color": "#25D366",
  "type": "contact"
}
```

### Catatan keamanan

- Jangan masukkan API key, token, password, atau credential rahasia ke repository publik.
- Gunakan validasi input pada sisi Apps Script.
- Batasi endpoint agar hanya menerima data yang diperlukan.
- Tambahkan proteksi spam sederhana jika form mulai menerima pesan otomatis.

---

## 🌐 Deploy ke GitHub Pages

Repository dengan nama:

```text
username.github.io
```

akan otomatis dapat diakses melalui:

```text
https://username.github.io
```

Untuk repository ini, website aktif pada:

```text
https://cakgup.github.io
```

### Langkah deploy

1. Push semua file ke branch `main`.
2. Buka repository di GitHub.
3. Masuk ke **Settings**.
4. Pilih **Pages**.
5. Pada bagian **Build and deployment**, pilih:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Simpan konfigurasi.
7. Tunggu beberapa saat sampai GitHub Pages selesai melakukan publikasi.

---

## 🔁 Cara Duplikasi untuk Portfolio Sendiri

Silakan duplikasi repository ini untuk membuat portfolio pribadi, komunitas, yayasan, atau organisasi.

### Opsi 1 — Fork

1. Klik tombol **Fork** di GitHub.
2. Ubah nama repository menjadi:

```text
username.github.io
```

3. Edit konten di `index.html` dan `profile.json`.
4. Ganti foto, logo, dan aset di folder `assets/`.
5. Aktifkan GitHub Pages.
6. Akses website melalui:

```text
https://username.github.io
```

### Opsi 2 — Clone manual

```bash
git clone https://github.com/cakgup/cakgup.github.io.git my-portfolio
cd my-portfolio
rm -rf .git
git init
git remote add origin https://github.com/username/username.github.io.git
git add .
git commit -m "Initial portfolio website"
git push -u origin main
```

---

## 🛠️ Troubleshooting

### 1. Website tidak berubah setelah push

Coba lakukan:

- refresh browser dengan `Ctrl + F5`;
- tunggu beberapa menit karena GitHub Pages kadang memerlukan waktu;
- cek menu **Settings → Pages**;
- pastikan file `index.html` berada di root repository.

### 2. CSS tidak berubah

Jalankan ulang:

```bash
npm run build
```

Lalu commit file CSS hasil kompilasi:

```bash
git add css/
git commit -m "Update compiled CSS"
git push
```

### 3. Error saat `npm install`

Dependency `node-sass` kadang sensitif terhadap versi Node.js. Jika terjadi error, gunakan Node.js versi yang kompatibel atau pertimbangkan migrasi dari `node-sass` ke package `sass`.

### 4. Form kontak tidak masuk

Periksa kembali:

- URL Google Apps Script;
- permission deployment Apps Script;
- format data yang diterima Apps Script;
- koneksi internet browser;
- console browser pada tab Developer Tools.

---

## 🧭 Rekomendasi Pengembangan Lanjutan

Beberapa ide pengembangan ke depan:

- menambahkan dark mode;
- membuat halaman blog sederhana;
- menampilkan data proyek secara dinamis dari `profile.json`;
- menambahkan halaman khusus sertifikasi;
- menambahkan Open Graph image agar link terlihat menarik saat dibagikan;
- menambahkan sitemap dan metadata SEO;
- menambahkan validasi form dan proteksi spam;
- menambahkan GitHub Actions untuk proses build otomatis.

---

## 🤝 Kontribusi

Kontribusi, masukan, dan pengembangan ulang sangat terbuka.

Jika ingin mengembangkan repository ini:

1. Fork repository.
2. Buat branch baru.
3. Lakukan perubahan.
4. Commit dengan pesan yang jelas.
5. Ajukan pull request.

Contoh:

```bash
git checkout -b feature/update-profile-section
git add .
git commit -m "Improve profile section"
git push origin feature/update-profile-section
```

---

## 📜 Lisensi

Repository ini menggunakan lisensi:

```text
GNU General Public License v3.0
```

Artinya, repository ini boleh digunakan, dipelajari, dimodifikasi, dan didistribusikan ulang sesuai ketentuan lisensi GPL-3.0.

---

## 🌱 Dedikasi

Website dan repository ini didedikasikan untuk:

- keluarga;
- guru dan orang tua;
- sahabat seperjuangan;
- komunitas teknologi;
- relawan;
- para pembelajar;
- dan seluruh ummat yang ingin bertumbuh melalui ilmu, karya, dan kontribusi.

> Ilmu yang bermanfaat bukan hanya yang tinggi secara teknis, tetapi juga yang mudah dipahami, dapat digunakan, dan membawa maslahat bagi orang banyak.

---

<p align="center">
  <b>.: Cak Gup :.</b><br>
  Cybersecurity & IT Governance Specialist<br>
  Built with sincerity, shared for benefit.
</p>
