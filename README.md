# LAGUIN.

LAGUIN adalah website sederhana untuk menitipkan pesan kepada seseorang melalui lagu. Pengguna menempelkan tautan lagu Spotify, mengisi nama pengirim, nama penerima, dan pesan, lalu kiriman tampil sebagai kartu.

## Fitur
- Navigasi ke Beranda, Buat Kiriman, dan Kiriman Lagu.
- Memuat lagu Spotify melalui tautan track dan Spotify Embed.
- Validasi tautan, nama penerima, dan pesan.
- Penghitung karakter pesan.
- Manipulasi DOM untuk menampilkan kartu kiriman.
- Menyimpan hingga 50 kiriman di `localStorage` browser.
- Layout responsif untuk desktop dan ponsel.
- Animasi ringan saat kartu kiriman muncul.

## Struktur file
- `index.html` — struktur dan konten halaman.
- `style.css` — desain, layout, dan responsivitas.
- `script.js` — validasi, embed Spotify, event handling, DOM, dan penyimpanan lokal.
- `SRS.md` — dokumen kebutuhan perangkat lunak.

## Menjalankan secara lokal
1. Unduh atau clone repository.
2. Buka folder di Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi Live Server, atau buka file tersebut di browser.
4. Pastikan perangkat terhubung ke internet agar Spotify Embed dapat dimuat.

## Cara menggunakan
1. Buka Spotify dan pilih sebuah lagu.
2. Pilih **Bagikan → Salin tautan**.
3. Tempel tautan lagu pada kolom LAGUIN., lalu tekan **Muat lagu**.
4. Isi nama penerima dan pesan. Nama pengirim bersifat opsional.
5. Tekan **Kirim lagu**. Kartu kiriman akan muncul di bagian Kiriman Lagu.

## Teknologi
- **HTML**: menyusun header, navigasi, form, pemutar, bagian kiriman, dan footer.
- **CSS**: mengatur tema gelap, warna ungu, layout grid/flex, responsivitas, dan animasi.
- **JavaScript**: menangani event submit/input, memvalidasi tautan, membuat iframe Spotify, memvalidasi form, memperbarui DOM, dan menyimpan data ke `localStorage`.

## Batasan versi awal
- Lagu dimasukkan melalui tautan; website belum mempunyai pencarian katalog Spotify otomatis.
- `localStorage` hanya menyimpan kiriman pada browser/perangkat yang digunakan. Pengunjung lain tidak otomatis melihat kiriman tersebut.
- Versi ini belum memiliki slider untuk memotong rentang audio. Spotify Embed tidak diperlakukan sebagai file audio yang dapat dipotong atau diunduh.
- Ketersediaan pemutaran mengikuti Spotify, koneksi internet, wilayah, dan akun pengguna.
- Jangan menyimpan rahasia API di JavaScript frontend.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `laguin`.
2. Unggah `index.html`, `style.css`, `script.js`, `README.md`, dan `SRS.md` ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
6. Tunggu proses deploy. URL website akan muncul pada bagian GitHub Pages.

## Pengujian
- Masukkan tautan Spotify track yang valid: pemutar muncul.
- Masukkan URL yang bukan tautan track Spotify: pesan validasi muncul.
- Kirim form tanpa memilih/memuat lagu: kiriman ditolak.
- Kirim form tanpa penerima atau pesan: browser/form menolak pengiriman.
- Kirim form lengkap: kartu muncul.
- Muat ulang halaman pada browser yang sama: kartu masih tersimpan.
- Uji layout desktop dan ponsel.


## Halaman HTML terpisah
- `index.html` — halaman utama dan tiga kiriman terbaru.
- `kirimpesan.html` — formulir untuk mengirim lagu dan pesan.
- `kirimanlagu.html` — semua kiriman lagu.
- `history.html` — riwayat kiriman yang tersimpan di browser.

Keempat halaman menggunakan `style.css` dan `script.js` yang sama. Buka `index.html` melalui Live Server untuk memulai.
