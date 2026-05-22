# Personal Portfolio Website

Repository ini berisi template website portofolio pribadi berbasis **HTML, CSS/SCSS, dan JavaScript**. Template ini dapat digunakan untuk membuat halaman profil, portofolio proyek, sertifikasi, pengalaman, tautan media sosial, serta form kontak.

Website ini cocok digunakan sebagai:

- Website portofolio pribadi.
- Landing page profil profesional.
- Halaman profil GitHub Pages.
- Website sederhana untuk menampilkan proyek, pengalaman, dan kontak.

## Demo / Live Website

Jika repository ini digunakan melalui GitHub Pages, website dapat diakses melalui format berikut:

```text
https://username.github.io
```

Atau jika memakai custom domain, akses melalui domain yang sudah dikonfigurasi pada file `CNAME`.

## Tech Stack

Template ini menggunakan teknologi berikut:

- **HTML5** untuk struktur halaman.
- **CSS3** untuk styling utama.
- **SCSS/Sass** untuk pengelolaan style yang lebih modular.
- **JavaScript** untuk interaksi halaman.
- **GitHub Pages** untuk deployment website statis.

## Struktur Repository

Struktur utama repository:

```text
.
├── assets/              # Gambar, ikon, logo, dan aset pendukung
├── css/                 # File CSS hasil kompilasi
├── sass/                # Source SCSS/Sass
├── CNAME                # Opsional, untuk custom domain GitHub Pages
├── LICENSE              # Lisensi repository
├── index.html           # Halaman utama website
├── index.js             # Script interaksi website
├── package.json         # Konfigurasi npm script
├── package-lock.json    # Lock file dependency
├── profile.json         # Data profil, jika digunakan
├── project-1.html       # Halaman detail proyek 1
├── project-2.html       # Halaman detail proyek 2
└── project-3.html       # Halaman detail proyek 3
```

## Cara Menggunakan Repository Ini

### 1. Fork atau Clone Repository

Jika ingin menggunakan template ini untuk website sendiri, fork repository ini atau clone ke komputer lokal.

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

Ganti `username` dengan username GitHub Anda.

### 2. Install Dependency

Jalankan perintah berikut:

```bash
npm install
```

Dependency digunakan terutama untuk kebutuhan pengelolaan dan kompilasi SCSS/CSS.

### 3. Jalankan Website Secara Lokal

Karena website ini berbasis static HTML, Anda dapat langsung membuka file:

```text
index.html
```

Atau gunakan extension **Live Server** di Visual Studio Code agar proses preview lebih mudah.

### 4. Compile SCSS

Jika Anda mengubah file di folder `sass/`, jalankan:

```bash
npm run compile:scss
```

Perintah ini akan memantau perubahan pada file SCSS dan mengompilasinya menjadi CSS.

### 5. Build CSS untuk Production

Sebelum deploy, Anda dapat menjalankan:

```bash
npm run build
```

Perintah ini digunakan untuk memproses CSS agar lebih siap digunakan pada environment production.

## Bagian yang Perlu Diubah

Jika Anda ingin memakai repository ini sebagai website pribadi, berikut bagian-bagian utama yang perlu disesuaikan.

### 1. Ubah Identitas Website

Edit file:

```text
index.html
```

Bagian yang perlu disesuaikan antara lain:

- `<title>`
- meta description
- nama pada header/logo
- teks hero section
- deskripsi singkat profil
- tombol call-to-action
- footer

Contoh bagian yang biasanya diubah:

```html
<title>Nama Anda</title>
<meta name="description" content="Personal portfolio website" />
```

### 2. Ubah Foto, Logo, dan Ikon

File gambar berada pada folder:

```text
assets/
```

Biasanya gambar berada pada subfolder seperti:

```text
assets/png/
assets/jpeg/
assets/svg/
```

Hal yang dapat diganti:

- Foto profil.
- Logo.
- Ikon media sosial.
- Gambar proyek.
- Ilustrasi atau background.

Pastikan nama file pada HTML sesuai dengan nama file gambar yang baru.

Contoh:

```html
<img src="./assets/png/profile.png" alt="Profile Photo" />
```

### 3. Ubah Bagian About

Edit bagian `About` pada file:

```text
index.html
```

Sesuaikan isi dengan profil Anda, misalnya:

- Latar belakang singkat.
- Keahlian utama.
- Bidang pekerjaan.
- Minat profesional.
- Ringkasan pengalaman.

### 4. Ubah Daftar Keahlian

Pada bagian skills atau expertise, ubah daftar kemampuan sesuai kebutuhan.

Contoh:

```html
<div class="skills__skill">Web Development</div>
<div class="skills__skill">Cybersecurity</div>
<div class="skills__skill">Data Analysis</div>
```

### 5. Ubah Bagian Project

Bagian project biasanya berada di:

```text
index.html
project-1.html
project-2.html
project-3.html
```

Yang perlu diubah:

- Judul proyek.
- Deskripsi proyek.
- Gambar proyek.
- Link demo atau repository.
- Halaman detail proyek.

Jika ingin menambah proyek baru, duplikasi salah satu blok project yang sudah ada, lalu sesuaikan kontennya.

### 6. Ubah Bagian Sertifikasi atau Pengalaman

Jika template memiliki bagian sertifikasi, training, pengalaman, atau penugasan, ubah isinya pada file:

