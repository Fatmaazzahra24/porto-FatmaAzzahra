# Screening proyek portfolio Fatma Azzahra

Tanggal pemeriksaan: 3 November 2026.

Tujuan portfolio: magang IT secara umum. Proyek diprioritaskan berdasarkan
kedalaman implementasi, relevansi masalah, variasi bidang, dan bukti kontribusi
Fatma. Daftar ini merupakan draft untuk dibahas sebelum implementasi Projects.
Section Projects nantinya ditempatkan setelah Education sesuai permintaan terbaru.
Layout daftar horizontal kini mengikuti referensi terbaru pemilik: visual kiri,
ringkasan kanan, nomor dan teknologi, divider tipis, dan popup detail ketika diklik.
Foto asli pemilik kini tersedia untuk Volta, ReWorth, Lab SE, dan SENTRA;
CampusLink dan Yuk Sehat masih menggunakan placeholder yang diberi label jelas.

## Cakupan pemeriksaan

- Metadata dan struktur default branch seluruh 26 repositori publik
  [Fatmaazzahra24](https://github.com/Fatmaazzahra24?tab=repositories).
  Satu repo profil kosong; beberapa repo hanya berisi README.
- Daftar 22 repo publik SahrulRamadhani29 untuk menemukan kandidat yang disebutkan.
- Pemeriksaan mendalam kandidat terkait: README, manifest dependency, struktur
  fitur, kode yang relevan, commit dengan author Fatmaazzahra24, dan pull request.
- Aktivitas publik Fatma memperlihatkan kontribusi ke CampusLink dan Simple POS
  milik MohammadFebriansyah, yang tidak muncul sebagai repo milik Fatma.
- Pencarian repo publik menghasilkan repo tim Lab SE dan ReWorth yang memiliki
  commit Fatma. Repo dengan nama serupa tidak otomatis dianggap proyek yang sama.
- Akses hanya data publik. Daftar ini tidak mencakup repo privat, kontribusi
  non-code yang belum didokumentasikan, atau semua riwayat branch di seluruh GitHub.
- Aplikasi kandidat tidak dijalankan. Keberadaan fitur dalam kode tidak membuktikan
  deployment aktif, penggunaan produksi, hasil pengujian, atau pencapaian lomba.

## Rekomendasi lima kandidat sementara

Tiga kandidat pertama memiliki bukti kontribusi publik. Pemilik kemudian memberikan
tautan yang mengonfirmasi kelima repo Lab SE, ReWorth, CampusLink, Yuk Sehat, dan
SENTRA. Pemilik mengonfirmasi perannya di Yuk Sehat dan SENTRA sebagai sistem
analis, testing, dan presentasi. Ini merupakan keterangan langsung pemilik,
sementara stack aplikasi berasal dari pemeriksaan source proyek tim.
Volta-PLN dikonfirmasi privat dan merupakan proyek PLN. Sesuai instruksi pemilik,
jangan lanjut mengakses GitHub Volta-PLN; gunakan bahan yang nanti diberikan.

### 01. Software Engineering Laboratory Website

**2025 · Web Development**

Draft deskripsi:

> A laboratory information website that brings together research, publications,
> projects, and facilities, with an administration panel to manage and update
> laboratory content.

**PHP · PostgreSQL · JavaScript · HTML · CSS**

- Repo: [jsofiah/PBL-LabSE](https://github.com/jsofiah/PBL-LabSE).
- Nama pada halaman utama: `Laboratorium Software Engineer`.
- Struktur berisi halaman artikel/proyek/galeri, profil dosen, penelitian,
  publikasi, fasilitas, dan modul CRUD admin. `config.php` memakai driver
  PostgreSQL (`pg_connect`), bukan asumsi MySQL atau Laravel.
- Tahun 2025 didukung commit Fatma pada November–Desember 2025.
- Bukti kontribusi: halaman galeri, proyek dan artikel; modul penelitian dan
  publikasi; CRUD konten lab; pencarian; pagination; fitur dan tampilan backup.
- Contoh bukti:
  [CRUD konten lab](https://github.com/jsofiah/PBL-LabSE/commit/3acd31001ad7d8867afcfe6c9215aa08f7990842),
  [fitur backup](https://github.com/jsofiah/PBL-LabSE/commit/b5eb726b242b852dd05f4ec4285b4b25093c936d),
  [halaman galeri](https://github.com/jsofiah/PBL-LabSE/commit/e1209f8e55b2660ffa2f35679e7fb4ac0f953863).
- Penulisan peran yang aman: berkontribusi pada antarmuka publik, pengelolaan
  konten admin, pencarian, pagination, dan backup database dalam proyek tim.

### 02. ReWorth — Waste Reporting & Rewards

**2026 · Mobile Application Development**

Draft deskripsi:

> A mobile application that encourages community participation in waste management
> through location-based reporting, reward points, and a marketplace for recycled
> products, supported by dashboards for managing reports and transactions.

**Flutter · Dart · Riverpod · Supabase · PostgreSQL**

- Repo utama tim: [Wwidii/ReWorth_PBLsem4](https://github.com/Wwidii/ReWorth_PBLsem4).
- Aplikasi mobile asli berada di `mobile_reworth/`, dengan `pubspec.yaml`,
  source Dart, fitur laporan sampah, katalog, checkout, wishlist, profil, dan reward.
- `pubspec.yaml` mengonfirmasi Flutter, Riverpod, GoRouter, Supabase Flutter,
  geolocator, geocoding, dan flutter_map. PostgreSQL didukung ekosistem Supabase
  dan migrasi SQL dashboard.
- Tahun 2026 didukung repo tim dibuat Mei 2026 dan commit Fatma Mei–Juni 2026.
- Bukti kontribusi mencakup mobile marketplace/home/profile dan perbaikan aplikasi,
  dashboard seller/admin/DLH, serta koneksi data Supabase.
- Contoh bukti:
  [perbaikan mobile](https://github.com/Wwidii/ReWorth_PBLsem4/commit/dbeffa07e8d39ad12fe46b5b162a7a5e82880413),
  [dashboard admin](https://github.com/Wwidii/ReWorth_PBLsem4/commit/1e15451a8525b55946b81133d9e7e3a258f65cc9),
  [refactor struktur mobile](https://github.com/Wwidii/ReWorth_PBLsem4/commit/7b533346253b95842296a8236605d30bb5aaa4da).
- Commit perbaikan mobile diperiksa hingga daftar file: halaman home/notifikasi,
  laporan sampah, katalog/wishlist, profil, dan verifikasi DLH.
- Repo pendukung milik Fatma: `uireworth`, `HTML_reworth`, `Landingpage-ReWorth`.
  Tampilkan sebagai satu keluarga proyek agar tidak mengulang karya yang sama.
- `HTML_reworth` adalah prototipe antarmuka mobile berbasis HTML/PHP/JavaScript,
  bukan aplikasi Flutter. Contributor publik repo itu hanya `abiatarprado`;
  kepemilikan repo tidak dijadikan bukti menulis seluruh kode tersebut.
- Stack dashboard berbeda: PHP native, JavaScript, Supabase/PostgreSQL.
  Jangan mencantumkan Laravel untuk ReWorth tanpa sumber baru.

### 03. CampusLink — Student Opportunities Platform

**2026 · Web Development**

Draft deskripsi:

> A platform for Polinema students to discover internships, competitions, and
> scholarships, explore academic profiles, and connect with opportunities through
> dedicated student, lecturer, partner, and administrator features.

**Laravel · PHP · Blade · Alpine.js · PostgreSQL / Supabase**

- Repo tim:
  [MohammadFebriansyah/CampusLink_PBL_KEL4_SMT5](https://github.com/MohammadFebriansyah/CampusLink_PBL_KEL4_SMT5).
- README menyebut Laravel 13, Blade, Tailwind CSS v4, Alpine.js, Supabase/PostgreSQL.
  `composer.json` mengonfirmasi Laravel, Fortify, Socialite, dan PHP.
  Tailwind ini milik proyek CampusLink; portfolio tetap memakai CSS murni.
- Struktur memuat direktori mahasiswa/dosen, magang/lomba/beasiswa,
  pendaftaran/bimbingan, dan panel mitra/admin.
- Tahun 2026 didukung repo dibuat September 2026 dan commit Fatma Oktober 2026.
- Kontribusi terverifikasi Fatma: antarmuka login, pendaftaran, registrasi mitra
  industri, dan registrasi berdasarkan role. Jangan mengklaim seluruh fitur
  CampusLink sebagai hasil pekerjaan pribadi.
- Bukti:
  [PR #3 — register industry](https://github.com/MohammadFebriansyah/CampusLink_PBL_KEL4_SMT5/pull/3),
  [PR #14 — login dan daftar](https://github.com/MohammadFebriansyah/CampusLink_PBL_KEL4_SMT5/pull/14),
  [registrasi tiap role](https://github.com/MohammadFebriansyah/CampusLink_PBL_KEL4_SMT5/commit/d9ef9756774f1da5306ee5f4c012042c832664a6).

### 04. Yuk Sehat — AI-Assisted Health Triage

**2025–2026 · Web Development & AI Integration**

Draft deskripsi proyek tim:

> A web application that explores users' health complaints through interactive
> questions, applies rule-based and AI-assisted triage, and presents urgency
> categories, consultation history, and a monitoring dashboard for health staff.

**React · JavaScript · Python · FastAPI · PostgreSQL · Mistral AI**

- Repo diberikan langsung oleh pemilik:
  [SahrulRamadhani29/yuk-sehat](https://github.com/SahrulRamadhani29/yuk-sehat).
- Stack didukung `frontend/package.json`, `backend/requirements.txt`,
  `backend/database.py`, `backend/main.py`, dan `backend/mistral_ai.py`.
- Frontend memakai React/Vite/React Router dan Tailwind; backend memakai FastAPI,
  SQLAlchemy dan PostgreSQL. Mistral dipakai untuk mengurai keluhan dan pertanyaan
  lanjutan, digabung aturan tanda bahaya dan kelompok risiko.
- Kode mengandung hasil triase merah/kuning/hijau, riwayat, dan dashboard puskesmas.
  Deskripsi tidak boleh menyatakan diagnosis medis yang tervalidasi atau akurasi
  klinis karena tidak ada bukti tersebut dari pemeriksaan ini.
- Pengembangan utama tercatat Desember 2025, commit konfigurasi Vercel Februari
  2026. Jika memakai satu tahun, 2025 paling sesuai untuk awal proyek.
- README kosong. Semua 31 commit yang diperiksa terhubung ke akun Sahrul dan
  contributor publik hanya Sahrul. Belum ditemukan commit atas akun Fatma.
- Kontribusi dikonfirmasi langsung oleh pemilik: sistem analis, testing, dan
  presentasi. Label peran: **System Analyst · Testing · Presentation**.
  Jangan mengklaim Fatma menulis frontend/backend atau mengembangkan model AI.
  Detail metode analisis, jenis pengujian, dan hasilnya belum diberikan.
- Draft kontribusi: “Contributed to system analysis, application testing, and
  project presentation as part of the team.”

### 05. SENTRA — Smart Emergency Notification for Traffic Accident

**2025 · Computer Vision & Web Development**

Draft deskripsi proyek tim:

> A traffic accident detection and emergency notification system that analyzes
> CCTV footage using computer vision and presents incident alerts, locations,
> and monitoring information through a web dashboard.

**Next.js · React · Python · Flask · YOLO · Socket.IO · PostgreSQL**

- Repo [Noklent-Fardian/SENTRA](https://github.com/Noklent-Fardian/SENTRA) telah
  dikonfirmasi langsung oleh pemilik melalui tautan.
- Judul portfolio dan konteks KMIPN VII 2025 berasal dari informasi pemilik.
  README menggunakan judul alternatif `Smart Sensor-based Traffic Accident Alert`.
- Stack diperiksa melalui `package.json` (Next.js, React, Socket.IO, pg),
  `requirements.txt` (Flask, Ultralytics, OpenCV, PyTorch), `app.py` (pemanggilan
  YOLO dan event kecelakaan Socket.IO), serta README arsitektur PostgreSQL.
- README menyebut YOLOv8, integrasi CCTV, dashboard pemantauan, peta, dan notifikasi
  Telegram/WhatsApp. Keberadaan integrasi dalam repo bukan bukti layanan aktif.
- Tahun 2025 didukung repo dibuat Oktober 2025 dan konteks lomba dari pemilik.
- Contributor publik: Noklent-Fardian dan AdriFavian; tidak ditemukan commit akun
  Fatma pada default branch. Pemilik mengonfirmasi kontribusinya sebagai sistem
  analis, testing, dan presentasi. Label peran:
  **System Analyst · Testing · Presentation**.
- Draft kontribusi: “Contributed to system analysis, application testing, and
  project presentation as part of the team.” Jangan mengklaim Fatma menulis
  frontend/backend atau melatih model deteksi. Detail pengujian belum diberikan.
- Pemilik kemudian memberikan detail tambahan untuk popup: kategori IoT & Smart
  Transportation, Raspberry Pi, kamera, sensor mikrofon/getaran, YOLOv8, dan
  WhatsApp Bot. Informasi hardware dan validasi multi-sensor bersumber dari
  penjelasan pemilik, bukan hasil verifikasi source web. Popup merangkum empat
  fitur utama tanpa rincian model tiap sensor, fire detection, atau QR pairing.
- Judul popup mengikuti permintaan terbaru:
  **SENTRA — Sensor-based Traffic Accident Alert**.
- Jangan menambahkan klaim finalis/pemenang KMIPN atau peringkat tanpa informasi
  dari pemilik atau dokumen yang mengonfirmasi.

## Kandidat privat: Volta-PLN

Pemilik memberikan [SahrulRamadhani29/Volta-PLN](https://github.com/SahrulRamadhani29/Volta-PLN).
Halaman GitHub dan README raw default `main` mengembalikan HTTP 404 saat diakses
tanpa login. Repo juga tidak muncul pada daftar 22 repo publik Sahrul.
Setelah pemeriksaan awal itu, pemilik mengonfirmasi repo privat, merupakan proyek
PLN, dan menginstruksikan agar tidak diakses. Jangan melakukan akses GitHub lanjutan.
Pemilik akan memberikan gambar sendiri. Analisis deskripsi/isi hanya dari bahan
yang diberikan pemilik; lokasi salinan lokal atau teks README belum tersedia.
Tahun, tujuan, stack, dan kontribusi belum ditentukan. Jangan menebak teknologi
berdasarkan nama PLN atau memublikasikan isi repo privat ke portfolio.

## Cadangan jika kandidat belum dapat diverifikasi

### Gym Management System

**2025 · Desktop Application Development**

> A desktop application for managing gym member registration, instructor records,
> class schedules, and class enrollment through a Java Swing interface connected
> to a PostgreSQL database.

**Java · Swing · JDBC · PostgreSQL**

- [Fatmaazzahra24/PBO-ProjectGui](https://github.com/Fatmaazzahra24/PBO-ProjectGui).
- Source memuat form registrasi, instruktur, jadwal kelas, pendaftaran kelas,
  dashboard, dan driver PostgreSQL.
- Commit Fatma mendukung kontribusi form data instruktur, menu utama, banner,
  dan koneksi database pada Desember 2025. Proyek tim; bukan klaim semua modul.
- [Bukti form instruktur](https://github.com/Fatmaazzahra24/PBO-ProjectGui/commit/831d21ec8051f1efcc8cbda3922aca63991c19b2).
- Cadangan paling siap jika ingin segera mengisi lima proyek dengan bukti kode.

### Supermarket Data Warehouse ETL

**2026 · Data Engineering / ETL**

**Pentaho Data Integration · ETL · CSV**

- [Fatmaazzahra24/DW_ETL_supermarket](https://github.com/Fatmaazzahra24/DW_ETL_supermarket).
- Berisi `Projek UAS.ktr`, `UASprojek_fact.ktr`, dataset CSV, dan diagram alur.
  Cocok menunjukkan variasi keahlian pengolahan data untuk target magang IT umum.
- Tujuan draft: menyiapkan data transaksi supermarket melalui alur transformasi
  untuk kebutuhan data warehouse. Detail database target dan peran tim perlu
  pemeriksaan lanjutan sebelum ditulis lebih spesifik.

## Inventaris 26 repo publik milik Fatma

| Repo | Hasil screening / posisi portfolio |
| --- | --- |
| 05-Fatma-Azzahra-Alif-Hidayah-SIB1A | Empat latihan Java; bukan proyek utama. |
| Algoritma_Struktur_Data | Koleksi jobsheet dan studi kasus Java; mendukung skill dasar. |
| CaseMethod2_ALSD | Simulasi antrean SPBU Java, proyek bersama sesuai deskripsi repo. |
| Dasar-Pemograman | Kumpulan latihan Java. |
| daspro-jobsheet1 | Program Java awal. |
| daspro-jobsheet2 | Hanya README. |
| daspro-jobsheet3 | Hanya README. |
| daspro-jobsheet7 | Latihan loop dan program konsol Java. |
| DW_ETL_supermarket | Kandidat cadangan data engineering. |
| Fatmaazzahra24 | Repo profil kosong (API tree memberi 409). |
| flutter-fundamental-part1 | Struktur latihan Flutter; bahasa dominan C++ bukan stack aplikasi utamanya. |
| HTML_reworth | Prototipe HTML keluarga ReWorth; atribusi penulis perlu dibedakan. |
| K3_WebsiteBioavtur | Website akademik bioavtur/K3; cadangan web, bukan layanan resmi Pertamina. |
| Landingpage-ReWorth | Landing page keluarga ReWorth; digabung dengan proyek induk. |
| PBO-ProjectGui | Kandidat cadangan utama Java desktop. |
| PemogramanMobile | Kumpulan praktikum Dart/Flutter, bukan satu produk mandiri. |
| porto-FatmaAzzahra | Repo portfolio publik masih hanya README saat pemeriksaan. |
| Praktikum_PBO | Latihan OOP Java; mendukung skill, bukan proyek pilihan utama. |
| SEMESTER-3 | Kumpulan tugas web PHP/HTML/CSS/JavaScript. |
| TugasAkhir_Praktikum | Program konsol Java KRS dan kafe. |
| UAS-ALSD | Simulasi antrean/transaksi SPBU Java. |
| uireworth | Dashboard PHP dan aset/desain ReWorth; digabung proyek induk. |
| UTS-ASD | Latihan/ujian struktur data Java. |
| UTS-Praktikum-ASD-Fatma | Hanya README. |
| UTS_AlgoritmaStrukturData | Program mahasiswa/mata kuliah/penilaian Java. |
| Web-lanjut | Kerangka Laravel simple-pos; repo tim CampusLink lebih kuat untuk showcase. |

## Informasi berikutnya dari pemilik

1. Screenshot asli tiap proyek dan referensi tampilan Projects.
2. Untuk Volta-PLN: bahan deskripsi yang diberikan pemilik, tahun, peran, dan
   teknologi yang boleh dicantumkan; tidak memerlukan akses GitHub.
3. Nama publik proyek dapat dirapikan bersama; tautan ketiga repo tim Lab SE,
   ReWorth, dan CampusLink sudah dikonfirmasi pemilik.

Tidak ada repo GitHub yang diubah, dihapus, di-push, atau dijalankan selama screening.

## Implementasi Projects

- Data dan teks: `src/data/projects.js`.
- Section: `src/sections/Projects.jsx`, ditempatkan setelah Education.
- Komponen: `ProjectRow`, `ProjectVisual`, dan `ProjectDialog`.
- Styling: `src/styles/projects.css`, menggunakan tokens warna/font yang ada.
- Enam proyek: PLN VOLTA Dashboard, ReWorth, CampusLink, Lab SE, Yuk Sehat,
  dan SENTRA. Pemilik meminta Volta ditambahkan setelah implementasi awal.
  Judul, tahun 2026, ringkasan material/inventory/requests/transactions/reporting,
  serta Laravel/PHP/PostgreSQL/Tailwind berasal dari referensi visual pemilik,
  bukan pemeriksaan repo. Gambar dan kontribusi masih menunggu pemilik.
  Volta tidak menampilkan tautan repository dan tidak ada akses repo lanjutan.
- Native dialog mendukung Escape, tombol tutup, klik backdrop, navigasi keyboard
  yang tetap di dalam popup, kembalinya fokus ke pemicu, dan scroll lock.
- Link GitHub ada di detail. Tidak ada tautan demo yang dibuat-buat.
- Galeri detail memakai array `images`: cover dan slide awal adalah file nomor 1,
  lalu berurutan sesuai nomor. Volta 4, ReWorth 5, Lab SE 3, SENTRA 2 gambar.
  Komponen `ProjectGallery` mendukung scroll-snap/swipe, tombol panah, dan keyboard.
- Video dokumentasi SENTRA dari pemilik (`7h6lR3c9FPs`) ditampilkan melalui
  `ProjectVideo`, dengan player YouTube yang dimuat setelah klik dan link alternatif.
