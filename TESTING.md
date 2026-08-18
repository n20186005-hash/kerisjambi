# Catatan Verifikasi

## Pratinjau Browser

Build statis dibuka melalui server pratinjau Astro. Halaman menampilkan foto asli monumen sebagai hero, judul dan seluruh isi berbahasa Indonesia, navigasi jangkar, bagian makna, informasi kunjungan, akses transportasi, fasilitas netral, kuliner, peta Google berbahasa Indonesia, FAQ, sumber, dan footer nonresmi.

## Interaksi Kritis

1. Tombol **Kebijakan Privasi** pada footer membuka dialog native browser.
2. Dialog kebijakan, syarat layanan, dan pengaturan cookie memakai tombol tutup yang sama.
3. Banner cookie menyimpan pilihan secara lokal; Google Analytics GA4 `G-HXM22WWPKP` baru dimuat setelah persetujuan analitik.
4. Navigasi seluler memakai tombol menu dan tetap mengarah ke bagian dalam halaman yang sama.
5. Pemilih bahasa menautkan versi Bahasa Indonesia di `/` dan versi English di `/en/`; bahasa aktif ditandai dengan `aria-current="page"`.

## Catatan Penyebaran

Proyek memakai Astro output statis dan `wrangler.jsonc` dengan `assets.directory: ./dist`, sehingga sesuai dengan mode Cloudflare Workers Static Assets. URL produksi dipusatkan di `PUBLIC_SITE_URL`; jika kosong, build tetap berhasil dan canonical/OG absolut serta sitemap tidak diproduksi.
