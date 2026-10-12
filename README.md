# LAGUINKUY. — Satu lagu, sejuta rasa

LAGUINKUY adalah mini project website untuk menyampaikan pesan kepada seseorang melalui lagu. Pengguna memasukkan tautan lagu Spotify, memuat pemutar lagu, lalu menulis nama penerima dan pesan. Kiriman ditampilkan dalam bentuk kartu pada halaman **Kiriman Lagu**, **History**, dan tiga kiriman terbaru di **Beranda**.

Project ini dibuat menggunakan HTML, CSS, dan JavaScript murni (vanilla JavaScript), tanpa framework frontend dan tanpa database server.


## 🔗 Link Live Website & Domain
- **URL Domain (GitHub Pages):**  https://pilgrimmzz.github.io/laguinkuy/
- **Repositori GitHub:** https://github.com/Pilgrimmzz/laguinkuy

## 👥 Identitas Anggota Kelompok 88
| Nama | NIM | Peran Utama |
| :--- | :--- | :--- |
| **Muhammad Avin Nugraha** | `25091397128` | Project Lead |
| **Dafa Prima Nugraha** | `25091397133` | CSS Stylist & Javascript |
| **Jacinda Jihan Ramatadi** | `25091397135` | Web Devloper |

## Daftar isi

1. [Fitur utama](#fitur-utama)
2. [Struktur folder](#struktur-folder)
3. [Cara menjalankan](#cara-menjalankan)
4. [Penjelasan setiap file](#penjelasan-setiap-file)
5. [Penjelasan HTML](#penjelasan-html)
6. [Penjelasan CSS](#penjelasan-css)
7. [Penjelasan JavaScript](#penjelasan-javascript)
8. [Alur penggunaan website](#alur-penggunaan-website)
9. [Penyimpanan data](#penyimpanan-data)
10. [Batasan project](#batasan-project)
11. [Rencana pengembangan](#rencana-pengembangan)

## Fitur utama

- **Beranda:** halaman pengenalan LAGUINKUY dan menampilkan maksimal tiga kiriman terbaru.
- **Kirim Pesan:** form untuk memasukkan tautan lagu Spotify, nama pengirim, nama penerima, dan pesan.
- **Spotify Embed:** menampilkan pemutar lagu Spotify langsung di dalam halaman.
- **Kiriman Lagu:** menampilkan semua kiriman yang tersimpan di browser tersebut.
- **History:** menampilkan riwayat kiriman dan menyediakan tombol hapus.
- **Konfirmasi hapus:** dialog konfirmasi ditampilkan sebelum kiriman benar-benar dihapus.
- **Dark Mode dan Light Mode:** pengguna dapat mengganti tema melalui tombol di navbar; pilihan disimpan agar tetap digunakan saat berpindah halaman atau memuat ulang halaman.
- **Validasi form:** tautan Spotify diperiksa dan nama penerima serta pesan wajib diisi.
- **Penghitung karakter:** menampilkan jumlah karakter pesan dari batas maksimum 300 karakter.
- **Tampilan responsif:** layout menyesuaikan layar desktop dan ponsel.
- **Batas penyimpanan:** maksimal 50 kiriman terbaru disimpan pada browser.

## Struktur folder

```text
laguin/
├── index.html       # Halaman utama
├── kirimpesan.html    # Form untuk mengirim lagu dan pesan
├── kirimanlagu.html   # Daftar semua kiriman yang tersimpan
├── history.html       # Riwayat kiriman dan fitur hapus
├── style.css          # Gaya visual, layout, tema, dan responsivitas
├── script.js          # Logika interaksi dan pengelolaan data
├── README.md          # Dokumentasi project
└── SRS.md             # Software Requirements Specification
```

## Cara menjalankan

1. Ekstrak file ZIP project.
2. Buka folder `laguin` menggunakan Visual Studio Code atau editor kode lain.
3. Jalankan `beranda.html` di browser. Disarankan menggunakan ekstensi **Live Server** di Visual Studio Code.
4. Pastikan perangkat terhubung ke internet agar pemutar Spotify dan layanan metadata lagu dapat dimuat.
5. Gunakan navigasi di bagian atas untuk membuka halaman lainnya.

> Mulai dari `beranda.html`, bukan `index.html`, karena project ini menggunakan empat file HTML terpisah.

## Penjelasan setiap file

### 1. `index.html`

File ini membentuk halaman utama. Bagian utamanya adalah:

- **Header dan navbar:** menampilkan identitas LAGUIN, tautan menuju empat halaman, dan tombol pengganti tema.
- **Hero section:** memperkenalkan tujuan website dan tombol untuk menuju halaman Kirim Pesan.
- **Kiriman terbaru:** memiliki elemen `homeMessageResults` yang diisi JavaScript dengan maksimal tiga kiriman terbaru.
- **Footer:** menampilkan identitas dan slogan singkat website.

Atribut `data-page="beranda"` pada elemen `<body>` memberi tahu JavaScript bahwa halaman yang sedang dibuka adalah Beranda.

### 2. `kirimpesan.html`

File ini berisi dua form utama:

- **Form Spotify (`spotifyForm`):** menerima tautan lagu Spotify dan menjalankan proses pemuatan lagu.
- **Form pesan (`messageForm`):** menerima nama pengirim, nama penerima, dan isi pesan.
- **`spotifyPlayer`:** wadah untuk pemutar Spotify yang dibuat oleh JavaScript.
- **`spotifyStatus` dan `formStatus`:** menampilkan informasi keberhasilan atau kesalahan kepada pengguna.
- **`charCount`:** menunjukkan jumlah karakter pesan yang sudah diketik.

Nama pengirim boleh dikosongkan. Jika kosong, sistem menggunakan nama **Anonim**. Nama penerima dan isi pesan wajib diisi.

### 3. `kirimanlagu.html`

File ini menyediakan tempat untuk menampilkan semua kiriman yang tersimpan. JavaScript membuat kartu lagu dan memasukkannya ke elemen `messageResults`. Jika belum ada kiriman, elemen `emptyState` menampilkan informasi bahwa daftar masih kosong.

### 4. `history.html`

Halaman ini menampilkan daftar kiriman yang tersimpan di browser. Setiap kartu di halaman History mempunyai tombol **Hapus**. Saat tombol ditekan, JavaScript membuka dialog konfirmasi. Data baru dihapus setelah pengguna menekan tombol konfirmasi.

### 5. `style.css`

File ini mengatur tampilan seluruh halaman, termasuk warna, tipografi, jarak, navbar, tombol, form, kartu lagu, dialog hapus, animasi, dan tampilan untuk layar kecil.

### 6. `script.js`

File ini merupakan pusat logika interaktif website. Fungsinya mencakup penggantian tema, validasi tautan Spotify, menampilkan pemutar, validasi form pesan, penyimpanan data, pembuatan kartu, pengisian halaman, serta penghapusan kiriman.

### 7. `SRS.md`

Dokumen **Software Requirements Specification** yang berisi gambaran kebutuhan dan spesifikasi mini project.

## Penjelasan HTML

HTML berfungsi sebagai **kerangka halaman**. HTML menentukan elemen yang tersedia, seperti judul, navbar, form, area pemutar Spotify, daftar kiriman, dan footer.

Elemen yang sering digunakan:

- `<header>`: bagian kepala halaman, berisi identitas dan navigasi.
- `<nav>`: kumpulan tautan untuk berpindah halaman.
- `<main>`: konten utama halaman.
- `<section>`: mengelompokkan konten berdasarkan fungsi.
- `<form>`, `<input>`, dan `<textarea>`: menerima masukan pengguna.
- `<button>`: menjalankan tindakan seperti memuat lagu, mengirim pesan, mengganti tema, atau menghapus kiriman.
- `<div>`: wadah untuk konten yang nantinya diisi atau diatur oleh JavaScript dan CSS.
- `<script src="script.js" defer></script>`: memuat JavaScript setelah browser memproses struktur HTML.
- `<link rel="stylesheet" href="style.css">`: menghubungkan halaman dengan file CSS.

Atribut seperti `id="messageForm"` digunakan JavaScript untuk menemukan elemen tertentu. Atribut `data-page` memberi identitas halaman, sedangkan `data-nav` membantu menandai menu navigasi yang sedang aktif.

## Penjelasan CSS

CSS berfungsi untuk **mengatur desain dan tata letak**. Aturan umum yang digunakan di project ini meliputi:

- **Variabel CSS di `:root`:** menyimpan warna utama seperti `--bg` (latar), `--panel` (permukaan kartu/form), `--text` (teks), `--muted` (teks sekunder), `--accent` (aksen), dan `--line` (garis/border). Variabel memudahkan perubahan warna secara konsisten.
- **Flexbox:** digunakan untuk menyusun elemen secara sejajar, misalnya navbar, form, dan informasi pada kartu.
- **CSS Grid:** digunakan untuk menyusun kartu kiriman dalam beberapa kolom.
- **`border`, `border-radius`, dan `box-shadow`:** memberi garis tepi, sudut membulat, dan kedalaman visual.
- **`transition` dan `@keyframes`:** memberi animasi ringan pada tombol, kartu, dan dialog konfirmasi.
- **Media query `@media`:** mengubah susunan elemen pada layar kecil agar nyaman digunakan di ponsel.
- **`[hidden]`:** menyembunyikan elemen yang belum perlu ditampilkan.
- **`prefers-reduced-motion`:** mengurangi animasi jika pengaturan perangkat pengguna meminta gerakan yang lebih sedikit.

### Cara kerja Dark Mode dan Light Mode

Tema gelap menjadi tema awal. Variabel warna pada `:root` digunakan untuk tema gelap, sedangkan aturan `:root[data-theme="light"]` mengganti variabel warna ketika tema terang dipilih. Karena komponen menggunakan variabel CSS, warna latar, teks, form, kartu, dan sebagian besar komponen menyesuaikan tema secara konsisten.

Tombol dengan atribut `data-theme-toggle` ditemukan oleh JavaScript. Saat tombol ditekan, JavaScript mengganti atribut `data-theme` pada elemen `<html>` menjadi `light` atau `dark`. CSS kemudian menerapkan palet warna yang sesuai.

## Penjelasan JavaScript

JavaScript membuat halaman menjadi interaktif. Berikut penjelasan bagian-bagian penting yang ada di `script.js`.

### 1. Konstanta penyimpanan

```js
const STORAGE_KEY = "laguin-messages-v1";
const THEME_KEY = "laguin-theme-v1";
```

- `STORAGE_KEY` adalah nama kunci untuk menyimpan daftar kiriman di `localStorage`.
- `THEME_KEY` adalah nama kunci untuk menyimpan pilihan tema pengguna.
- `const` digunakan untuk variabel yang tidak akan diberi nilai baru melalui assignment.

### 2. Fungsi `applyTheme(theme)`

Fungsi ini menerapkan tema yang diminta. Nilai tema dinormalisasi menjadi `light` atau `dark`, lalu disimpan pada atribut `data-theme` di elemen HTML. Fungsi juga mengubah ikon, tulisan, dan atribut aksesibilitas tombol tema agar sesuai dengan pilihan saat ini.

### 3. Membaca dan menyimpan tema

Saat halaman dimuat, JavaScript mencoba membaca tema dari `localStorage`. Jika belum ada pilihan yang tersimpan, tema awalnya adalah gelap. Event `click` pada setiap tombol tema akan mengganti tema, memanggil `applyTheme()`, lalu menyimpan pilihan baru ke `localStorage`.

### 4. Mengambil elemen HTML

```js
const $ = (id) => document.getElementById(id);
```

Fungsi pendek `$` memudahkan pencarian elemen berdasarkan atribut `id`. Contohnya, `$("spotifyForm")` mengambil form Spotify, sedangkan `$("message")` mengambil kolom pesan.

### 5. Fungsi `getMessages()`

Fungsi ini membaca data kiriman dari `localStorage`, mengubah teks JSON menjadi array JavaScript dengan `JSON.parse()`, dan memastikan hasilnya berbentuk array. Jika data belum ada atau tidak dapat dibaca, fungsi mengembalikan array kosong agar website tetap dapat berjalan.

### 6. Memuat tautan Spotify

Event `submit` pada `spotifyForm` menjalankan langkah-langkah berikut:

1. `event.preventDefault()` mencegah form memuat ulang halaman secara otomatis.
2. `new URL()` memeriksa apakah teks yang dimasukkan merupakan URL yang valid.
3. Sistem memastikan domain berasal dari `open.spotify.com` dan tautan mempunyai ID track.
4. Sistem menyiapkan data lagu, seperti ID, judul sementara, artis, gambar cover, dan URL lagu.
5. Kode mencoba mengambil metadata melalui endpoint oEmbed Spotify. Kode juga mencoba mencari informasi artis dan artwork melalui iTunes Search API.
6. JavaScript membuat elemen `<iframe>` yang alamatnya mengarah ke Spotify Embed, lalu memasukkannya ke `spotifyPlayer`.
7. Pesan status diperbarui agar pengguna mengetahui bahwa pemutar sudah dimuat.

**Apa itu Spotify Embed?** Spotify Embed adalah pemutar yang disediakan Spotify agar lagu dapat ditampilkan langsung di website lain. LAGUINKUY tidak mengunggah atau menyimpan file audio lagu; pemutaran tetap dikelola Spotify dan mengikuti ketersediaan serta ketentuan layanannya.

> Pengambilan metadata dari Spotify oEmbed dan iTunes Search bergantung pada layanan eksternal, koneksi internet, dan respons API. Jika metadata tidak berhasil diperoleh, website menggunakan informasi pengganti. Pemutar Spotify tetap dibuat berdasarkan ID track yang valid.

### 7. Penghitung karakter

Event `input` pada kolom pesan berjalan setiap kali pengguna mengetik atau menghapus teks. Kode membaca `messageInput.value.length` dan memperbarui teks pada `charCount`. Batas kolom pesan diatur pada HTML dengan `maxlength="300"`.

### 8. Fungsi `createTextElement(tag, className, text)`

Fungsi ini membuat elemen HTML baru, menetapkan nama kelas CSS jika tersedia, lalu memasukkan teks menggunakan `textContent`. Penggunaan `textContent` membantu agar isi pesan pengguna ditampilkan sebagai teks, bukan diperlakukan sebagai HTML.

### 9. Fungsi `createMessageCard(item)`

Fungsi ini membentuk satu kartu kiriman. Kartu dapat memuat:

- gambar cover lagu, atau simbol musik jika gambar tidak tersedia;
- judul lagu dan nama artis;
- nama penerima dan isi pesan;
- nama pengirim dan tanggal kiriman;
- tautan **Buka lagu** untuk membuka Spotify pada tab baru.

Jika halaman yang dibuka adalah History, fungsi menambahkan tombol Hapus. Tombol hapus tidak ditambahkan pada kartu Beranda maupun Kiriman Lagu.

### 10. Fungsi `renderInto()` dan fungsi render halaman

`renderInto(containerId, emptyId, items)` membersihkan daftar yang lama, menyembunyikan atau menampilkan pesan kosong sesuai jumlah data, lalu membuat kartu untuk setiap item.

Fungsi yang memanggilnya adalah:

- `renderHomeRecent()`: menampilkan tiga kiriman terbaru menggunakan `slice(0, 3)`.
- `renderMessages()`: menampilkan semua kiriman pada halaman Kiriman Lagu.
- `renderHistory()`: menampilkan semua kiriman pada halaman History.

### 11. Mengirim dan menyimpan pesan

Saat `messageForm` dikirim:

1. JavaScript mencegah form melakukan submit standar.
2. Sistem memeriksa apakah lagu sudah dimuat.
3. Sistem memeriksa nama penerima dan isi pesan.
4. Data kiriman dibuat dalam sebuah objek yang berisi ID unik, pengirim, penerima, pesan, data lagu, dan tanggal.
5. Data baru dimasukkan di awal array sehingga menjadi kiriman terbaru.
6. Array disimpan sebagai JSON di `localStorage`; hanya 50 kiriman terbaru yang dipertahankan.
7. Form direset, status diperbarui, lalu browser diarahkan ke `kirimanlagu.html`.

### 12. Menentukan menu aktif dan halaman yang ditampilkan

Nilai `document.body.dataset.page` dibaca untuk mengetahui halaman yang sedang dibuka. JavaScript menambahkan kelas `active` pada tautan navigasi yang cocok. Berdasarkan nilai tersebut, JavaScript memanggil fungsi render Beranda, Kiriman Lagu, atau History yang sesuai.

### 13. Menghapus kiriman melalui History

Event klik pada dokumen mendeteksi tombol yang mempunyai atribut `data-delete-message`. Kode memastikan pengguna berada di halaman History, kemudian menampilkan dialog konfirmasi.

- **Batal:** menutup dialog tanpa mengubah data.
- **Klik area luar dialog:** menutup dialog.
- **Tombol Escape:** menutup dialog.
- **Ya, hapus:** menyaring kiriman yang ID-nya dipilih, lalu menyimpan kembali daftar yang tersisa ke `localStorage` dan memperbarui tampilan History.

Karena semua halaman membaca sumber penyimpanan yang sama, kiriman yang dihapus tidak akan muncul lagi ketika Beranda atau Kiriman Lagu dibuka atau dimuat ulang.

## Alur penggunaan website

1. Pengguna membuka Beranda.
2. Pengguna masuk ke halaman Kirim Pesan.
3. Pengguna menempelkan tautan track Spotify dan memilih **Muat lagu**.
4. Website memvalidasi tautan dan menampilkan pemutar Spotify Embed.
5. Pengguna mengisi nama penerima dan pesan; nama pengirim dapat dikosongkan.
6. Pengguna menekan **Kirim lagu**.
7. Data disimpan pada `localStorage` browser yang sedang digunakan.
8. Pengguna dapat melihat daftar di Kiriman Lagu dan riwayat di History.
9. Pengguna dapat menghapus kiriman dari History setelah menyetujui dialog konfirmasi.
10. Pengguna dapat berganti Dark Mode dan Light Mode melalui tombol tema pada navbar.

## Penyimpanan data

Project ini memakai **`localStorage`**, yaitu penyimpanan sederhana yang tersedia di browser. Data kiriman menggunakan kunci `laguin-messages-v1`, sedangkan tema menggunakan kunci `laguin-theme-v1`.

Konsekuensinya:

- Data tersimpan pada browser dan perangkat yang digunakan.
- Data tidak otomatis dibagikan atau disinkronkan ke browser/perangkat orang lain.
- Menghapus data situs atau membersihkan penyimpanan browser dapat menghapus kiriman dan pilihan tema.
- Untuk membuat semua pengunjung melihat daftar kiriman yang sama, project perlu dikembangkan dengan backend dan database bersama.

## Batasan project

- Pengguna harus memasukkan tautan track Spotify; pencarian katalog lagu langsung dari LAGUIN belum tersedia.
- Informasi judul, artis, dan cover bergantung pada layanan metadata eksternal dan dapat tidak selalu akurat atau tersedia.
- Spotify Embed bukan file audio milik LAGUIN. Ketersediaan dan kontrol pemutaran mengikuti Spotify.
- `localStorage` bukan database bersama dan tidak cocok untuk sinkronisasi antarpengguna.
- Belum ada akun pengguna, autentikasi, maupun backend.
- Fitur pemutaran, metadata, dan tautan eksternal memerlukan koneksi internet.


## Rencana pengembangan

Pengembangan berikutnya dapat mencakup pencarian lagu langsung di website melalui integrasi resmi yang sesuai dengan ketentuan Spotify, backend dan database agar kiriman bisa dibagikan antarpengguna, akun pengguna, search bar nama yang terunggah, serta pengujian aksesibilitas dan keamanan yang lebih menyeluruh.

## Pengujian yang disarankan

- Masukkan tautan track Spotify valid dan pastikan pemutar muncul.
- Masukkan teks atau URL yang bukan tautan track Spotify dan pastikan pesan validasi tampil.
- Coba mengirim pesan tanpa memuat lagu, tanpa nama penerima, atau tanpa isi pesan.
- Kirim data lengkap dan periksa kartu di Kiriman Lagu, History, serta tiga kiriman terbaru di Beranda.
- Muat ulang halaman dan pastikan data serta pilihan tema masih tersimpan pada browser yang sama.
- Ubah tema pada satu halaman, lalu buka halaman lain untuk memastikan pilihan tema konsisten.
- Hapus satu kiriman dari History; coba tombol Batal dan konfirmasi penghapusan.
- Uji tampilan di desktop dan layar ponsel.
  

## Catatan untuk presentasi

LAGUINKUY menggunakan HTML untuk struktur halaman, CSS untuk desain dan responsivitas, serta JavaScript untuk validasi input, menampilkan Spotify Embed, mengelola kartu kiriman, menyimpan data ke `localStorage`, menghapus kiriman, dan mengganti tema. Spotify Embed dipilih sebagai solusi pada versi mini project ini karena katalog lagu belum dicari langsung melalui LAGUINKUY.
