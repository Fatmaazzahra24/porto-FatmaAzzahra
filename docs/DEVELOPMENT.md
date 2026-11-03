# Panduan pengembangan

## Status awal

Fondasi portfolio Fatma Azzahra menggunakan React, Vite, JavaScript/JSX, dan CSS murni.
Hero dan navbar sudah diimplementasikan mengikuti brief Minimalist Editorial:
background putih dengan dotted pattern, Manrope lokal, navy dan aksen pink kecil.
Hero memiliki layout dua kolom, satu tombol View Resume, social links, serta gambar
ID card/lanyard asli yang sudah menyatu dengan foto pemilik. Pada mobile, susunannya
menjadi satu kolom dengan menu hamburger. CV PDF, email, dan GitHub sudah aktif;
LinkedIn tetap kosong dan disembunyikan sesuai instruksi pemilik.
Section selain hero belum diimplementasikan; item navigasinya belum berupa tautan.
Daftar aset dan cara menggantinya tersedia di `docs/ASSETS.md`.

Target portfolio: peluang magang IT secara umum, sambil mengeksplorasi bidang.

## Menjalankan project

Gunakan Node.js 24 atau lebih baru. Setup ini menggunakan Node.js 24.21.0.
Jalankan perintah dari folder `D:\porto-FatmaAzzahra`.

```powershell
npm.cmd ci
npm.cmd run dev
```

Buka `http://127.0.0.1:5173`. Hentikan server dengan `Ctrl+C`.
`npm.cmd` digunakan agar perintah tetap berjalan jika PowerShell memblokir `npm.ps1`.
Di terminal yang mendukung `npm` secara langsung, kedua bentuk tersebut setara.

## Perintah

| Perintah | Kegunaan |
| --- | --- |
| `npm.cmd run dev` | Development server dan pembaruan otomatis saat kode berubah |
| `npm.cmd run lint` | Memeriksa kesalahan JavaScript, aturan React Hooks, dan Fast Refresh |
| `npm.cmd run lint:fix` | Memperbaiki temuan lint yang dapat diperbaiki otomatis |
| `npm.cmd run build` | Menghasilkan website statis di `dist/` |
| `npm.cmd run check` | Menjalankan lint dan build sebelum peninjauan |
| `npm.cmd run preview` | Memeriksa hasil build di `http://127.0.0.1:4173` |

Preview membutuhkan build terlebih dahulu dan digunakan untuk pemeriksaan lokal.
Server menggunakan port tetap; jika port sedang dipakai, Vite menampilkan error.

## Organisasi kode

```text
public/                Aset statis dengan nama tetap
src/
  assets/              Gambar dan media yang diimpor komponen
  components/layout/   Komponen tata letak reusable
  data/                Data profil dan kelak data proyek yang telah diverifikasi
  sections/            Bagian halaman setelah strukturnya disepakati
  styles/              CSS global dan styling komponen/halaman
  App.jsx              Komposisi halaman
  main.jsx             Entry point React
docs/                  Catatan pengembangan
```

Simpan komponen reusable di `components/`, komposisi section di `sections/`,
dan konten terstruktur di `data/`. Hindari menumpuk seluruh website dalam `App.jsx`.

`package-lock.json` disertakan agar instalasi dapat direproduksi dengan `npm.cmd ci`.
`node_modules/` dan `dist/` tidak dimasukkan ke Git.
Lucide React digunakan untuk ikon antarmuka. Font Manrope dilayani secara lokal.

## Hasil pemeriksaan setup

Pemeriksaan pada 3 November 2026:

- React 19.3.1 dan Vite 8.3.5 berhasil diinstal.
- `npm.cmd run check` lulus: ESLint tanpa warning dan build berhasil.
- Chrome headless berhasil merender identitas di viewport 375 × 812 dan 1440 × 900.
  Pemeriksaan ini merupakan smoke check halaman awal, bukan pengujian layout portfolio final.
- `npm.cmd audit --omit=dev` tidak menemukan kerentanan dependency produksi.
- Audit lengkap melaporkan enam temuan moderate dalam rantai dependency ESLint,
  bersumber dari advisory minimatch `GHSA-g3hv-75wg-m249`.
  npm belum menawarkan perbaikan kompatibel untuk rantai tersebut.
  Jangan menjalankan `npm audit fix --force` tanpa meninjau perubahan versi.

README awal dipertahankan. Belum ada commit, push, atau deployment yang dilakukan.

### Pemeriksaan implementasi hero

- Lint dan build lulus setelah implementasi hero dan navbar.
- Render Chrome diperiksa pada 1440×900, 1024×768, 820×1180, 768×1024,
  600×900, 375×812, dan 320×740 tanpa horizontal overflow atau kartu terpotong.
- Hamburger, Escape, pengembalian fokus, dan penutupan menu melalui Home berfungsi.
- Anchor yang aktif memiliki target, sedangkan item section mendatang bukan tautan.
- Header sticky dan preferensi reduced motion berfungsi; tidak ada error console browser.
- Hanya View Resume yang ditampilkan dan membuka CV PDF valid di tab baru tanpa download.
- ID card asli terdeteksi dimuat, email sesuai data pemilik, dan LinkedIn disembunyikan.
- Screenshot desktop, tablet, dan mobile ditinjau untuk komposisi serta keterbacaan.
- Audit dependency produksi setelah penambahan Lucide tetap tanpa temuan.

## Langkah berikutnya

1. Tinjau penyempurnaan hero berdasarkan referensi visual terbaru bersama pemilik.
2. Lanjutkan section landing page sesuai brief dan instruksi berikutnya dari pemilik.
3. Konfirmasi kontribusi ReWorth dan konteks/hasil proyek ETL sebelum menulis kontennya.
4. Siapkan screenshot karya asli, lalu periksa desktop, tablet, dan mobile setiap tahap.

Gunakan hanya informasi yang terverifikasi. Pemeriksaan GitHub sebelumnya
menunjukkan ReWorth, Java Swing Gym, website tugas K3 Bioavtur, dan ETL supermarket
sebagai kandidat pembahasan; daftar tersebut belum menjadi konten final.
