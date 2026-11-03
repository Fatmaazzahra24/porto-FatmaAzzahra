# Aset hero

## Visual Projects

- Gambar asli dari pemilik dipakai langsung dari `public/images/`:
  Volta: `volta1.png`, `volta2.png`, `volta3.png`, `volta4.jpeg`;
  ReWorth: `reworth1.png` sampai `reworth4.png`, lalu `reworth5.jpg`;
  Lab SE: `LabSE1.png`, `LabSE2.png`, `LabSE3.jpeg`;
  SENTRA: `sentra1.jpg`, `sentra2.jpg`.
- Properti `images` di `src/data/projects.js` menentukan urutan galeri gambar.
  Gambar pertama tampil sebagai cover daftar proyek, kecuali SENTRA yang memakai
  thumbnail YouTube sebagai cover dan slide pertama popup. Setelah video,
  slide SENTRA berikutnya adalah `sentra1.jpg` lalu `sentra2.jpg`.
  Galeri mendukung swipe/scroll horizontal, tombol sebelumnya/berikutnya,
  tombol panah keyboard, dan indikator nomor. Gambar utuh dengan `object-fit: contain`.
- CampusLink dan Yuk Sehat masih menggunakan placeholder “Preview coming soon”.
- Dokumentasi SENTRA diberikan pemilik: `https://youtu.be/7h6lR3c9FPs`.
  Thumbnail disimpan lokal di `public/images/sentra-video-thumbnail.jpg`, sumber
  `https://i.ytimg.com/vi/7h6lR3c9FPs/hqdefault.jpg`.
  Player YouTube dimuat ketika thumbnail diklik, dengan tautan YouTube alternatif.
  Pindah dari slide video atau menutup popup menghentikan pemutaran.
- Tidak ada foto stok atau gambar AI yang digunakan. Screenshot Volta diberikan
  langsung oleh pemilik; tidak ada akses tambahan ke repo privatnya.

## Aset Education

- Logo Polinema menggunakan file dari pemilik: `public/images/logo_polinema.png`.
- Logo SMKN 2 Bojonegoro menggunakan file dari pemilik: `public/images/logo-SMK2.png`.
- Kedua logo diatur di `src/data/education.js` dan ditampilkan utuh dengan
  `object-fit: contain`. File logo Polinema sebelumnya tetap disimpan.
- Isi Education mengikuti referensi pemilik; deskripsi Polinema menggunakan
  teks pengganti yang diberikan pemilik secara utuh.
- Dotted pattern berada di `body` pada `src/styles/global.css` dan section
  menggunakan background transparan supaya pola menyambung sepanjang halaman.

## Aset yang sudah terpasang

| Bahan | Tujuan | Lokasi |
| --- | --- | --- |
| Gambar ID card yang sudah menyatu dengan foto | Visual utama hero | `public/images/fatma-id-card.png` |
| CV PDF | Tombol View Resume | `public/documents/fatma-cv.pdf` |

Pemilik menyatakan foto dan ID card sudah menjadi satu gambar, sehingga tidak perlu
foto portrait terpisah. Gunakan file asli yang tajam; jika background transparan,
pertahankan format PNG atau WebP. Jangan mengganti ekstensi tanpa konversi format.
Tidak ada foto internet atau foto buatan AI yang dipakai sebagai portrait.

Semua URL aset dan kontak hero diatur melalui `src/data/hero.js`.
`idCardUrl` sudah menunjuk gambar asli berukuran 523 × 477 px dengan transparansi.
Gambar dipasang utuh tanpa crop dan tanpa kartu/lanyard CSS tambahan.
`resumeUrl` sudah menunjuk CV PDF yang diberikan pemilik.
Sesuai permintaan terbaru, hanya tombol View Resume yang ditampilkan; tombol
Download CV dihapus. PDF dibuka di tab baru tanpa atribut download.

Sebelum file tersedia, tombol dokumen dinonaktifkan dan diberi keterangan.
Email aktif menggunakan `mailto:fatmaazzahra24@gmail.com`.
LinkedIn tetap kosong (`null`) dan tidak ditampilkan sampai URL diberikan.
GitHub menggunakan URL yang diberikan pemilik.

Gambar dan PDF berhasil dimuat melalui development server. Header file dan
Content-Type PDF telah diperiksa, sehingga tombol tidak mengarah ke halaman fallback.

Referensi visual terbaru dari pemilik digunakan untuk heading tebal, tanda seru pink,
garis pemisah pink, wordmark `fatma.`, active state Home yang lembut, serta social links
dengan ikon pink dan label kontak asli. Background putih memiliki dotted pattern kecil.

## Font dan ikon

- Manrope Latin variable, diunduh dari Google Fonts:
  `https://fonts.gstatic.com/s/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2`.
  Disimpan lokal di `public/fonts/manrope-latin-variable.woff2`.
- Lisensi Manrope SIL Open Font License tersimpan di `public/fonts/Manrope-OFL.txt`.
  Sumber: `https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt`.
- Ikon antarmuka: Lucide React.
- Brand marks GitHub dan LinkedIn: Simple Icons 11.15.0, CC0,
  disimpan sebagai path SVG lokal dalam `SocialLinks.jsx` karena Lucide versi baru
  tidak menyediakan ikon brand tersebut.
  Sumber:
  `https://github.com/simple-icons/simple-icons/blob/11.15.0/icons/github.svg`
  dan `https://github.com/simple-icons/simple-icons/blob/11.15.0/icons/linkedin.svg`.

Warna merah badge ditambahkan khusus mengikuti permintaan visual ID card.
Warna, spacing, typography, dan radius lainnya tersedia di `src/styles/tokens.css`.
