# Software Requirements Specification (SRS)
## LAGUIN. — Website Titip Pesan Melalui Lagu

### 1. Pendahuluan
**Tujuan:** Dokumen ini menjelaskan kebutuhan fungsional dan nonfungsional untuk website LAGUIN versi awal.

**Ruang lingkup:** Website memungkinkan pengguna memuat pemutar lagu Spotify melalui tautan, menulis pesan untuk penerima, dan menampilkan kartu kiriman di browser yang sama.

**Pengguna sasaran:** Pengunjung yang ingin membagikan lagu beserta pesan kepada seseorang.

### 2. Deskripsi umum
Website berjalan pada browser modern dan dibuat menggunakan HTML, CSS, dan JavaScript tanpa server khusus. Spotify Embed memerlukan koneksi internet. Penyimpanan kiriman menggunakan `localStorage`.

### 3. Kebutuhan fungsional
- **FR-01 Navigasi:** sistem menyediakan tautan ke Beranda, Buat Kiriman, dan Kiriman Lagu.
- **FR-02 Memuat lagu:** pengguna dapat memasukkan tautan track Spotify.
- **FR-03 Validasi tautan:** sistem menolak URL yang bukan tautan track Spotify dengan pesan yang mudah dipahami.
- **FR-04 Pemutar lagu:** sistem menampilkan Spotify Embed setelah tautan valid.
- **FR-05 Input pesan:** pengguna dapat mengisi nama pengirim (opsional), nama penerima (wajib), dan pesan (wajib, maksimal 300 karakter).
- **FR-06 Validasi form:** sistem menolak pengiriman jika lagu belum dimuat atau data wajib belum lengkap.
- **FR-07 Simpan kiriman:** sistem menyimpan kiriman ke `localStorage` browser.
- **FR-08 Tampilkan kiriman:** sistem menampilkan kiriman tersimpan sebagai kartu dengan penerima, pesan, pengirim, tanggal, dan tautan lagu.
- **FR-09 Penghitung karakter:** sistem memperbarui jumlah karakter pesan saat pengguna mengetik.

### 4. Kebutuhan nonfungsional
- **NFR-01 Responsif:** layout dapat digunakan pada layar desktop maupun ponsel.
- **NFR-02 Usability:** label form, placeholder, dan pesan validasi mudah dipahami.
- **NFR-03 Keamanan dasar:** teks dari pengguna ditampilkan menggunakan `textContent`, bukan disisipkan sebagai HTML mentah.
- **NFR-04 Kinerja:** halaman tidak memerlukan framework tambahan atau proses build.
- **NFR-05 Ketersediaan:** pemutar eksternal membutuhkan koneksi internet dan bergantung pada layanan Spotify.
- **NFR-06 Batas penyimpanan:** aplikasi menyimpan maksimal 50 kiriman terakhir di browser.

### 5. Alur utama
1. Pengguna membuka website.
2. Pengguna menyalin tautan track dari Spotify.
3. Pengguna menempelkan tautan dan memilih **Muat lagu**.
4. Sistem memvalidasi tautan dan menampilkan pemutar.
5. Pengguna mengisi nama penerima dan pesan, serta nama pengirim jika diinginkan.
6. Pengguna memilih **Kirim lagu**.
7. Sistem menyimpan kiriman ke `localStorage` dan memperbarui kartu kiriman.

### 6. Alur alternatif dan penanganan kesalahan
- Jika tautan tidak valid, sistem menampilkan pesan kesalahan dan tidak menampilkan pemutar.
- Jika lagu belum dimuat, sistem meminta pengguna memuat lagu terlebih dahulu.
- Jika penerima atau pesan kosong, kiriman tidak disimpan.
- Jika penyimpanan browser gagal, sistem menampilkan pesan kegagalan.
- Jika Spotify tidak dapat memutar konten, pengguna dapat mencoba membuka tautan di Spotify.

### 7. Kebutuhan antarmuka
- **Antarmuka pengguna:** tema gelap dengan aksen ungu, navigasi, form, pemutar, dan kartu kiriman.
- **Antarmuka eksternal:** Spotify Embed untuk menampilkan pemutar lagu.
- **Perangkat lunak:** browser modern yang mendukung HTML5, CSS, JavaScript, dan `localStorage`.

### 8. Batasan dan pengembangan berikutnya
Versi ini tidak memiliki pencarian lagu otomatis, akun pengguna, database bersama, moderasi kiriman, atau slider pemotong audio. Fitur tersebut dapat dipertimbangkan pada versi selanjutnya.