```text
index.html
```

Anda dapat menghapus bagian yang tidak diperlukan atau menggantinya dengan bagian lain, misalnya:

- Education.
- Work experience.
- Awards.
- Publications.
- Services.
- Portfolio highlights.

### 7. Ubah Link Media Sosial

Cari bagian link media sosial di file:

```text
index.html
```

Ganti URL sesuai akun Anda.

Contoh:

```html
<a href="https://www.linkedin.com/in/username/" target="_blank" rel="noreferrer">
```

Beberapa link yang biasanya perlu disesuaikan:

- LinkedIn.
- GitHub.
- Instagram.
- YouTube.
- WhatsApp.
- Email.

### 8. Ubah Form Kontak

Form kontak berada di file:

```text
index.html
```

Sedangkan proses pengiriman datanya berada di:

```text
index.js
```

Jika ingin menggunakan Google Apps Script, Formspree, Getform, atau backend sendiri, ubah endpoint pada bagian JavaScript.

Contoh konfigurasi endpoint:

```js
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
```

Pastikan backend menerima method:

```text
POST
```

Dan field form seperti:

```text
name
email
message
```

Jika memakai Google Apps Script, pastikan Apps Script sudah di-deploy sebagai Web App dan aksesnya diatur agar dapat menerima request dari website.

### 9. Ubah Warna dan Tampilan

Style utama berada di:

```text
css/style.css
```

Namun jika ingin mengubah dari sumber SCSS, edit file di folder:

```text
sass/
```

Setelah mengubah SCSS, jalankan:

```bash
npm run compile:scss
```

Bagian yang umum diubah:

- Warna utama.
- Font.
- Ukuran teks.
- Jarak antar section.
- Warna tombol.
- Tampilan card project.
- Tampilan form kontak.
- Responsiveness untuk mobile.

### 10. Ubah Custom Domain

Jika menggunakan custom domain, edit file:

```text
CNAME
```

Isi file tersebut dengan domain Anda.

Contoh:

```text
www.domainanda.com
```

Jika tidak memakai custom domain, file `CNAME` dapat dihapus.

## Deployment ke GitHub Pages

### 1. Push Perubahan ke GitHub

```bash
git add .
git commit -m "Update portfolio website"
git push origin main
```

### 2. Aktifkan GitHub Pages

Masuk ke repository GitHub, lalu buka:

```text
Settings > Pages
```

Pilih source branch, misalnya:

```text
main
```

Lalu pilih folder:

```text
/root
```

Simpan pengaturan tersebut.

### 3. Akses Website

Setelah GitHub Pages aktif, website dapat diakses melalui:

```text
https://username.github.io
```

Jika repository bukan repository utama GitHub Pages, biasanya URL menjadi:

```text
https://username.github.io/nama-repository
```

## Checklist Sebelum Deploy

Sebelum website dipublikasikan, pastikan hal-hal berikut sudah dicek:

- [ ] Nama website sudah diganti.
- [ ] Foto profil sudah diganti.
- [ ] Deskripsi profil sudah disesuaikan.
- [ ] Link media sosial sudah benar.
- [ ] Gambar project sudah sesuai.
- [ ] Halaman detail project sudah diperbarui.
- [ ] Form kontak sudah diuji.
- [ ] Endpoint form kontak sudah benar.
- [ ] Tidak ada link rusak.
- [ ] Tampilan mobile sudah dicek.
- [ ] File `CNAME` sudah sesuai atau dihapus jika tidak digunakan.
- [ ] Website sudah berhasil tampil melalui GitHub Pages.

## Troubleshooting

### Website tidak berubah setelah push

Coba lakukan langkah berikut:

1. Tunggu beberapa menit karena GitHub Pages membutuhkan waktu untuk deploy.
2. Refresh browser dengan `Ctrl + F5`.
3. Cek tab **Actions** atau **Pages** di repository GitHub.
4. Pastikan file yang diubah sudah benar-benar masuk ke branch yang digunakan GitHub Pages.

### CSS tidak berubah

Pastikan Anda sudah menjalankan:

```bash
npm run compile:scss
```

Atau jika ingin build final:

```bash
npm run build
```

### Gambar tidak muncul

Periksa kembali:

- Nama file.
- Ekstensi file.
- Huruf besar/kecil pada nama file.
- Path gambar pada HTML.

Contoh:

```html
<img src="./assets/png/profile.png" alt="Profile" />
```

### Form kontak tidak terkirim

Periksa:

- Endpoint pada `index.js`.
- Deployment Google Apps Script atau backend.
- Permission Web App.
- Console browser melalui Developer Tools.
- Struktur field form: `name`, `email`, dan `message`.

## Rekomendasi Pengembangan

Beberapa pengembangan yang dapat ditambahkan:

- Dark mode.
- Blog section.
- Dynamic project data dari JSON.
- Integrasi analytics.
- Validasi form yang lebih lengkap.
- Animasi scroll tambahan.
- SEO metadata.
- Sitemap dan robots.txt.
- Integrasi email notification.
- Integrasi CMS sederhana.

## Lisensi

Repository ini menggunakan lisensi yang tersedia pada file:

```text
LICENSE
```

Silakan baca file tersebut untuk mengetahui ketentuan penggunaan, modifikasi, dan distribusi ulang.
