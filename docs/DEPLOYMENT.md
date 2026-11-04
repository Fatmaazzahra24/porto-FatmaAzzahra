# Deployment portofolio Fatma

Target produksi: **https://fatma.portofolio-ku.com**. Source: `Fatmaazzahra24/porto-FatmaAzzahra`, branch utama `main`.

## Website statis di Coolify

- Proyek dan aplikasi Coolify terpisah khusus Fatma. Jangan mengubah atau menghapus resource portfolio Rama, Kadomu, Ram Digital Store, database, volume, network, atau proxy bersama.
- Build pack Dockerfile, base directory `/`, Dockerfile `/Dockerfile`, port internal `80`, tanpa host port mapping tambahan.
- Node.js 24 menjalankan `npm ci` dan `npm run check` (lint dan Vite build). Hanya `dist/` disalin ke image Nginx.
- DNS A `fatma` menuju VPS yang sudah menjalankan Coolify, DNS only. HTTPS dan sertifikat Let's Encrypt dikelola proxy Coolify.
- Healthcheck HTTP GET `127.0.0.1:80/healthz`, status 200. URL yang tidak tersedia mengembalikan 404; asset yang hilang tidak disamarkan menjadi halaman home.
- Tidak ada backend aplikasi, database, admin, Vite dev server, atau server Node.js saat website melayani pengunjung.

## Redeploy otomatis

Pemicu mengikuti **setiap push ke `main` oleh siapa pun**, termasuk pemilik repository. Tidak memakai filter akun pengirim atau filter path. Branch lain dan pull request tidak melakukan deployment produksi.

Karena akun pelaksana adalah kolaborator dengan akses push, bukan admin repository pemilik, integrasi menggunakan GitHub Actions dan secret webhook **khusus aplikasi Fatma**. Tidak membagikan token API Coolify umum atau SSH key VPS ke repository.

Workflow `.github/workflows/deploy-coolify.yml` membaca event push, mengirim identitas repo, ref `main`, serta SHA commit ke endpoint HTTPS `/__deploy/github`, disertai signature HMAC-SHA256. Nginx meneruskan event ke handler webhook resmi Coolify melalui jaringan Docker yang sudah digunakan Coolify. Coolify memeriksa signature menggunakan secret aplikasi, lalu mencocokkan repo dan branch sebelum memasukkan deployment ke antrean. Penggantian container tetap dikelola Coolify. Job Actions yang sukses menunjukkan deployment diterima antrean; hasil build/healthcheck akhirnya diperiksa di Coolify.

Workflow tidak menjalankan checkout atau script dari repo saat memegang secret, dan memakai izin `contents: read`. Secret hanya memungkinkan penandatanganan event untuk aplikasi ini; tidak memberi akses shell atau pengaturan proyek lain. Jangan menonaktifkan GitHub Actions atau menghilangkan secret bila ingin mempertahankan redeploy otomatis. Instruksi khusus GitHub seperti `[skip ci]` dapat melewati run Actions; gunakan commit normal untuk deployment.

Secret repository yang diperlukan: `COOLIFY_WEBHOOK_SECRET`. Nilainya harus sama dengan **Webhooks → GitHub → secret** pada aplikasi Fatma, disimpan menggunakan GitHub repository Actions secrets. Jangan memasukkannya ke source, file frontend, `VITE_*`, Docker build args, log, atau dokumen. Hak aksesnya hanya memicu deploy aplikasi dengan repo/branch dan secret yang cocok.

Auto Deploy pada aplikasi harus aktif, Git Source `main` dengan commit `HEAD`, serta Watch Paths kosong. Initial deployment dapat dilakukan sekali untuk menyiapkan domain/endpoint. Pembaruan berikutnya harus terbukti berasal dari event otomatis, tanpa tombol Redeploy.

## Verifikasi sebelum dinyatakan selesai

1. Lint dan build berhasil.
2. DNS dan sertifikat HTTPS cocok dengan domain Fatma.
3. Hero, navigasi section, gambar, galeri proyek, dan CV PDF tampil/berfungsi pada desktop dan ponsel.
4. Secret tersimpan; push perubahan nyata ke `main` menghasilkan run Actions sukses dan deployment Coolify dengan SHA yang sama, sumber Webhook, serta container healthy.
5. Endpoint menolak permintaan tanpa signature yang valid. File internal dan environment tidak tersedia sebagai asset publik.
6. Container dan ketersediaan website lama dibandingkan dengan baseline sebelum deployment.

Dokumen ini menjelaskan konfigurasi dan langkah pemeriksaan, bukan pengganti hasil pemeriksaan nyata. Catat hasil penerapan pada pembaruan berikutnya setelah terverifikasi.
