// Registry topik panjang-ekor untuk Tugu Keris Siginjai.
// Pola: satu slug dipasangkan dengan konten Bahasa Indonesia (id) dan English (en).
// `ready: false` = slug terdaftar sebagai draft (belum ada konten); `ready: true` = sudah bisa dibangun.
// Isi batch secara bertahap; batch B (kunjungan & akses) sudah lengkap dan bisa dirilis.

export type TopicGroup = "sejarah" | "kunjungan" | "kuliner" | "sekitar";

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  updated: string; // label bulan, mis. "Oktober 2026"
  related: string[];
  ready: boolean;
  id?: TopicContent;
  en?: TopicContent;
}

export const TOPIC_GROUP_LABELS: Record<TopicGroup, { id: string; en: string }> = {
  sejarah: { id: "Sejarah & Budaya", en: "History & Culture" },
  kunjungan: { id: "Kunjungan & Akses", en: "Visit & Access" },
  kuliner: { id: "Kuliner & Kafe", en: "Food & Cafés" },
  sekitar: { id: "Sekitar & Itinerari", en: "Around & Itineraries" },
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = ["sejarah", "kunjungan", "kuliner", "sekitar"];

// === Konten batch B: Kunjungan & Akses (6 halaman) ===
const batchB: Record<string, { id: TopicContent; en: TopicContent }> = {
  // 6 — Transportasi dari Bandara Sultan Thaha
  "transportasi-bandara-sultan-thaha": {
    id: {
      metaTitle: "Transportasi ke Tugu Keris Siginjai dari Bandara Sultan Thaha Jambi",
      metaDescription:
        "Panduan independen rute dari Bandara Sultan Thaha ke Tugu Keris Siginjai, Kota Baru: taksi bandara, sewa kendaraan, dan transportasi daring. Konfirmasi rute sebelum berangkat.",
      h1: "Dari Bandara Sultan Thaha ke Tugu Keris Siginjai",
      lead: "Monumen berada sekitar 5–6 km dari Bandara Sultan Thaha Sjaifuddin. Panduan ini membandingkan opsi dari bandara ke Kota Baru tanpa menjual tiket atau mematok tarif.",
      facts: [
        { label: "JARAK", value: "~5–6 km dari bandara" },
        { label: "WAKTU", value: "20–40 menit (lalu lintas)" },
        { label: "MODA", value: "Taksi, sewa, daring" },
        { label: "TUJUAN", value: "Paal Lima, Kota Baru" },
      ],
      sections: [
        {
          heading: "Opsi paling langsung dari bandara",
          paragraphs: [
            "Taksi bandara, kendaraan sewa, atau transportasi daring adalah cara paling langsung menuju Kota Baru. Masukkan nama monumen “Monument of Keris Siginjai Jambi” atau titik koordinat -1.6305638, 103.6078114 sebagai tujuan; ini membantu ketika pengemudi lebih mengenal kantor wali kota daripada nama jalan di peta.",
            "Waktu tempuh bervariasi dengan kondisi jalan Kota Jambi. Jangan menganggap durasi sama pada jam sibuk dan di luar jam sibuk.",
          ],
        },
        {
          heading: "Bus dan angkutan kota",
          paragraphs: [
            "Bus kota pernah melayani area bandara, namun rute dan jam operasi dapat berubah. Konfirmasikan rute yang sedang berjalan serta titik turun yang diizinkan pada hari keberangkatan Anda; jangan mengandalkan informasi yang sudah lama.",
          ],
        },
        {
          heading: "Sebelum Anda berangkat",
          bullets: [
            "Cek tarif resmi atau argometer taksi sebelum naik.",
            "Siapkan peta offline dan tautan Google Maps untuk navigasi.",
            "Masukkan koordinat monumen agar tidak bergantung pada nama jalan.",
            "Konfirmasikan apakah ada pengaturan lalu lintas saat acara di Kota Baru.",
          ],
          callout:
            "Tarif dan ketersediaan moda dapat berubah sewaktu-waktu. Panduan ini tidak menjual tiket dan tidak menjamin harga tertentu.",
        },
      ],
      faqs: [
        {
          q: "Berapa lama perjalanan dari bandara ke Tugu Keris Siginjai?",
          a: "Biasanya 20–40 menit tergantung lalu lintas Kota Jambi. Waktu tempuh tidak dijamin sama setiap hari; tambahkan cadangan waktu saat acara kota.",
        },
        {
          q: "Apakah ada transportasi umum langsung dari bandara?",
          a: "Bus kota pernah melayani area bandara, tetapi rute dan jam beroperasi perlu dikonfirmasi pada hari keberangkatan. Opsi paling pasti adalah taksi bandara atau transportasi daring.",
        },
        {
          q: "Alamat apa yang dimasukkan ke aplikasi navigasi?",
          a: "Gunakan “Monument of Keris Siginjai Jambi” atau titik koordinat -1.6305638, 103.6078114 (Paal Lima, Kecamatan Kota Baru, Jambi 36129).",
        },
        {
          q: "Apakah panduan ini menjual tiket transportasi?",
          a: "Tidak. Ini panduan pengunjung independen dan nirlaba; tidak ada penjualan tiket atau kemitraan dengan operator mana pun.",
        },
      ],
    },
    en: {
      metaTitle: "Transport from Sultan Thaha Airport to Tugu Keris Siginjai",
      metaDescription:
        "Independent guide to routes from Sultan Thaha Airport to Tugu Keris Siginjai, Kota Baru: airport taxi, rental vehicle, and ride-hailing. Confirm routes before you travel.",
      h1: "From Sultan Thaha Airport to Tugu Keris Siginjai",
      lead: "The monument is about 5–6 km from Sultan Thaha Sjaifuddin Airport. This guide compares options from the airport to Kota Baru without selling tickets or quoting fixed fares.",
      facts: [
        { label: "DISTANCE", value: "~5–6 km from airport" },
        { label: "TIME", value: "20–40 min (traffic)" },
        { label: "MODES", value: "Taxi, rental, ride-hailing" },
        { label: "DESTINATION", value: "Paal Lima, Kota Baru" },
      ],
      sections: [
        {
          heading: "Most direct options from the airport",
          paragraphs: [
            "An airport taxi, a rental vehicle, or a ride-hailing service is the most direct way to reach Kota Baru. Enter the monument name “Monument of Keris Siginjai Jambi” or the coordinates -1.6305638, 103.6078114 as the destination; this helps when a driver knows the city hall district better than the map address.",
            "Travel time varies with Jambi City road conditions. Do not assume the same duration at peak and off-peak hours.",
          ],
        },
        {
          heading: "City buses and local transport",
          paragraphs: [
            "City buses have served the airport area, but routes and operating hours can change. Confirm the active route and an allowed drop-off point on the day you travel; do not rely on older information.",
          ],
        },
        {
          heading: "Before you set off",
          bullets: [
            "Check the official fare or taxi meter before boarding.",
            "Prepare offline maps and a Google Maps link for navigation.",
            "Enter the monument coordinates so you do not depend on a street name.",
            "Confirm any traffic measures during events in Kota Baru.",
          ],
          callout:
            "Fares and mode availability can change at any time. This guide does not sell tickets and does not guarantee a specific price.",
        },
      ],
      faqs: [
        {
          q: "How long is the trip from the airport to Tugu Keris Siginjai?",
          a: "Usually 20–40 minutes depending on Jambi City traffic. Travel time is not guaranteed to be the same every day; add buffer time during city events.",
        },
        {
          q: "Is there direct public transport from the airport?",
          a: "City buses have served the airport area, but routes and operating hours need confirmation on the day of travel. The most reliable options are an airport taxi or ride-hailing.",
        },
        {
          q: "What address do I enter in navigation apps?",
          a: "Use “Monument of Keris Siginjai Jambi” or the coordinates -1.6305638, 103.6078114 (Paal Lima, Kecamatan Kota Baru, Jambi 36129).",
        },
        {
          q: "Does this guide sell transport tickets?",
          a: "No. This is an independent, non-profit visitor guide; there is no ticket sales or partnership with any operator.",
        },
      ],
    },
  },

  // 7 — Angkutan umum & taksi online
  "angkutan-umum-taksi-online": {
    id: {
      metaTitle: "Cara ke Tugu Keris Jambi Naik Angkutan Umum & Taksi Online",
      metaDescription:
        "Panduan naik angkot, bus kota, dan taksi online ke Tugu Keris Siginjai, Kota Baru. Pilih rute aktif, konfirmasi titik turun, dan patuhi aturan setempat.",
      h1: "Naik Angkutan Umum & Taksi Online ke Monumen",
      lead: "Jika Anda tidak menyewa kendaraan, angkutan umum dan taksi online adalah cara masuk akal ke Kota Baru. Panduan ini membantu memilih rute aktif dan titik turun yang diizinkan.",
      facts: [
        { label: "MODA", value: "Angkot, bus, daring" },
        { label: "KAWASAN", value: "Kota Baru, Paal Lima" },
        { label: "CATATAN", value: "Rute bisa berubah" },
        { label: "STATUS", value: "Konfirmasi harian" },
      ],
      sections: [
        {
          heading: "Angkutan kota (angkot) dan bus",
          paragraphs: [
            "Pilih halte atau rute yang sedang beroperasi menuju kawasan Kota Baru, lalu konfirmasikan titik turun dan rute pejalan kaki yang diizinkan. Jangan menganggap pulau jalan atau median dapat dimasuki; ikuti rambu dan arah petugas.",
            "Informasi rute perlu dicek pada hari keberangkatan karena trayek angkot dapat disesuaikan oleh kondisi lalu lintas setempat.",
          ],
        },
        {
          heading: "Taksi dan transportasi daring",
          paragraphs: [
            "Masukkan nama monumen atau koordinat sebagai tujuan. Ini membantu ketika pengemudi lebih mengenal kantor wali kota daripada nama jalan yang tercantum di peta. Cocok untuk perjalanan dari bandara, hotel, atau stasiun dalam kota.",
          ],
        },
        {
          heading: "Tip praktis",
          bullets: [
            "Simpan tautan Google Maps dan bagikan ke pengemudi jika perlu.",
            "Konfirmasikan estimasi tarif daring sebelum pesan.",
            "Turun di tepi jalan yang aman, bukan di tengah persimpangan.",
            "Hindari jam sibuk jika membawa anak atau koper besar.",
          ],
          callout:
            "Panduan ini tidak mencantumkan nama operator tertentu dan tidak menerima endorse; gunakan aplikasi atau trayek resmi yang berlaku di hari perjalanan Anda.",
        },
      ],
      faqs: [
        {
          q: "Apakah bisa ke monumen hanya dengan angkot?",
          a: "Bisa, asalkan rute yang Anda pilih benar-benar menuju Kota Baru dan masih beroperasi. Konfirmasikan halte tujuan serta titik turun yang diizinkan pada hari keberangkatan.",
        },
        {
          q: "Aplikasi taksi online apakah yang berlaku di Jambi?",
          a: "Layanan daring umumnya tersedia di kota besar seperti Jambi, namun ketersediaan dan zona penjemputan dapat berubah. Pesan dari lokasi yang aman dan cek estimasi sebelum naik.",
        },
        {
          q: "Di mana sebaiknya turun?",
          a: "Turun di tepi jalan yang diizinkan di sekitar Paal Lima, Kota Baru, lalu jalan kaki ke monumen. Jangan turun di tengah persimpangan atau area yang ditutup saat acara.",
        },
        {
          q: "Apakah panduan ini membayar referral operator?",
          a: "Tidak. Panduan independen nirlaba; tidak ada afiliasi atau rekomendasi komersial.",
        },
      ],
    },
    en: {
      metaTitle: "Getting to Tugu Keris Jambi by Public Transport & Ride-Hailing",
      metaDescription:
        "Guide to angkot, city bus, and ride-hailing to Tugu Keris Siginjai, Kota Baru. Choose active routes, confirm drop-off, and follow local rules.",
      h1: "Public Transport & Ride-Hailing to the Monument",
      lead: "If you are not renting a vehicle, public transport and ride-hailing are sensible ways into Kota Baru. This guide helps choose an active route and an allowed drop-off point.",
      facts: [
        { label: "MODES", value: "Angkot, bus, ride-hailing" },
        { label: "AREA", value: "Kota Baru, Paal Lima" },
        { label: "NOTE", value: "Routes can change" },
        { label: "STATUS", value: "Confirm daily" },
      ],
      sections: [
        {
          heading: "City transport (angkot) and buses",
          paragraphs: [
            "Choose a stop or route currently serving Kota Baru, then confirm an allowed drop-off and pedestrian route. Do not assume a road island or median can be entered; follow signs and staff directions.",
            "Route information should be checked on the day of travel because angkot routes can be adjusted by local traffic conditions.",
          ],
        },
        {
          heading: "Taxis and ride-hailing",
          paragraphs: [
            "Enter the monument name or coordinates as the destination. This helps when a driver knows the city hall district better than the map address. Useful for trips from the airport, hotel, or in-town station.",
          ],
        },
        {
          heading: "Practical tips",
          bullets: [
            "Save the Google Maps link and share it with the driver if needed.",
            "Confirm the ride-hailing fare estimate before booking.",
            "Alight at a safe roadside, not in the middle of an intersection.",
            "Avoid peak hours when travelling with children or large luggage.",
          ],
          callout:
            "This guide does not name a specific operator and takes no endorsement; use the official apps or routes in effect on your travel day.",
        },
      ],
      faqs: [
        {
          q: "Can I reach the monument by angkot alone?",
          a: "Yes, as long as the route you choose truly goes to Kota Baru and is still operating. Confirm the destination stop and an allowed drop-off on the day of travel.",
        },
        {
          q: "Which ride-hailing apps work in Jambi?",
          a: "Ride-hailing services are generally available in larger cities like Jambi, but availability and pickup zones can change. Book from a safe location and check the estimate before boarding.",
        },
        {
          q: "Where should I alight?",
          a: "Alight at an allowed roadside around Paal Lima, Kota Baru, then walk to the monument. Do not alight in the middle of an intersection or in areas closed during events.",
        },
        {
          q: "Does this guide pay operator referrals?",
          a: "No. This is an independent non-profit guide; there is no affiliation or commercial recommendation.",
        },
      ],
    },
  },

  // 8 — Parkir & akses jalan Paal Lima
  "parkir-akses-jalan-paal-lima": {
    id: {
      metaTitle: "Lokasi Parkir & Akses Jalan di Sekitar Paal Lima Kota Baru",
      metaDescription:
        "Panduan parkir dan akses jalan di sekitar Paal Lima, Kota Baru dekat Tugu Keris Siginjai. Periksa area resmi, rambu, dan kapasitas di lokasi.",
      h1: "Parkir & Akses Jalan di Sekitar Paal Lima",
      lead: "Monumen berada di lingkungan administrasi Kota Baru. Panduan ini merangkum cara parkir dan bergerak di sekitar Paal Lima tanpa menjamin ketersediaan tempat parkir.",
      facts: [
        { label: "LOKASI", value: "Paal Lima, Kota Baru" },
        { label: "PARKIR", value: "Ikut rambu di lokasi" },
        { label: "JALAN", value: "Bisa ramai & ditutup" },
        { label: "STATUS", value: "Cek saat tiba" },
      ],
      sections: [
        {
          heading: "Di mana memarkir kendaraan",
          paragraphs: [
            "Gunakan area parkir resmi yang ditandai di sekitar kawasan dan ikuti rambu serta arah petugas. Jangan mengandalkan bahu jalan sebagai area parkir; kapasitas dapat berubah cepat pada malam dan akhir pekan.",
            "Karena ini kawasan perkantoran, arus kendaraan mengikuti ritme kerja dan acara pemerintah. Waktu parkir nyaman berbeda antara hari kerja dan akhir pekan.",
          ],
        },
        {
          heading: "Akses jalan dan pejalan kaki",
          paragraphs: [
            "Jalan di sekitar monumen merupakan bagian dari persimpangan kota. Berhati-hatilah menyeberang; jangan menganggap pulau jalan atau median dapat dimasuki saat berfoto.",
            "Saat ada kegiatan publik, rekayasa lalu lintas dapat mengubah arah satu arah. Ikuti petugas dan peta untuk menilai rute dari posisi Anda.",
          ],
        },
        {
          heading: "Sebelum berkendara ke sini",
          bullets: [
            "Cek peta untuk memahami titik tujuan sebelum berangkat.",
            "Siapkan opsi parkir cadangan di koridor sekitar.",
            "Hindari datang tepat saat puncak acara jika membawa kendaraan besar.",
            "Konfirmasikan pengaturan setempat pada hari kunjungan.",
          ],
          callout:
            "Panduan ini tidak mengklaim tempat parkir tertentu tersedia. Gunakan rambu di lokasi dan konfirmasi kapasitas saat tiba.",
        },
      ],
      faqs: [
        {
          q: "Apakah tersedia tempat parkir di Tugu Keris Siginjai?",
          a: "Ketersediaan parkir mengikuti pengaturan kawasan dan dapat berubah. Gunakan area resmi yang ditandai dan ikuti rambu serta arah petugas di lokasi.",
        },
        {
          q: "Bolehkah parkir di bahu jalan?",
          a: "Tidak disarankan. Bahu jalan bukan area parkir dan kapasitas cepat habis pada malam serta akhir pekan. Cari area parkir resmi yang ditandai.",
        },
        {
          q: "Apakah jalan ditutup saat acara?",
          a: "Pada kegiatan publik, rekayasa lalu lintas dapat mengubah arah atau menutup sebagian jalan. Ikuti petugas dan konfirmasikan pengaturan sebelum berangkat.",
        },
        {
          q: "Apakah aman bagi pejalan kaki?",
          a: "Kawasan ini adalah persimpangan kota; berhati-hatilah menyeberang dan patuhi rambu. Jangan memasuki area yang dibatasi saat berfoto.",
        },
      ],
    },
    en: {
      metaTitle: "Parking & Road Access Around Paal Lima, Kota Baru",
      metaDescription:
        "Guide to parking and road access around Paal Lima, Kota Baru near Tugu Keris Siginjai. Check official areas, signs, and on-site capacity.",
      h1: "Parking & Road Access Around Paal Lima",
      lead: "The monument sits in an administrative setting of Kota Baru. This guide summarises how to park and move around Paal Lima without guaranteeing a parking space.",
      facts: [
        { label: "LOCATION", value: "Paal Lima, Kota Baru" },
        { label: "PARKING", value: "Follow on-site signs" },
        { label: "ROADS", value: "Can be busy or closed" },
        { label: "STATUS", value: "Check on arrival" },
      ],
      sections: [
        {
          heading: "Where to park",
          paragraphs: [
            "Use the marked official parking areas around the district and follow signs and staff directions. Do not rely on road shoulders as parking; capacity can change quickly at night and on weekends.",
            "Because this is an administrative area, vehicle flow follows the rhythm of work and government events. Comfortable parking times differ between weekdays and weekends.",
          ],
        },
        {
          heading: "Roads and pedestrians",
          paragraphs: [
            "The roads around the monument are part of a city junction. Cross with care; do not assume a road island or median can be entered while taking photos.",
            "During public events, traffic measures can change one-way directions. Follow staff and the map to assess routing from your position.",
          ],
        },
        {
          heading: "Before driving here",
          bullets: [
            "Check the map to understand the destination point before leaving.",
            "Prepare a backup parking option in nearby corridors.",
            "Avoid arriving exactly at an event peak if driving a large vehicle.",
            "Confirm local arrangements on the day of your visit.",
          ],
          callout:
            "This guide does not claim a specific parking space is available. Use on-site signs and confirm capacity when you arrive.",
        },
      ],
      faqs: [
        {
          q: "Is parking available at Tugu Keris Siginjai?",
          a: "Parking availability follows district arrangements and can change. Use marked official areas and follow signs and staff directions on site.",
        },
        {
          q: "May I park on the road shoulder?",
          a: "Not advised. The road shoulder is not a parking area and capacity fills quickly at night and on weekends. Look for marked official parking.",
        },
        {
          q: "Are roads closed during events?",
          a: "During public events, traffic measures can change directions or close parts of the road. Follow staff and confirm arrangements before leaving.",
        },
        {
          q: "Is it safe for pedestrians?",
          a: "This is a city junction; cross with care and obey signs. Do not enter restricted areas while taking photos.",
        },
      ],
    },
  },

  // 9 — Waktu terbaik mengunjungi
  "waktu-terbaik-kunjungi": {
    id: {
      metaTitle: "Waktu Terbaik Mengunjungi Tugu Keris Siginjai: Pagi vs Malam",
      metaDescription:
        "Pagi atau malam? Panduan waktu terbaik ke Tugu Keris Siginjai, Kota Jambi: cahaya, keramaian, dan tips cuaca dari panduan pengunjung independen.",
      h1: "Waktu Terbaik Mengunjungi: Pagi vs Malam",
      lead: "Tugu Keris Siginjai paling nyaman dinikmati sebagai tujuan singkat. Pilihan pagi atau malam memengaruhi cahaya foto, keramaian, dan kenyamanan berjalan kaki.",
      facts: [
        { label: "DURASI", value: "30–60 menit" },
        { label: "PAGI", value: "Lebih tenang" },
        { label: "MALAM", value: "Cahaya & keramaian" },
        { label: "CUACA", value: "Cek sebelum ke sana" },
      ],
      sections: [
        {
          heading: "Pagi hari",
          paragraphs: [
            "Pagi cenderung lebih tenang dan lebih mudah untuk berjalan kaki serta berfoto tanpa kerumunan. Cahaya masih lembut, cocok jika Anda melanjutkan hari ke agenda lain di Kota Jambi.",
            "Namun, fasilitas sekitar seperti kuliner dan kafe belum banyak buka pagi-pagi; sesuaikan dengan rencana makan Anda.",
          ],
        },
        {
          heading: "Selepas senja hingga malam",
          paragraphs: [
            "Udara lebih sejuk dan suasana kawasan berubah saat lampu menyala. Foto malam panduan ini tidak menjamin penerangan atau akses yang sama saat kunjungan Anda; cahaya monumen dapat berbeda dari satu hari ke hari.",
            "Malam juga lebih ramai, terutama akhir pekan. Perhatikan arus kendaraan dan pejalan kaki di persimpangan.",
          ],
        },
        {
          heading: "Tips memilih waktu",
          bullets: [
            "Cek prakiraan cuaca dan kondisi jalan hari itu.",
            "Pagi untuk foto tenang; malam untuk suasana kota.",
            "Hindari siang terik jika sensitif terhadap panas.",
            "Gabungkan dengan kuliner malam di sekitar Kota Baru.",
          ],
          callout:
            "Jam kunjungan tidak diverifikasi sebagai jadwal resmi. Google Maps tidak menampilkan jam operasional saat diperiksa; jangan menganggap buka 24 jam.",
        },
      ],
      faqs: [
        {
          q: "Kapan waktu terbaik ke Tugu Keris Siginjai?",
          a: "Tergantung tujuan Anda: pagi lebih tenang untuk berjalan kaki dan foto, malam menawarkan suasana kota dan cahaya. Sesuaikan dengan cuaca dan rencana makan.",
        },
        {
          q: "Apakah monumen buka 24 jam?",
          a: "Tidak ada jadwal resmi yang terverifikasi. Google Maps tidak menampilkan jam operasional saat diperiksa; jangan menganggap akses tersedia sepanjang waktu.",
        },
        {
          q: "Bagaimana dengan cuaca?",
          a: "Kota Jambi beriklim tropis dengan hujan yang bisa tiba-tiba. Cek prakiraan cuaca hari kunjungan dan siapkan payung atau jadwal cadangan.",
        },
        {
          q: "Berapa lama waktu yang diperlukan?",
          a: "Sekitar 30–60 menit cukup untuk melihat monumen, berfoto, dan membaca ringkasan singkat. Tambahkan waktu jika bergabung dengan tujuan lain.",
        },
      ],
    },
    en: {
      metaTitle: "Best Time to Visit Tugu Keris Siginjai: Morning vs Night",
      metaDescription:
        "Morning or night? Best time to visit Tugu Keris Siginjai, Jambi City: light, crowds, and weather tips from an independent visitor guide.",
      h1: "Best Time to Visit: Morning vs Night",
      lead: "Tugu Keris Siginjai is best enjoyed as a short stop. Morning or night changes photo light, crowding, and walking comfort.",
      facts: [
        { label: "DURATION", value: "30–60 minutes" },
        { label: "MORNING", value: "Quieter" },
        { label: "NIGHT", value: "Light & crowds" },
        { label: "WEATHER", value: "Check before going" },
      ],
      sections: [
        {
          heading: "Morning",
          paragraphs: [
            "Mornings tend to be quieter and easier for walking and photos without crowds. Light is still soft, good if you continue to other plans in Jambi City.",
            "However, nearby food and cafés may not yet be open early; match this with your meal plan.",
          ],
        },
        {
          heading: "Late afternoon to night",
          paragraphs: [
            "The air is cooler and the district changes as lights come on. This guide’s night photo does not guarantee the same lighting or access for your visit; monument lighting can differ day to day.",
            "Nights are busier, especially on weekends. Watch vehicle and pedestrian flow at the junction.",
          ],
        },
        {
          heading: "Tips for choosing a time",
          bullets: [
            "Check the weather forecast and road conditions for that day.",
            "Morning for calm photos; night for the city atmosphere.",
            "Avoid midday heat if sensitive to the sun.",
            "Pair it with evening food around Kota Baru.",
          ],
          callout:
            "Visiting hours are not verified as an official schedule. Google Maps showed no opening hours when checked; do not assume 24-hour access.",
        },
      ],
      faqs: [
        {
          q: "When is the best time to visit Tugu Keris Siginjai?",
          a: "It depends on your goal: mornings are quieter for walking and photos, nights offer city atmosphere and light. Match it with weather and your meal plan.",
        },
        {
          q: "Is the monument open 24 hours?",
          a: "No verified official schedule exists. Google Maps showed no opening hours when checked; do not assume access is available at all times.",
        },
        {
          q: "What about the weather?",
          a: "Jambi City has a tropical climate with sudden rain. Check the forecast on the visit day and prepare an umbrella or backup plan.",
        },
        {
          q: "How long does a visit take?",
          a: "About 30–60 minutes is enough to see the monument, take photos, and read a brief overview. Add time if combining with other destinations.",
        },
      ],
    },
  },

  // 10 — Panduan keluarga & anak
  "panduan-keluarga-anak": {
    id: {
      metaTitle: "Panduan Berkunjung ke Tugu Keris Bersama Anak & Keluarga",
      metaDescription:
        "Tips wisata keluarga ke Tugu Keris Siginjai, Kota Baru: durasi, keamanan pejalan kaki, fasilitas praktis, dan cara menikmati monumen bersama anak.",
      h1: "Berwisata Bersama Anak & Keluarga",
      lead: "Monumen terbuka ini cocok untuk kunjungan keluarga singkat. Panduan ini membantu menyiapkan langkah kaki, istirahat, dan keamanan di persimpangan kota.",
      facts: [
        { label: "COCOK", value: "Kunjungan singkat" },
        { label: "DURASI", value: "30–60 menit" },
        { label: "KAWASAN", value: "Terbuka, ada jalan" },
        { label: "FAKTA", value: "Konfirmasi di lokasi" },
      ],
      sections: [
        {
          heading: "Menyiapkan kunjungan keluarga",
          paragraphs: [
            "Waktu 30–60 menit cukup untuk melihat monumen, berfoto, dan membaca ringkasan singkat tanpa membuat anak bosan. Pagi hari biasanya lebih nyaman untuk berjalan kaki bersama anak.",
            "Bawa air minum, topi, dan payung kecil karena cuaca tropis bisa berubah. Sesuaikan dengan toleransi panas anggota keluarga.",
          ],
        },
        {
          heading: "Keamanan di sekitar monumen",
          paragraphs: [
            "Kawasan ini adalah persimpangan lalu lintas kota. Pegang tangan anak saat menyeberang dan jangan membiarkan mereka bermain di area jalan atau median.",
            "Gunakan area pandang publik yang diizinkan untuk berfoto. Jangan masuki area yang dibatasi saat ada acara.",
          ],
        },
        {
          heading: "Fasilitas praktis",
          bullets: [
            "Toilet: konfirmasi ketersediaan saat tiba.",
            "Makan & minum: pilih jenis usaha di koridor sekitar menurut kebutuhan.",
            "Istirahat: cari ruang terbuka yang teduh jika cuaca panas.",
            "Dokumen & kebutuhan darurat: siapkan sebelum berangkat.",
          ],
          callout:
            "Panduan ini tidak merekomendasikan merek tertentu. Gunakan kategori usaha di sekitar Kota Baru dan pilih sendiri yang sesuai untuk keluarga.",
        },
      ],
      faqs: [
        {
          q: "Apakah Tugu Keris Siginjai ramah anak?",
          a: "Sebagai ruang terbuka, ini cocok untuk kunjungan keluarga singkat. Awasi anak di persimpangan lalu lintas dan gunakan area pandang yang diizinkan.",
        },
        {
          q: "Berapa lama waktu yang cocok untuk anak?",
          a: "Sekitar 30–60 menit cukup agar tidak membosankan. Pagi hari biasanya lebih nyaman untuk berjalan kaki bersama anak.",
        },
        {
          q: "Apakah tersedia toilet dan makan?",
          a: "Ketersediaan toilet dapat berubah; konfirmasi saat tiba. Untuk makan, gunakan kategori usaha di sekitar pusat kota sebagai orientasi.",
        },
        {
          q: "Apakah ada tiket masuk anak?",
          a: "Aturan akses dan biaya saat ini belum terverifikasi. Panduan ini tidak menjual tiket dan tidak menjamin akses gratis.",
        },
      ],
    },
    en: {
      metaTitle: "Visiting Tugu Keris with Children & Family",
      metaDescription:
        "Family tips for Tugu Keris Siginjai, Kota Baru: duration, pedestrian safety, practical facilities, and enjoying the monument with children.",
      h1: "Travelling with Children & Family",
      lead: "This open monument suits a short family visit. The guide helps prepare walking, rest, and safety at a city junction.",
      facts: [
        { label: "FITS", value: "Short visit" },
        { label: "DURATION", value: "30–60 minutes" },
        { label: "AREA", value: "Open, with roads" },
        { label: "FACTS", value: "Confirm on site" },
      ],
      sections: [
        {
          heading: "Preparing a family visit",
          paragraphs: [
            "30–60 minutes is enough to see the monument, take photos, and read a brief overview without children getting bored. Mornings are usually more comfortable for walking with children.",
            "Bring drinking water, a hat, and a small umbrella because tropical weather can change. Adjust to family members’ heat tolerance.",
          ],
        },
        {
          heading: "Safety around the monument",
          paragraphs: [
            "This is a city traffic junction. Hold children’s hands when crossing and do not let them play on the road or median.",
            "Use permitted public viewing areas for photos. Do not enter restricted areas during events.",
          ],
        },
        {
          heading: "Practical facilities",
          bullets: [
            "Toilets: confirm availability on arrival.",
            "Food & drink: choose a venue type in nearby corridors as needed.",
            "Rest: find a shaded open space if the weather is hot.",
            "Documents & emergency needs: prepare before leaving.",
          ],
          callout:
            "This guide does not recommend specific brands. Use the venue categories around Kota Baru and choose what fits your family.",
        },
      ],
      faqs: [
        {
          q: "Is Tugu Keris Siginjai child-friendly?",
          a: "As an open space, it suits a short family visit. Supervise children at the traffic junction and use permitted viewing areas.",
        },
        {
          q: "How long is comfortable for children?",
          a: "About 30–60 minutes is enough to avoid boredom. Mornings are usually more comfortable for walking with children.",
        },
        {
          q: "Are toilets and food available?",
          a: "Toilet availability can change; confirm on arrival. For food, use the venue categories around the city centre as orientation.",
        },
        {
          q: "Is there a child entry ticket?",
          a: "Current access rules and charges are not verified. This guide does not sell tickets and does not guarantee free access.",
        },
      ],
    },
  },

  // 11 — Tips wisata aman
  "tips-wisata-aman": {
    id: {
      metaTitle: "Tips Wisata Aman & Nyaman di Sekitar Kawasan Kota Baru Jambi",
      metaDescription:
        "Tips aman berwisata di Kota Baru Jambi dekat Tugu Keris Siginjai: lalu lintas, cuaca, barang berharga, dan etika di ruang publik.",
      h1: "Tips Wisata Aman & Nyaman",
      lead: "Kota Baru adalah kawasan administrasi sekaligus persimpangan lalu lintas. Panduan ini merangkum kehati-hatian dasar agar kunjungan berjalan tenang.",
      facts: [
        { label: "KAWASAN", value: "Administrasi & lalu lintas" },
        { label: "CUACA", value: "Tropis, berubah" },
        { label: "BARANG", value: "Amankan bawaan" },
        { label: "ETIKA", value: "Hargai ruang publik" },
      ],
      sections: [
        {
          heading: "Di sekitar lalu lintas",
          paragraphs: [
            "Jalan di sekitar monumen sibuk dan sering menjadi persimpangan. Menyeberanglah di tempat yang aman, patuhi rambu, dan jangan mengambil foto dari tengah jalan.",
            "Saat ada kegiatan publik, arus dapat berubah cepat. Ikuti arah petugas dan hindari area yang dipasang pembatas.",
          ],
        },
        {
          heading: "Cuaca dan kenyamanan",
          paragraphs: [
            "Kota Jambi beriklim tropis dengan hujan yang bisa tiba-tiba. Bawa payung atau jas hujan kecil, minum cukup, dan cari ruang teduh jika diperlukan.",
            "Gunakan alas kaki dan pakaian yang nyaman untuk berjalan kaki di sekitar kawasan terbuka.",
          ],
        },
        {
          heading: "Barang dan etika",
          bullets: [
            "Amankan dompet, ponsel, dan dokumen saat berada di kerumunan.",
            "Jangan tinggalkan barang berharga di kendaraan yang diparkir.",
            "Hargai ruang publik: buang sampah pada tempatnya.",
            "Patuhi arahan saat acara agar tidak menghalangi arus.",
          ],
          callout:
            "Panduan ini bukan layanan darurat. Untuk kebutuhan medis atau keamanan, hubungi layanan resmi setempat.",
        },
      ],
      faqs: [
        {
          q: "Apakah aman berwisata ke Tugu Keris Siginjai?",
          a: "Sebagai ruang publik kota, umumnya aman untuk kunjungan singkat. Tetap waspada di persimpangan lalu lintas dan jaga barang bawaan di kerumunan.",
        },
        {
          q: "Bagaimana jika hujan turun?",
          a: "Bawa payung atau jas hujan kecil dan cari ruang teduh. Jika hujan lebat, pertimbangkan alternatif wisata saat hujan di sekitar Kota Baru.",
        },
        {
          q: "Apakah ada layanan medis di dekat monumen?",
          a: "Panduan ini tidak mencantumkan fasilitas medis tertentu. Untuk kebutuhan darurat, hubungi layanan resmi setempat.",
        },
        {
          q: "Bolehkah membawa hewan peliharaan?",
          a: "Ruangan terbuka umumnya memperbolehkan, tetapi ikuti aturan setempat, jaga kebersihan, dan perhatikan keramaian serta lalu lintas.",
        },
      ],
    },
    en: {
      metaTitle: "Safe & Comfortable Travel Tips Around Kota Baru, Jambi",
      metaDescription:
        "Safe travel tips in Kota Baru, Jambi near Tugu Keris Siginjai: traffic, weather, valuables, and public-space etiquette.",
      h1: "Safe & Comfortable Travel Tips",
      lead: "Kota Baru is both an administrative area and a traffic junction. This guide collects basic cautions so your visit stays calm.",
      facts: [
        { label: "AREA", value: "Administrative & traffic" },
        { label: "WEATHER", value: "Tropical, changeable" },
        { label: "BELONGINGS", value: "Secure your items" },
        { label: "ETIQUETTE", value: "Respect public space" },
      ],
      sections: [
        {
          heading: "Around traffic",
          paragraphs: [
            "The roads around the monument are busy and often form a junction. Cross only at safe points, obey signs, and never photograph from the middle of the road.",
            "During public events, flow can change quickly. Follow staff directions and avoid barrier-separated areas.",
          ],
        },
        {
          heading: "Weather and comfort",
          paragraphs: [
            "Jambi City has a tropical climate with sudden rain. Carry a small umbrella or raincoat, drink enough water, and find shade if needed.",
            "Wear comfortable footwear and clothing for walking around the open district.",
          ],
        },
        {
          heading: "Belongings and etiquette",
          bullets: [
            "Secure wallet, phone, and documents in crowds.",
            "Do not leave valuables in a parked vehicle.",
            "Respect public space: dispose of rubbish properly.",
            "Follow directions during events so you do not block flow.",
          ],
          callout:
            "This guide is not an emergency service. For medical or safety needs, contact local official services.",
        },
      ],
      faqs: [
        {
          q: "Is it safe to visit Tugu Keris Siginjai?",
          a: "As a city public space, it is generally safe for a short visit. Stay alert at the traffic junction and keep belongings secure in crowds.",
        },
        {
          q: "What if it rains?",
          a: "Carry a small umbrella or raincoat and find shade. If rain is heavy, consider a rainy-day alternative around Kota Baru.",
        },
        {
          q: "Is there a medical facility near the monument?",
          a: "This guide does not list a specific medical facility. For emergencies, contact local official services.",
        },
        {
          q: "May I bring a pet?",
          a: "Open spaces usually allow it, but follow local rules, keep the area clean, and mind crowds and traffic.",
        },
      ],
    },
  },
};

const batchAC: Record<string, { id: TopicContent; en: TopicContent }> = {
  // A1 — Sejarah Keris Siginjai
  "sejarah-keris-siginjai": {
    id: {
      metaTitle: "Sejarah Keris Siginjai: Simbol Budaya Jambi | Tugu Keris",
      metaDescription: "Keris Siginjai adalah simbol budaya Jambi yang diabadikan dalam lambang daerah. Panduan independen nirlaba merangkum sejarah dan maknanya, merujuk Pemerintah Kota Jambi.",
      h1: "Sejarah Keris Siginjai: Simbol Budaya Jambi",
      lead: "Keris Siginjai bukan sekadar senjata, melainkan lambang identitas masyarakat Jambi yang hingga kini dijadikan rujukan budaya. Halaman ini merangkum maknanya secara independen, merujuk publikasi resmi Pemerintah Kota Jambi.",
      facts: [
        { label: "IKON", value: "Lambang daerah" },
        { label: "BUDAYA", value: "Warisan Melayu" },
        { label: "RUJUKAN", value: "Pemkot Jambi" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Keris dalam tradisi Melayu Jambi",
          paragraphs: [
            "Keris merupakan bagian dari warisan budaya Melayu yang dihargai sebagai simbol kearifan, bukan sekadar benda. Di Jambi, Keris Siginjai dikenal sebagai salah satu keris yang menjadi rujukan bagi masyarakat setempat.",
            "Penempatannya dalam lambang daerah menunjukkan bahwa benda ini dipandang mewakili semangat dan identitas Jambi. Rincian makna lambang dapat dibaca pada publikasi resmi Pemerintah Kota Jambi.",
          ],
        },
        {
          heading: "Dari simbol ke monumen",
          paragraphs: [
            "Untuk menjaga ingatan kolektif, dibangun monumen berbentuk keris raksasa di kawasan Kota Baru sebagai penanda identitas kota. Monumen ini menjadi ruang terbuka yang dapat dikunjungi warga maupun pengunjung.",
          ],
        },
        {
          heading: "Mengapa halaman ini ada",
          bullets: [
            "Menjaga ingatan budaya secara terbuka.",
            "Menjadi titik temu warga dan pengunjung.",
            "Merujuk sumber resmi, bukan opini.",
          ],
          callout: "Artikel ini independen dan nirlaba; tidak menjual tiket atau menyatakan diri sebagai situs resmi pemerintah.",
        },
      ],
      faqs: [
        { q: "Apa itu Keris Siginjai?", a: "Keris Siginjai adalah keris yang menjadi simbol budaya Jambi dan diabadikan dalam lambang daerah. Ia dipandang sebagai representasi identitas, bukan hanya benda pusaka." },
        { q: "Di mana letaknya dalam lambang Jambi?", a: "Keris Siginjai menjadi bagian dari lambang Daerah Jambi. Penjelasan resmi makna setiap unsur lambang tersedia melalui Pemerintah Kota Jambi." },
        { q: "Apakah Tugu Keris Siginjai sama dengan keris aslinya?", a: "Tidak. Tugu adalah monumen berbentuk keris raksasa di Kota Baru yang mengabadikan simbol tersebut, bukan benda pusaka asli." },
        { q: "Siapa yang mengelola informasi ini?", a: "Halaman ini dikelola sebagai panduan pengunjung independen dan nirlaba; tidak terafiliasi dengan pemerintah atau pengelola lokasi." },
      ],
    },
    en: {
      metaTitle: "History of Keris Siginjai: Jambi's Cultural Symbol | Keris Monument",
      metaDescription: "Keris Siginjai is a cultural symbol of Jambi enshrined in the regional emblem. An independent non-profit guide to its history and meaning, sourced from Jambi City Government.",
      h1: "History of Keris Siginjai: Jambi's Cultural Symbol",
      lead: "The Keris Siginjai is more than a weapon—it is a symbol of Jambi identity still referenced in culture today. This page summarises its meaning independently, citing official material from Jambi City Government.",
      facts: [
        { label: "ICON", value: "Regional emblem" },
        { label: "CULTURE", value: "Melayu heritage" },
        { label: "SOURCE", value: "Jambi City Gov" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "The keris in Jambi Melayu tradition",
          paragraphs: [
            "The keris is part of Melayu cultural heritage valued as a symbol of wisdom, not merely an object. In Jambi, the Keris Siginjai is known as a keris that serves as a reference point for local communities.",
            "Its place in the regional emblem shows it is seen as representing the spirit and identity of Jambi. The official explanation of the emblem is published by Jambi City Government.",
          ],
        },
        {
          heading: "From symbol to monument",
          paragraphs: [
            "To preserve collective memory, a giant keris-shaped monument was built in Kota Baru as a civic identity marker. The monument is an open space visitors and residents can explore.",
          ],
        },
        {
          heading: "Why this page exists",
          bullets: [
            "Preserving cultural memory openly.",
            "A meeting point for residents and visitors.",
            "Citing official sources, not opinion.",
          ],
          callout: "This article is independent and non-profit; it does not sell tickets or claim to be an official government site.",
        },
      ],
      faqs: [
        { q: "What is the Keris Siginjai?", a: "It is a keris that became a cultural symbol of Jambi and is enshrined in the regional emblem. It represents identity rather than being only an heirloom object." },
        { q: "Where is it in Jambi's emblem?", a: "The Keris Siginjai is part of the emblem of the Jambi region. The official meaning of each emblem element is available from Jambi City Government." },
        { q: "Is the Tugu Keris Siginjai the original keris?", a: "No. The Tugu is a giant keris-shaped monument in Kota Baru that honours the symbol; it is not the original heirloom." },
        { q: "Who manages this information?", a: "This page is run as an independent, non-profit visitor guide; it is not affiliated with the government or the site operator." },
      ],
    },
  },

  // A2 — Tugu Keris sebagai ikon Kota Baru
  "tugu-keris-landmark-kota-baru": {
    id: {
      metaTitle: "Tugu Keris Siginjai: Ikon Kota Baru Jambi",
      metaDescription: "Tugu Keris Siginjai sebagai ikon Kota Baru, Jambi. Panduan independen nirlaba tentang makna monumen, letak di kawasan administrasi, dan ruang publik terbuka.",
      h1: "Tugu Keris Siginjai: Ikon Kota Baru Jambi",
      lead: "Berdiri di kawasan Kota Baru, Tugu Keris Siginjai menjadi penanda visual kota sekaligus ruang publik terbuka. Panduan ini memaparkan perannya tanpa klaim resmi.",
      facts: [
        { label: "LOKASI", value: "Kota Baru" },
        { label: "TIPE", value: "Ruang terbuka" },
        { label: "FUNGSI", value: "Ikon kota" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Penanda identitas kota",
          paragraphs: [
            "Monumen ini kerap dijadikan titik referensi warga ketika menjelaskan arah di sekitar Kota Baru. Kehadirannya membantu pengunjung mengenali pusat administratif sekaligus destinasi singkat.",
          ],
        },
        {
          heading: "Ruang publik terbuka",
          paragraphs: [
            "Sebagai ruang terbuka, monumen dapat diakses oleh siapa saja untuk berjalan kaki, berfoto, atau sekadar beristirahat. Namun, karena berada di persimpangan lalu lintas, pengunjung perlu menjaga kehati-hatian.",
          ],
          callout: "Tidak ada jadwal masuk resmi yang diverifikasi; jangan menganggap monumen buka 24 jam tanpa konfirmasi.",
        },
      ],
      faqs: [
        { q: "Di mana letak Tugu Keris Siginjai?", a: "Di kawasan Kota Baru, Kecamatan Kota Baru, Jambi, sekitar Paal Lima. Gunakan koordinat -1.6305638, 103.6078114 untuk navigasi." },
        { q: "Apakah ini ikon resmi kota?", a: "Monumen ini dikenal luas sebagai penanda visual Kota Baru. Status kelembagaan pasti merujuk pada publikasi Pemerintah Kota Jambi." },
        { q: "Bolehkah dikunjungi gratis?", a: "Aturan akses saat ini belum terverifikasi. Panduan ini tidak menjual tiket dan tidak menjamin akses gratis." },
        { q: "Apakah cocok untuk foto?", a: "Ya, monumen terbuka cocok untuk foto singkat. Ambil jarak aman dari jalan dan patuhi rambu saat ada acara." },
      ],
    },
    en: {
      metaTitle: "Keris Siginjai Monument: Landmark of Kota Baru, Jambi",
      metaDescription: "The Keris Siginjai Monument as a landmark of Kota Baru, Jambi. An independent non-profit guide to its meaning, location in the administrative district, and open public space.",
      h1: "Keris Siginjai Monument: Landmark of Kota Baru, Jambi",
      lead: "Standing in Kota Baru, the Keris Siginjai Monument is both a visual marker of the city and an open public space. This guide outlines its role without official claims.",
      facts: [
        { label: "LOCATION", value: "Kota Baru" },
        { label: "TYPE", value: "Open space" },
        { label: "ROLE", value: "City icon" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "A marker of city identity",
          paragraphs: [
            "Residents often use the monument as a reference point when describing directions around Kota Baru. Its presence helps visitors recognise the administrative centre and a short stop.",
          ],
        },
        {
          heading: "An open public space",
          paragraphs: [
            "As an open space, the monument is accessible for walking, photos, or a short rest. Because it sits at a traffic junction, visitors should stay cautious.",
          ],
          callout: "No verified official visiting hours exist; do not assume 24-hour access without confirmation.",
        },
      ],
      faqs: [
        { q: "Where is the Keris Siginjai Monument?", a: "In Kota Baru, Kecamatan Kota Baru, Jambi, around Paal Lima. Use coordinates -1.6305638, 103.6078114 for navigation." },
        { q: "Is it the official city landmark?", a: "The monument is widely known as a visual marker of Kota Baru. Its formal status refers to Jambi City Government publications." },
        { q: "Is entry free?", a: "Current access rules are not verified. This guide does not sell tickets and does not guarantee free access." },
        { q: "Is it good for photos?", a: "Yes, the open monument suits a short photo stop. Keep a safe distance from the road and follow signs during events." },
      ],
    },
  },

  // A3 — Arsitektur Tugu Keris
  "arsitektur-tugu-keris-jambi": {
    id: {
      metaTitle: "Arsitektur Tugu Keris Siginjai Jambi: Bentuk & Makna",
      metaDescription: "Arsitektur Tugu Keris Siginjai: monumen berbentuk keris raksasa, tata letak di Kota Baru, dan makna visualnya. Panduan independen nirlaba.",
      h1: "Arsitektur Tugu Keris Siginjai: Bentuk & Makna",
      lead: "Tugu Keris Siginjai menonjol karena bentuknya yang menyerupai keris raksasa. Panduan ini memaparkan tata letak dan makna visualnya tanpa mendetailkan dimensi yang tidak terverifikasi.",
      facts: [
        { label: "BENTUK", value: "Keris raksasa" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "MAKNA", value: "Identitas" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Bentuk yang mudah dikenali",
          paragraphs: [
            "Monumen ini mengambil siluet keris—senjata tradisional Nusantara—sebagai bentuk utamanya, sehingga mudah dikenali dari kejauhan. Pemilihan bentuk keris merujuk pada simbol budaya Jambi.",
            "Rincian material dan ukuran persis tidak dibahas di sini karena belum terverifikasi dari sumber resmi. Fokus panduan adalah makna dan pengalaman mengunjungi.",
          ],
        },
        {
          heading: "Tata letak di Kota Baru",
          paragraphs: [
            "Monumen berada di ruang terbuka di tengah aktivitas administratif kota. Posisinya membuatnya menjadi latar foto sekaligus penanda arah bagi warga.",
          ],
        },
        {
          heading: "Membaca maknanya",
          bullets: [
            "Keris = identitas & kearifan Melayu.",
            "Monumen = ingatan kolektif kota.",
            "Ruang terbuka = milik bersama warga.",
          ],
          callout: "Panduan tidak mencantumkan dimensi pasti; konfirmasikan dengan sumber resmi jika memerlukan data teknis.",
        },
      ],
      faqs: [
        { q: "Bahan apa yang dipakai?", a: "Panduan ini tidak memuat detail material yang belum terverifikasi. Rujuk publikasi resmi untuk data teknis monumen." },
        { q: "Berapa tinggi monumen?", a: "Angka tinggi persis belum diverifikasi dari sumber resmi; panduan fokus pada bentuk dan makna agar tidak menyebarkan data keliru." },
        { q: "Mengapa berbentuk keris?", a: "Bentuk keris merujuk pada Keris Siginjai sebagai simbol budaya Jambi yang diabadikan dalam lambang daerah." },
        { q: "Apakah bisa masuk ke dalam?", a: "Ini adalah monumen ruang terbuka, bukan bangunan beratap. Pengunjung menikmatinya dari area sekitar dengan menjaga kehati-hatian lalu lintas." },
      ],
    },
    en: {
      metaTitle: "Architecture of Keris Siginjai Monument Jambi: Form & Meaning",
      metaDescription: "The architecture of Keris Siginjai Monument: a giant keris-shaped monument, its layout in Kota Baru, and visual meaning. An independent non-profit guide.",
      h1: "Architecture of Keris Siginjai Monument: Form & Meaning",
      lead: "The Keris Siginjai Monument stands out for its giant keris-like form. This guide outlines its layout and visual meaning without detailing unverified dimensions.",
      facts: [
        { label: "FORM", value: "Giant keris" },
        { label: "DISTRICT", value: "Kota Baru" },
        { label: "MEANING", value: "Identity" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "An easily recognised form",
          paragraphs: [
            "The monument takes the silhouette of a keris—a traditional Nusantara blade—as its main form, making it recognisable from afar. The keris shape refers to Jambi's cultural symbol.",
            "Exact material and size are not discussed here because they are not verified from official sources. The guide focuses on meaning and the visit experience.",
          ],
        },
        {
          heading: "Layout in Kota Baru",
          paragraphs: [
            "The monument sits in open space amid the city's administrative activity. Its position makes it both a photo backdrop and a direction marker for residents.",
          ],
        },
        {
          heading: "Reading its meaning",
          bullets: [
            "Keris = Melayu identity & wisdom.",
            "Monument = collective city memory.",
            "Open space = shared by residents.",
          ],
          callout: "This guide does not list exact dimensions; confirm with official sources if you need technical data.",
        },
      ],
      faqs: [
        { q: "What material was used?", a: "This guide does not include unverified material details. Refer to official publications for technical monument data." },
        { q: "How tall is the monument?", a: "An exact height is not verified from official sources; the guide focuses on form and meaning to avoid spreading wrong data." },
        { q: "Why a keris shape?", a: "The keris shape refers to the Keris Siginjai as a cultural symbol of Jambi enshrined in the regional emblem." },
        { q: "Can you go inside?", a: "It is an open-air monument, not a roofed building. Visitors enjoy it from the surrounding area, staying cautious of traffic." },
      ],
    },
  },

  // A4 — Pahlawan & warisan budaya
  "pahlawan-warisan-budaya-jambi": {
    id: {
      metaTitle: "Pahlawan & Warisan Budaya Jambi di Sekitar Tugu Keris",
      metaDescription: "Pahlawan dan warisan budaya Jambi yang terekam di sekitar Tugu Keris Siginjai. Panduan independen nirlaba merujuk sumber resmi, tanpa klaim sejarah tertentu.",
      h1: "Pahlawan & Warisan Budaya Jambi",
      lead: "Monumen di Kota Baru berada dalam suasana kota yang menyimpan ingatan akan warisan budaya Jambi. Halaman ini memaparkan konteksnya secara umum, merujuk publikasi resmi.",
      facts: [
        { label: "KONTEKS", value: "Warisan budaya" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "RUJUKAN", value: "Pemkot Jambi" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Warisan sebagai ingatan bersama",
          paragraphs: [
            "Warisan budaya Jambi mencakup tradisi, simbol, dan nilai yang dijaga lintas generasi. Keris Siginjai adalah salah satu simbol yang menghubungkan masa lalu dengan identitas kota kini.",
            "Halaman ini tidak mencantumkan nama tokoh tertentu atau peristiwa yang belum diverifikasi. Kami merujuk pada publikasi resmi untuk narasi yang tepat.",
          ],
        },
        {
          heading: "Menemukan jejak budaya",
          paragraphs: [
            "Sekitar Kota Baru dan pusat kota menyimpan elemen budaya Melayu Jambi yang dapat dikenali melalui arsitektur dan ruang publik. Kunjungan singkat ke monumen dapat menjadi awal mengenal warisan tersebut.",
          ],
        },
        {
          heading: "Menjaga secara bertanggung jawab",
          bullets: [
            "Hormati ruang publik.",
            "Gunakan sumber resmi untuk sejarah.",
            "Jangan menyebarkan klaim tak terverifikasi.",
          ],
          callout: "Panduan ini tidak mengklaim keahlian sejarah; rujukan utama adalah publikasi Pemerintah Kota Jambi.",
        },
      ],
      faqs: [
        { q: "Siapa pahlawan yang dimaksud?", a: "Halaman ini tidak mencantumkan nama tokoh spesifik yang belum terverifikasi. Untuk narasi sejarah, rujuk publikasi resmi Pemerintah Kota Jambi." },
        { q: "Apa warisan budaya Jambi?", a: "Mencakup tradisi, simbol, dan nilai Melayu Jambi yang dijaga lintas generasi, termasuk keris sebagai simbol daerah." },
        { q: "Apakah monumen bagian warisan resmi?", a: "Monumen mengabadikan simbol budaya Jambi. Status kelembagaan pasti merujuk pada publikasi pemerintah setempat." },
        { q: "Di mana membaca sejarah resmi?", a: "Melalui kanal resmi Pemerintah Kota Jambi, termasuk halaman arti lambang daerah." },
      ],
    },
    en: {
      metaTitle: "Heroes & Cultural Heritage of Jambi Around the Keris Monument",
      metaDescription: "The heroes and cultural heritage of Jambi reflected around the Keris Siginjai Monument. An independent non-profit guide citing official sources, without specific historical claims.",
      h1: "Heroes & Cultural Heritage of Jambi",
      lead: "The monument in Kota Baru sits within a city that holds the memory of Jambi's cultural heritage. This page gives general context, citing official publications.",
      facts: [
        { label: "CONTEXT", value: "Cultural heritage" },
        { label: "DISTRICT", value: "Kota Baru" },
        { label: "SOURCE", value: "Jambi City Gov" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Heritage as shared memory",
          paragraphs: [
            "Jambi's cultural heritage includes traditions, symbols, and values kept across generations. The Keris Siginjai is one symbol linking the past to the city's present identity.",
            "This page does not list specific figures or unverified events. We cite official publications for an accurate narrative.",
          ],
        },
        {
          heading: "Finding cultural traces",
          paragraphs: [
            "Around Kota Baru and the city centre are elements of Jambi Melayu culture visible through architecture and public space. A short monument visit can be a start to knowing that heritage.",
          ],
        },
        {
          heading: "Caring responsibly",
          bullets: [
            "Respect public space.",
            "Use official sources for history.",
            "Do not spread unverified claims.",
          ],
          callout: "This guide does not claim historical expertise; the main reference is Jambi City Government publications.",
        },
      ],
      faqs: [
        { q: "Which heroes are meant?", a: "This page does not list specific unverified figures. For historical narrative, refer to official Jambi City Government publications." },
        { q: "What is Jambi's cultural heritage?", a: "It includes Melayu Jambi traditions, symbols, and values kept across generations, including the keris as a regional symbol." },
        { q: "Is the monument officially heritage?", a: "The monument honours Jambi's cultural symbol. Its formal status refers to local government publications." },
        { q: "Where to read official history?", a: "Through Jambi City Government official channels, including the regional emblem meaning page." },
      ],
    },
  },

  // A5 — Tradisi keris budaya Melayu
  "tradisi-keris-budaya-melayu": {
    id: {
      metaTitle: "Tradisi Keris dalam Budaya Melayu Jambi",
      metaDescription: "Tradisi keris dalam budaya Melayu Jambi dan kaitannya dengan Keris Siginjai. Panduan independen nirlaba tentang makna keris sebagai warisan, bukan senjata.",
      h1: "Tradisi Keris dalam Budaya Melayu Jambi",
      lead: "Dalam budaya Melayu, keris dipandang sebagai warisan bernilai simbolis, bukan sekadar senjata. Halaman ini merangkum tradisinya secara umum dan merujuk sumber resmi.",
      facts: [
        { label: "TRADISI", value: "Warisan Melayu" },
        { label: "MAKNA", value: "Simbolik" },
        { label: "RUJUKAN", value: "Pemkot Jambi" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Keris sebagai warisan",
          paragraphs: [
            "Keris di Nusantara, termasuk Jambi, dirawat sebagai benda pusaka bernilai simbolis dan estetis. Penurunan antargenerasi menjadikannya penanda identitas keluarga dan komunitas.",
            "Keris Siginjai menjadi salah satu rujukan dalam tradisi tersebut, lalu diabadikan sebagai simbol daerah.",
          ],
        },
        {
          heading: "Makna bagi masyarakat",
          paragraphs: [
            "Bagi masyarakat Jambi, keris menghubungkan ingatan budaya dengan kehidupan masa kini. Monumen di Kota Baru membantu mengenalkannya kepada pengunjung secara terbuka.",
          ],
        },
        {
          heading: "Menghargai tanpa melebih-lebihkan",
          bullets: [
            "Pahami konteks budaya.",
            "Gunakan sumber resmi.",
            "Hindari klaim sejarah tak pasti.",
          ],
          callout: "Panduan tidak mengklaim keahlian adat; rujukan utama adalah publikasi Pemerintah Kota Jambi.",
        },
      ],
      faqs: [
        { q: "Apa makna keris bagi Melayu Jambi?", a: "Keris dipandang sebagai warisan simbolis dan estetis yang menghubungkan generasi, bukan semata senjata." },
        { q: "Apakah keris masih dipakai?", a: "Sebagai warisan, keris dirawat dan dijadikan rujukan budaya. Penggunaan praktis merujuk pada tradisi setempat yang dijelaskan sumber resmi." },
        { q: "Hubungannya dengan Tugu Keris?", a: "Tugu mengabadikan Keris Siginjai yang menjadi simbol daerah Jambi, sehingga menghubungkan tradisi dengan ruang publik kota." },
        { q: "Di mana belajar lebih lanjut?", a: "Melalui publikasi resmi Pemerintah Kota Jambi, termasuk penjelasan lambang daerah." },
      ],
    },
    en: {
      metaTitle: "The Keris Tradition in Jambi Melayu Culture",
      metaDescription: "The keris tradition in Jambi Melayu culture and its link to the Keris Siginjai. An independent non-profit guide to the keris as heritage, not a weapon.",
      h1: "The Keris Tradition in Jambi Melayu Culture",
      lead: "In Melayu culture, the keris is a symbolic heritage valued beyond a weapon. This page summarises the tradition generally and cites official sources.",
      facts: [
        { label: "TRADITION", value: "Melayu heritage" },
        { label: "MEANING", value: "Symbolic" },
        { label: "SOURCE", value: "Jambi City Gov" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "The keris as heritage",
          paragraphs: [
            "The keris in the Nusantara, including Jambi, is kept as a symbolic and aesthetic heirloom. Passing it across generations makes it a marker of family and community identity.",
            "The Keris Siginjai became a reference in that tradition and was then enshrined as a regional symbol.",
          ],
        },
        {
          heading: "Meaning for the community",
          paragraphs: [
            "For Jambi people, the keris connects cultural memory with present life. The Kota Baru monument helps introduce it to visitors openly.",
          ],
        },
        {
          heading: "Appreciating without overclaiming",
          bullets: [
            "Understand cultural context.",
            "Use official sources.",
            "Avoid uncertain historical claims.",
          ],
          callout: "This guide does not claim customary expertise; the main reference is Jambi City Government publications.",
        },
      ],
      faqs: [
        { q: "What does the keris mean to Melayu Jambi?", a: "It is seen as symbolic and aesthetic heritage linking generations, not merely a weapon." },
        { q: "Is the keris still used?", a: "As heritage, it is kept and used as a cultural reference. Practical use refers to local tradition explained by official sources." },
        { q: "Its link to the monument?", a: "The Tugu honours the Keris Siginjai that became Jambi's regional symbol, linking tradition with the city's public space." },
        { q: "Where to learn more?", a: "Through Jambi City Government official publications, including the regional emblem explanation." },
      ],
    },
  },

  // C12 — Kuliner legendaris dekat tugu
  "kuliner-legendaris-dekat-tugu": {
    id: {
      metaTitle: "Kuliner Legendaris Dekat Tugu Keris Siginjai Jambi",
      metaDescription: "Kuliner legendaris di sekitar Tugu Keris Siginjai, Kota Baru: kategori masakan khas Jambi dan arah umum. Panduan independen nirlaba, tanpa rekomendasi merek.",
      h1: "Kuliner Legendaris di Sekitar Tugu Keris",
      lead: "Kawasan Kota Baru dan sekitarnya menyimpan ragam masakan khas Jambi yang dikenal lintas generasi. Panduan ini merangkum kategorinya dan arah umum, tanpa menyebutkan merek tertentu.",
      facts: [
        { label: "RAGAM", value: "Masakan khas" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "ARAH", value: "Pusat kota" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Cita rasa khas Jambi",
          paragraphs: [
            "Jambi dikenal dengan masakan bercita rasa khas seperti tempoyak (durian fermentasi), gulai ikan patin, dan ikan baung. Hidangan ini kerap menjadi rujukan ketika warga menyebut makanan khas daerah.",
            "Panduan hanya menyebutkan kategori dan arah umum. Untuk pilihan warung, gunakan kategori usaha di sekitar pusat kota sebagai orientasi.",
          ],
        },
        {
          heading: "Mencari makan di sekitar monumen",
          paragraphs: [
            "Dari monumen, kawasan Kota Baru dan koridor jalan utama menyediakan pilihan makan dari warung hingga kedai. Waktu terbaik menjelajah kuliner adalah pagi dan malam hari.",
          ],
        },
        {
          heading: "Tips menjelajah kuliner",
          bullets: [
            "Pilih kategori, bukan merek tertentu.",
            "Cek kebersihan dan harga di tempat.",
            "Tanya warga untuk arah umum.",
          ],
          callout: "Panduan ini tidak memuat ulasan atau endorsement bisnis; gunakan kategori sebagai panduan, bukan rekomendasi.",
        },
      ],
      faqs: [
        { q: "Apa makanan khas Jambi di dekat sini?", a: "Kategori seperti tempoyak, gulai ikan patin, dan ikan baung dikenal luas. Panduan tidak menyebut merek warung tertentu." },
        { q: "Di mana mencari kuliner dekat monumen?", a: "Kawasan Kota Baru dan pusat kota menyediakan pilihan. Gunakan arah umum, bukan satu alamat wajib." },
        { q: "Apakah ada pasar makanan?", a: "Pasar tradisional di pusat kota menyediakan jajanan dan masakan rumahan. Konfirmasikan jam operasi di lokasi." },
        { q: "Apakah panduan ini berafiliasi restoran?", a: "Tidak. Panduan independen nirlaba; tidak ada kerja sama atau endorsement dengan kedai mana pun." },
      ],
    },
    en: {
      metaTitle: "Legendary Food Near Keris Siginjai Monument Jambi",
      metaDescription: "Legendary food around Keris Siginjai Monument, Kota Baru: categories of Jambi dishes and general directions. An independent non-profit guide, no brand endorsement.",
      h1: "Legendary Food Around the Keris Monument",
      lead: "The Kota Baru area and surroundings hold Jambi dishes known across generations. This guide summarises the categories and general directions without naming specific brands.",
      facts: [
        { label: "VARIETY", value: "Local dishes" },
        { label: "AREA", value: "Kota Baru" },
        { label: "DIRECTION", value: "City centre" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Jambi's signature flavours",
          paragraphs: [
            "Jambi is known for distinct dishes such as tempoyak (fermented durian), gulai ikan patin, and ikan baung. These are often referenced when locals name regional food.",
            "The guide only lists categories and general directions. For stall choices, use the venue types around the city centre as orientation.",
          ],
        },
        {
          heading: "Finding food near the monument",
          paragraphs: [
            "From the monument, Kota Baru and main road corridors offer options from warung to cafés. The best time to explore food is morning and evening.",
          ],
        },
        {
          heading: "Tips for food exploring",
          bullets: [
            "Choose a category, not a specific brand.",
            "Check cleanliness and price on site.",
            "Ask residents for general directions.",
          ],
          callout: "This guide has no reviews or business endorsement; use categories as guidance, not recommendation.",
        },
      ],
      faqs: [
        { q: "What Jambi food is near here?", a: "Categories like tempoyak, gulai ikan patin, and ikan baung are widely known. The guide names no specific warung." },
        { q: "Where to find food near the monument?", a: "Kota Baru and the city centre offer choices. Use general directions, not one required address." },
        { q: "Is there a food market?", a: "Traditional markets in the city centre offer snacks and home cooking. Confirm operating hours on site." },
        { q: "Is this guide affiliated with restaurants?", a: "No. It is an independent non-profit guide; there is no partnership or endorsement with any shop." },
      ],
    },
  },

  // C13 — Makan malam & kuliner malam
  "makan-malam-kuliner-malam": {
    id: {
      metaTitle: "Makan Malam & Kuliner Malam Dekat Tugu Keris Jambi",
      metaDescription: "Panduan makan malam dan kuliner malam di sekitar Tugu Keris Siginjai: kategori hidangan, suasana, dan waktu. Independen nirlaba, tanpa rekomendasi merek.",
      h1: "Makan Malam & Kuliner Malam di Sekitar Tugu",
      lead: "Malam hari di Kota Baru menawarkan pilihan makan santai setelah mengunjungi monumen. Panduan ini merangkum kategori hidangan malam dan suasana umum tanpa menyebut merek.",
      facts: [
        { label: "WAKTU", value: "Malam hari" },
        { label: "RAGAM", value: "Makan santai" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Suasana makan malam",
          paragraphs: [
            "Udara lebih sejuk dan lampu kota menyala, cocok untuk makan santai bersama keluarga atau teman. Kategori yang umum tersedia meliputi nasi, soto, dan hidangan pembuka ringan.",
            "Panduan tidak mencantumkan nama kedai. Gunakan kategori usaha di sekitar pusat kota sebagai orientasi malam Anda.",
          ],
        },
        {
          heading: "Memilih hidangan malam",
          paragraphs: [
            "Sesuaikan pilihan dengan selera dan anggaran. Warung dan kedai di koridor utama biasanya masih melayani saat senja hingga malam, namun jam bervariasi—konfirmasikan di lokasi.",
          ],
        },
        {
          heading: "Tips makan malam aman",
          bullets: [
            "Cek harga sebelum memesan.",
            "Pilih tempat ramai & bersih.",
            "Jaga barang bawaan.",
          ],
          callout: "Jam operasi malam dapat berubah; jangan menganggap semua kedai buka larut malam.",
        },
      ],
      faqs: [
        { q: "Apa suasana makan malam di sini?", a: "Sejuk dan terang kota, cocok santai. Kategori umum: nasi, soto, hidangan ringan." },
        { q: "Apakah aman makan malam di Kota Baru?", a: "Sebagai kawasan kota, umumnya aman untuk kunjungan singkat. Tetap waspada di persimpangan dan jaga barang." },
        { q: "Jam buka hingga pukul berapa?", a: "Bervariasi per kedai; panduan tidak mematok jam. Konfirmasikan di lokasi saat tiba." },
        { q: "Apakah panduan merekomendasikan restoran?", a: "Tidak. Panduan nirlaba; hanya memberi kategori dan arah umum." },
      ],
    },
    en: {
      metaTitle: "Dinner & Night Food Near Keris Siginjai Monument Jambi",
      metaDescription: "Guide to dinner and night food around Keris Siginjai Monument: dish categories, atmosphere, and timing. Independent non-profit, no brand endorsement.",
      h1: "Dinner & Night Food Around the Monument",
      lead: "Evenings in Kota Baru offer relaxed dining after visiting the monument. This guide summarises night dish categories and general atmosphere without naming brands.",
      facts: [
        { label: "TIME", value: "Evenings" },
        { label: "VARIETY", value: "Casual dining" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "The dinner atmosphere",
          paragraphs: [
            "The air is cooler and city lights are on, good for relaxed meals with family or friends. Common categories include rice dishes, soto, and light starters.",
            "The guide names no shops. Use the venue types around the city centre as your evening orientation.",
          ],
        },
        {
          heading: "Choosing night dishes",
          paragraphs: [
            "Match your choice to taste and budget. Warung and shops on main corridors usually serve from dusk to night, but hours vary—confirm on site.",
          ],
        },
        {
          heading: "Safe dinner tips",
          bullets: [
            "Check price before ordering.",
            "Pick busy, clean places.",
            "Secure your belongings.",
          ],
          callout: "Night hours can change; do not assume every shop stays open late.",
        },
      ],
      faqs: [
        { q: "What is the dinner atmosphere here?", a: "Cool and lit by the city, good for relaxing. Common categories: rice, soto, light dishes." },
        { q: "Is dinner in Kota Baru safe?", a: "As a city area, generally safe for a short visit. Stay alert at junctions and secure belongings." },
        { q: "Until what time are they open?", a: "Varies per shop; the guide sets no hours. Confirm on site when you arrive." },
        { q: "Does this guide recommend restaurants?", a: "No. It is a non-profit guide; it only gives categories and general directions." },
      ],
    },
  },

  // C14 — Warung kopi & cafe Paal Lima
  "warung-kopi-cafe-paal-lima": {
    id: {
      metaTitle: "Warung Kopi & Cafe di Paal Lima, Kota Baru Jambi",
      metaDescription: "Warung kopi dan cafe di Paal Lima, Kota Baru dekat Tugu Keris. Panduan kategori kedai kopi & cafe, suasana, dan arah umum. Independen nirlaba.",
      h1: "Warung Kopi & Cafe di Paal Lima",
      lead: "Paal Lima dan Kota Baru memiliki kedai kopi serta cafe yang menjadi tempat bersantai warga. Panduan ini memaparkan kategorinya dan arah umum tanpa menyebut merek.",
      facts: [
        { label: "KAWASAN", value: "Paal Lima" },
        { label: "JENIS", value: "Kopi & cafe" },
        { label: "SUASANA", value: "Santai" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Kopi dan cafe sebagai ruang santai",
          paragraphs: [
            "Kedai kopi dari warung sederhana hingga cafe modern tersebar di koridor Kota Baru. Mereka menjadi tempat bertemu, bekerja sebentar, atau sekadar menikmati minuman.",
            "Panduan tidak mencantumkan nama kedai. Gunakan kategori 'warung kopi' atau 'cafe' di sekitar Paal Lima sebagai panduan.",
          ],
        },
        {
          heading: "Memilih tempat duduk",
          paragraphs: [
            "Sesuaikan dengan suasana yang dicari: warung kopi untuk nuansa hangat dan sederhana, cafe untuk suasana lebih panjang. Waktu ramai biasanya pagi dan sore.",
          ],
        },
        {
          heading: "Tips mampir",
          bullets: [
            "Cocokkan suasana dengan selera.",
            "Cek harga minuman.",
            "Gunakan kategori sebagai arah.",
          ],
          callout: "Panduan tidak memuat ulasan kedai; gunakan kategori sebagai orientasi, bukan rekomendasi merek.",
        },
      ],
      faqs: [
        { q: "Di mana cafe di Paal Lima?", a: "Menyebar di koridor Kota Baru sekitar Paal Lima. Gunakan kategori 'cafe' sebagai arah umum." },
        { q: "Apakah ada warung kopi tradisional?", a: "Kategori warung kopi tersedia di kawasan ini. Panduan tidak menyebut nama tertentu." },
        { q: "Kapan cafe ramai?", a: "Biasanya pagi dan sore hari. Jam bervariasi; konfirmasikan di lokasi." },
        { q: "Apakah panduan berafiliasi cafe?", a: "Tidak. Panduan independen nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Coffee Shops & Cafés in Paal Lima, Kota Baru Jambi",
      metaDescription: "Coffee shops and cafés in Paal Lima, Kota Baru near the Keris Monument. A guide to café categories, atmosphere, and general directions. Independent non-profit.",
      h1: "Coffee Shops & Cafés in Paal Lima",
      lead: "Paal Lima and Kota Baru have coffee shops and cafés where residents relax. This guide outlines the categories and general directions without naming brands.",
      facts: [
        { label: "AREA", value: "Paal Lima" },
        { label: "TYPE", value: "Coffee & cafés" },
        { label: "MOOD", value: "Relaxed" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Coffee and cafés as relaxation spaces",
          paragraphs: [
            "Coffee shops from simple warung to modern cafés spread across Kota Baru corridors. They are places to meet, work briefly, or just enjoy a drink.",
            "The guide names no shops. Use the 'warung kopi' or 'café' category around Paal Lima as guidance.",
          ],
        },
        {
          heading: "Choosing a seat",
          paragraphs: [
            "Match the mood you want: a warung kopi for warm simplicity, a café for a longer stay. Busy times are usually morning and afternoon.",
          ],
        },
        {
          heading: "Drop-in tips",
          bullets: [
            "Match mood to taste.",
            "Check drink prices.",
            "Use categories as direction.",
          ],
          callout: "This guide has no shop reviews; use categories as orientation, not brand recommendation.",
        },
      ],
      faqs: [
        { q: "Where are cafés in Paal Lima?", a: "Spread across Kota Baru corridors around Paal Lima. Use the 'café' category as a general direction." },
        { q: "Are there traditional coffee warung?", a: "The warung kopi category is available here. The guide names no specific one." },
        { q: "When are cafés busy?", a: "Usually mornings and afternoons. Hours vary; confirm on site." },
        { q: "Is this guide affiliated with cafés?", a: "No. It is an independent non-profit guide with no endorsement." },
      ],
    },
  },

  // C15 — Kuliner khas Jambi tradisional
  "kuliner-khas-jambi-tradisional": {
    id: {
      metaTitle: "Kuliner Khas Jambi Tradisional Dekat Tugu Keris",
      metaDescription: "Masakan tradisional khas Jambi di sekitar Tugu Keris Siginjai: tempoyak, gulai patin, pendap, dan lainnya. Panduan kategori nirlaba, tanpa rekomendasi merek.",
      h1: "Kuliner Khas Jambi Tradisional",
      lead: "Masakan tradisional Jambi kaya cita rasa dan diwariskan lintas generasi. Panduan ini merangkum kategorinya di sekitar monumen tanpa menyebut merek warung.",
      facts: [
        { label: "CITA RASA", value: "Tradisional" },
        { label: "RAGAM", value: "Masakan rumahan" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Hidangan khas yang dikenal",
          paragraphs: [
            "Beberapa hidangan khas Jambi yang sering dirujuk antara lain tempoyak, gulai ikan patin, ikan baung, dan pendap. Masing-masing mencerminkan cita rasa lokal yang khas.",
            "Panduan menyebutkan kategori sebagai pengenalan. Untuk mencicipi, gunakan kedai di sekitar pusat kota yang menyajikan masakan rumahan.",
          ],
        },
        {
          heading: "Menikmati secara bertanggung jawab",
          paragraphs: [
            "Sesuaikan pilihan dengan toleransi rasa (misalnya tempoyak berbahan durian). Tanya warga untuk arah umum kedai yang menyajikan masakan khas.",
          ],
        },
        {
          heading: "Tips mencoba",
          bullets: [
            "Kenali bahan utama.",
            "Tanya warga arah umum.",
            "Cek kebersihan.",
          ],
          callout: "Panduan tidak mengulas kedai; gunakan kategori sebagai panduan mengenal masakan Jambi.",
        },
      ],
      faqs: [
        { q: "Apa masakan tradisional Jambi?", a: "Antara lain tempoyak, gulai ikan patin, ikan baung, dan pendap—cita rasa lokal khas." },
        { q: "Di mana mencoba di dekat monumen?", a: "Kedai di sekitar pusat kota menyajikan masakan rumahan. Panduan tidak menunjuk satu alamat." },
        { q: "Apakah halal?", a: "Masakan setempat umumnya halal; panduan tidak memverifikasi satu per satu. Konfirmasikan di tempat." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba independen tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Traditional Jambi Cuisine Near Keris Siginjai Monument",
      metaDescription: "Traditional Jambi dishes around Keris Siginjai Monument: tempoyak, gulai patin, pendap, and more. A non-profit category guide, no brand endorsement.",
      h1: "Traditional Jambi Cuisine",
      lead: "Traditional Jambi cooking is rich in flavour and passed across generations. This guide summarises the categories around the monument without naming specific warung.",
      facts: [
        { label: "FLAVOUR", value: "Traditional" },
        { label: "VARIETY", value: "Home cooking" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Well-known local dishes",
          paragraphs: [
            "Some often-referenced Jambi dishes include tempoyak, gulai ikan patin, ikan baung, and pendap. Each reflects a distinct local flavour.",
            "The guide names categories as an introduction. To taste them, use shops around the city centre serving home cooking.",
          ],
        },
        {
          heading: "Enjoying responsibly",
          paragraphs: [
            "Match choices to taste tolerance (tempoyak uses durian, for example). Ask residents for general directions to shops serving local dishes.",
          ],
        },
        {
          heading: "Trying tips",
          bullets: [
            "Know the main ingredient.",
            "Ask residents for directions.",
            "Check cleanliness.",
          ],
          callout: "This guide does not review shops; use categories to learn Jambi cuisine.",
        },
      ],
      faqs: [
        { q: "What is traditional Jambi food?", a: "Includes tempoyak, gulai ikan patin, ikan baung, and pendap—distinct local flavours." },
        { q: "Where to try near the monument?", a: "Shops around the city centre serve home cooking. The guide points to no single address." },
        { q: "Is it halal?", a: "Local food is generally halal; the guide does not verify each one. Confirm on site." },
        { q: "Is this guide affiliated?", a: "No. Independent non-profit guide with no endorsement." },
      ],
    },
  },

  // C16 — Jajanan pasar & street food
  "jajanan-pasar-street-food": {
    id: {
      metaTitle: "Jajanan Pasar & Street Food Dekat Tugu Keris Jambi",
      metaDescription: "Jajanan pasar dan street food di sekitar Tugu Keris Siginjai: kategori camilan, pasar tradisional, dan arah umum. Panduan nirlaba tanpa rekomendasi merek.",
      h1: "Jajanan Pasar & Street Food di Sekitar Tugu",
      lead: "Camilan dan street food menjadi bagian dari ritual harian warga Jambi. Panduan ini merangkum kategorinya dan arah ke pasar tradisional tanpa menyebut merek.",
      facts: [
        { label: "JENIS", value: "Camilan" },
        { label: "LOKASI", value: "Pasar & jalan" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Camilan khas harian",
          paragraphs: [
            "Jajanan pasar mencakup aneka gorengan, kue tradisional, dan minuman ringan yang dijual di pasar serta tepi jalan. Ini bagian dari rutinitas warga, bukan hanya untuk wisatawan.",
            "Panduan menyebutkan kategori. Untuk mencicipi, datangi pasar tradisional di pusat kota yang menjual jajanan segar.",
          ],
        },
        {
          heading: "Menjelajah street food",
          paragraphs: [
            "Kawasan Kota Baru memiliki penjual makanan ringan di tepi jalan pada jam tertentu. Waktu terbaik adalah pagi dan sore menjelang senja.",
          ],
        },
        {
          heading: "Tips aman mencoba",
          bullets: [
            "Pilih yang masih hangat & segar.",
            "Cek kebersihan.",
            "Siapkan uang pas.",
          ],
          callout: "Panduan tidak mengulas penjual; gunakan kategori sebagai panduan mengenal jajanan lokal.",
        },
      ],
      faqs: [
        { q: "Apa jajanan khas di sini?", a: "Gorengan, kue tradisional, dan minuman ringan di pasar serta tepi jalan." },
        { q: "Di mana pasar tradisional?", a: "Pasar di pusat kota menyediakan jajanan. Panduan tidak menunjuk satu nama pasar wajib." },
        { q: "Aman untuk dicoba?", a: "Umumnya aman; pilih yang hangat dan bersih. Jaga kebersihan pribadi." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement penjual." },
      ],
    },
    en: {
      metaTitle: "Market Snacks & Street Food Near Keris Siginjai Monument Jambi",
      metaDescription: "Market snacks and street food around Keris Siginjai Monument: snack categories, traditional markets, and general directions. Non-profit guide, no brand endorsement.",
      h1: "Market Snacks & Street Food Around the Monument",
      lead: "Snacks and street food are part of Jambi residents' daily rhythm. This guide summarises the categories and directions to traditional markets without naming brands.",
      facts: [
        { label: "TYPE", value: "Snacks" },
        { label: "LOCATION", value: "Markets & streets" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Everyday local snacks",
          paragraphs: [
            "Market snacks include various fried foods, traditional cakes, and light drinks sold at markets and roadside. They are part of residents' routine, not only for tourists.",
            "The guide names categories. To taste them, visit traditional markets in the city centre selling fresh snacks.",
          ],
        },
        {
          heading: "Exploring street food",
          paragraphs: [
            "Kota Baru has light-food vendors roadside at certain hours. Best times are morning and late afternoon toward dusk.",
          ],
        },
        {
          heading: "Safe trying tips",
          bullets: [
            "Pick warm & fresh items.",
            "Check cleanliness.",
            "Carry small change.",
          ],
          callout: "This guide does not review vendors; use categories to learn local snacks.",
        },
      ],
      faqs: [
        { q: "What local snacks are here?", a: "Fried foods, traditional cakes, and light drinks at markets and roadside." },
        { q: "Where is the traditional market?", a: "Markets in the city centre offer snacks. The guide points to no required market name." },
        { q: "Safe to try?", a: "Generally safe; pick warm and clean items. Keep personal hygiene." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no vendor endorsement." },
      ],
    },
  },

  // C17 — Sarapan pagi
  "sarapan-pagi-dekat-tugu": {
    id: {
      metaTitle: "Tempat Sarapan Pagi Dekat Tugu Keris Siginjai Jambi",
      metaDescription: "Sarapan pagi di sekitar Tugu Keris Siginjai, Kota Baru: kategori sarapan Jambi seperti nasi gemuk, soto, dan arah umum. Panduan nirlaba tanpa merek.",
      h1: "Sarapan Pagi di Sekitar Tugu Keris",
      lead: "Pagi hari adalah waktu tepat menikmati sarapan khas sebelum monumen ramai. Panduan ini merangkum kategori sarapan Jambi dan arah umum tanpa menyebut warung tertentu.",
      facts: [
        { label: "WAKTU", value: "Pagi" },
        { label: "RAGAM", value: "Sarapan lokal" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Sarapan khas Jambi",
          paragraphs: [
            "Sarapan di Jambi antara lain nasi gemuk (nasi matang santan dengan lauk), soto, dan roti pendamping. Hidangan ini mudah ditemukan di pagi hari di kedai sekitar pusat kota.",
            "Panduan menyebutkan kategori. Gunakan 'warung sarapan' di sekitar Kota Baru sebagai orientasi pagi Anda.",
          ],
        },
        {
          heading: "Menyusun pagi yang nyaman",
          paragraphs: [
            "Datang lebih awal agar tempat duduk tersedia dan monumen belum ramai. Gabungkan sarapan dengan jalan kaki singkat ke monumen.",
          ],
        },
        {
          heading: "Tips sarapan",
          bullets: [
            "Datang pagi-pagi.",
            "Cocokkan dengan selera.",
            "Cek harga.",
          ],
          callout: "Panduan tidak merekomendasikan warung; gunakan kategori sebagai arah sarapan.",
        },
      ],
      faqs: [
        { q: "Apa sarapan khas Jambi?", a: "Nasi gemuk, soto, dan roti pendamping—mudah ditemukan pagi hari." },
        { q: "Di mana sarapan dekat monumen?", a: "Kedai sarapan di sekitar Kota Baru dan pusat kota. Panduan tidak menunjuk satu alamat." },
        { q: "Jam berapa terbaik?", a: "Pagi lebih awal agar nyaman dan monumen sepi. Jam bervariasi; konfirmasikan di lokasi." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Breakfast Spots Near Keris Siginjai Monument Jambi",
      metaDescription: "Morning breakfast around Keris Siginjai Monument, Kota Baru: Jambi breakfast categories like nasi gemuk, soto, and general directions. Non-profit guide, no brands.",
      h1: "Breakfast Around the Keris Monument",
      lead: "Morning is the right time for local breakfast before the monument gets busy. This guide summarises Jambi breakfast categories and general directions without naming specific warung.",
      facts: [
        { label: "TIME", value: "Morning" },
        { label: "VARIETY", value: "Local breakfast" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Jambi breakfast",
          paragraphs: [
            "Jambi breakfasts include nasi gemuk (coconut rice with sides), soto, and accompanying bread. These are easy to find in the morning at shops around the city centre.",
            "The guide names categories. Use 'breakfast warung' around Kota Baru as your morning orientation.",
          ],
        },
        {
          heading: "A comfortable morning",
          paragraphs: [
            "Come earlier so seating is available and the monument is not yet crowded. Pair breakfast with a short walk to the monument.",
          ],
        },
        {
          heading: "Breakfast tips",
          bullets: [
            "Come early.",
            "Match your taste.",
            "Check prices.",
          ],
          callout: "This guide recommends no warung; use categories as breakfast direction.",
        },
      ],
      faqs: [
        { q: "What is Jambi breakfast?", a: "Nasi gemuk, soto, and accompanying bread—easy to find in the morning." },
        { q: "Where to breakfast near the monument?", a: "Breakfast shops around Kota Baru and the city centre. The guide points to no single address." },
        { q: "Best time?", a: "Earlier morning for comfort and an empty monument. Hours vary; confirm on site." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no endorsement." },
      ],
    },
  },

  // C18 — Cafe nyaman bersantai
  "cafe-nyaman-bersantai": {
    id: {
      metaTitle: "Cafe Nyaman untuk Bersantai Dekat Tugu Keris Jambi",
      metaDescription: "Cafe nyaman bersantai di sekitar Tugu Keris Siginjai, Kota Baru: kategori cafe, suasana, dan waktu. Panduan nirlaba tanpa rekomendasi merek.",
      h1: "Cafe Nyaman untuk Bersantai",
      lead: "Setelah mengunjungi monumen, cafe di Kota Baru menjadi tempat menarik napas sejenak. Panduan ini memaparkan kategori cafe dan suasana umum tanpa menyebut nama.",
      facts: [
        { label: "SUASANA", value: "Bersantai" },
        { label: "JENIS", value: "Cafe" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Cafe sebagai jeda perjalanan",
          paragraphs: [
            "Cafe di koridor Kota Baru cocok untuk istirahat sejenak, membaca, atau mengobrol setelah berjalan kaki. Pilihan berkisar dari kedai sederhana hingga cafe dengan ruang lebih luas.",
            "Panduan tidak menyebut nama cafe. Gunakan kategori 'cafe' di sekitar Paal Lima sebagai panduan.",
          ],
        },
        {
          heading: "Memilih waktu santai",
          paragraphs: [
            "Sore hingga malam biasanya lebih asyik untuk bersantai. Pagi hari cocok jika ingin suasana lebih tenang sebelum monumen ramai.",
          ],
        },
        {
          heading: "Tips mampir",
          bullets: [
            "Sesuaikan suasana.",
            "Cek harga.",
            "Gunakan kategori sebagai arah.",
          ],
          callout: "Panduan tidak memuat ulasan cafe; gunakan kategori sebagai orientasi.",
        },
      ],
      faqs: [
        { q: "Di mana cafe nyaman di sini?", a: "Menyebar di koridor Kota Baru sekitar Paal Lima. Gunakan kategori 'cafe' sebagai arah." },
        { q: "Kapan paling nyaman?", a: "Sore hingga malam untuk suasana hidup; pagi untuk ketenangan." },
        { q: "Apakah cocok untuk kerja?", a: "Beberapa cafe menyediakan ruang duduk lebih lama. Konfirmasikan fasilitas di tempat." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Cozy Cafés to Relax Near Keris Siginjai Monument Jambi",
      metaDescription: "Cozy relaxation cafés around Keris Siginjai Monument, Kota Baru: café categories, atmosphere, and timing. Non-profit guide, no brand endorsement.",
      h1: "Cozy Cafés to Relax",
      lead: "After visiting the monument, cafés in Kota Baru are a place to pause. This guide outlines café categories and general atmosphere without naming any.",
      facts: [
        { label: "MOOD", value: "Relaxing" },
        { label: "TYPE", value: "Café" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Cafés as a travel pause",
          paragraphs: [
            "Cafés on Kota Baru corridors suit a short rest, reading, or chatting after walking. Choices range from simple shops to cafés with more space.",
            "The guide names no café. Use the 'café' category around Paal Lima as guidance.",
          ],
        },
        {
          heading: "Choosing a relaxed time",
          paragraphs: [
            "Late afternoon to night is usually livelier for relaxing. Morning suits a calmer mood before the monument gets busy.",
          ],
        },
        {
          heading: "Drop-in tips",
          bullets: [
            "Match the mood.",
            "Check prices.",
            "Use categories as direction.",
          ],
          callout: "This guide has no café reviews; use categories as orientation.",
        },
      ],
      faqs: [
        { q: "Where are cozy cafés here?", a: "Spread across Kota Baru corridors around Paal Lima. Use the 'café' category as direction." },
        { q: "When is most comfortable?", a: "Late afternoon to night for lively mood; morning for calm." },
        { q: "Good for working?", a: "Some cafés offer longer seating. Confirm facilities on site." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no endorsement." },
      ],
    },
  },

  // C19 — Kuliner halal ramah keluarga
  "kuliner-halal-ramah-keluarga": {
    id: {
      metaTitle: "Kuliner Halal Ramah Keluarga Dekat Tugu Keris Jambi",
      metaDescription: "Pilihan kuliner halal ramah keluarga di sekitar Tugu Keris Siginjai: kategori makanan, tips memilih, dan arah umum. Panduan nirlaba tanpa rekomendasi merek.",
      h1: "Kuliner Halal Ramah Keluarga",
      lead: "Berkeluarga mencari makan di Kota Baru lebih mudah dengan menyesuaikan kategori halal dan tempat duduk nyaman. Panduan ini merangkum pilihannya tanpa menyebut merek.",
      facts: [
        { label: "COCOK", value: "Keluarga" },
        { label: "JENIS", value: "Halal" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Makanan halal sebagai standar",
          paragraphs: [
            "Masakan setempat umumnya halal, sehingga keluarga dapat mencari hidangan dengan tenang. Pilih kedai dengan suasana duduk nyaman dan menu jelas.",
            "Panduan tidak memverifikasi satu per satu. Gunakan kategori usaha di sekitar pusat kota sebagai orientasi.",
          ],
        },
        {
          heading: "Menyesuaikan dengan anak",
          paragraphs: [
            "Pilih hidangan tidak terlalu pedas dan tempat yang bersih. Gabungkan makan dengan kunjungan singkat ke monumen di pagi hari.",
          ],
        },
        {
          heading: "Tips memilih",
          bullets: [
            "Pastikan menu jelas.",
            "Pilih tempat bersih & nyaman.",
            "Tanya warga arah umum.",
          ],
          callout: "Panduan tidak mengulas kedai; gunakan kategori sebagai panduan keluarga.",
        },
      ],
      faqs: [
        { q: "Apakah makanan di sini halal?", a: "Masakan setempat umumnya halal. Panduan tidak memverifikasi satu per satu; konfirmasikan di tempat." },
        { q: "Cocok untuk anak?", a: "Ya, pilih hidangan tidak pedas dan tempat nyaman. Monumen juga ramah kunjungan singkat keluarga." },
        { q: "Di mana mencari dekat monumen?", a: "Kedai di sekitar Kota Baru dan pusat kota. Panduan tidak menunjuk satu alamat." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Halal Family-Friendly Food Near Keris Siginjai Monument Jambi",
      metaDescription: "Halal family-friendly food choices around Keris Siginjai Monument: food categories, choosing tips, and general directions. Non-profit guide, no brand endorsement.",
      h1: "Halal Family-Friendly Food",
      lead: "Eating out with family in Kota Baru is easier by matching halal categories and comfortable seating. This guide summarises the choices without naming brands.",
      facts: [
        { label: "FITS", value: "Family" },
        { label: "TYPE", value: "Halal" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Halal food as the standard",
          paragraphs: [
            "Local food is generally halal, so families can dine with ease. Choose shops with comfortable seating and clear menus.",
            "The guide does not verify each one. Use the venue types around the city centre as orientation.",
          ],
        },
        {
          heading: "Adapting for children",
          paragraphs: [
            "Pick not-too-spicy dishes and clean places. Pair eating with a short morning monument visit.",
          ],
        },
        {
          heading: "Choosing tips",
          bullets: [
            "Ensure clear menus.",
            "Pick clean & comfortable places.",
            "Ask residents for directions.",
          ],
          callout: "This guide does not review shops; use categories as family guidance.",
        },
      ],
      faqs: [
        { q: "Is the food here halal?", a: "Local food is generally halal. The guide does not verify each; confirm on site." },
        { q: "Good for children?", a: "Yes, pick mild dishes and comfortable places. The monument also suits short family visits." },
        { q: "Where to find near the monument?", a: "Shops around Kota Baru and city centre. The guide points to no single address." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no endorsement." },
      ],
    },
  },

  // C20 — Nongkrong anak muda
  "nongkrong-anak-muda": {
    id: {
      metaTitle: "Tempat Nongkrong Anak Muda Dekat Tugu Keris Jambi",
      metaDescription: "Tempat nongkrong anak muda di sekitar Tugu Keris Siginjai: cafe, kedai kopi, dan suasana malam. Panduan nirlaba tanpa rekomendasi merek.",
      h1: "Tempat Nongkrong Anak Muda",
      lead: "Anak muda Jambi menjadikan kedai kopi dan cafe di Kota Baru sebagai ruang nongkrong. Panduan ini memaparkan kategorinya dan suasana umum tanpa menyebut nama.",
      facts: [
        { label: "SUASANA", value: "Nongkrong" },
        { label: "JENIS", value: "Kopi & cafe" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Ruang nongkrong kota",
          paragraphs: [
            "Kedai kopi dan cafe di koridor Kota Baru menjadi tempat ngopi, mengerjakan tugas, atau sekadar mengobrol. Suasana lebih hidup pada sore dan malam.",
            "Panduan tidak menyebut nama tempat. Gunakan kategori 'cafe' atau 'warung kopi' di sekitar Paal Lima sebagai arah.",
          ],
        },
        {
          heading: "Memilih spot nongkrong",
          paragraphs: [
            "Sesuaikan dengan budget dan suasana: warung kopi untuk santai hemat, cafe untuk waktu lebih panjang. Waktu ramai biasanya akhir pekan.",
          ],
        },
        {
          heading: "Tips nongkrong",
          bullets: [
            "Cocokkan budget.",
            "Cek harga minuman.",
            "Gunakan kategori sebagai arah.",
          ],
          callout: "Panduan tidak memuat ulasan; gunakan kategori sebagai orientasi anak muda.",
        },
      ],
      faqs: [
        { q: "Di mana anak muda nongkrong?", a: "Kedai kopi dan cafe di koridor Kota Baru sekitar Paal Lima. Gunakan kategori sebagai arah." },
        { q: "Kapan ramai?", a: "Sore hingga malam, terutama akhir pekan. Jam bervariasi; konfirmasikan di lokasi." },
        { q: "Apakah ada wifi umum?", a: "Beberapa cafe menyediakan koneksi. Konfirmasikan fasilitas di tempat." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Youth Hangout Spots Near Keris Siginjai Monument Jambi",
      metaDescription: "Youth hangout spots around Keris Siginjai Monument: cafés, coffee shops, and night atmosphere. Non-profit guide, no brand endorsement.",
      h1: "Youth Hangout Spots",
      lead: "Jambi youth use coffee shops and cafés in Kota Baru as hangout spaces. This guide outlines the categories and general atmosphere without naming places.",
      facts: [
        { label: "MOOD", value: "Hangout" },
        { label: "TYPE", value: "Coffee & cafés" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "City hangout spaces",
          paragraphs: [
            "Coffee shops and cafés on Kota Baru corridors are places to sip coffee, do tasks, or just chat. The mood is livelier in late afternoon and night.",
            "The guide names no places. Use the 'café' or 'warung kopi' category around Paal Lima as direction.",
          ],
        },
        {
          heading: "Choosing a hangout spot",
          paragraphs: [
            "Match budget and mood: a warung kopi for cheap relaxation, a café for a longer stay. Busy times are usually weekends.",
          ],
        },
        {
          heading: "Hangout tips",
          bullets: [
            "Match budget.",
            "Check drink prices.",
            "Use categories as direction.",
          ],
          callout: "This guide has no reviews; use categories as youth orientation.",
        },
      ],
      faqs: [
        { q: "Where do youth hang out?", a: "Coffee shops and cafés on Kota Baru corridors around Paal Lima. Use categories as direction." },
        { q: "When is it busy?", a: "Late afternoon to night, especially weekends. Hours vary; confirm on site." },
        { q: "Is there public wifi?", a: "Some cafés offer connection. Confirm facilities on site." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no endorsement." },
      ],
    },
  },

  // C21 — Kuliner murah meriah
  "kuliner-murah-meriah": {
    id: {
      metaTitle: "Kuliner Murah Meriah Dekat Tugu Keris Siginjai Jambi",
      metaDescription: "Kuliner murah meriah di sekitar Tugu Keris Siginjai: kategori makanan terjangkau, tips hemat, dan arah umum. Panduan nirlaba tanpa rekomendasi merek.",
      h1: "Kuliner Murah Meriah di Sekitar Tugu",
      lead: "Menikmati makan khas Jambi tak harus mahal. Panduan ini merangkum kategori terjangkau di sekitar monumen dan tips hemat tanpa menyebut merek.",
      facts: [
        { label: "HARGA", value: "Terjangkau" },
        { label: "RAGAM", value: "Makanan harian" },
        { label: "KAWASAN", value: "Kota Baru" },
        { label: "STATUS", value: "Nirlaba" },
      ],
      sections: [
        {
          heading: "Pilihan hemat sehari-hari",
          paragraphs: [
            "Warung sederhana, jajanan pasar, dan kedai kopi biasa menawarkan makanan dengan harga wajar. Ini bagian dari rutinitas warga, bukan hanya untuk wisatawan.",
            "Panduan menyebutkan kategori. Gunakan 'warung' atau 'jajanan pasar' di sekitar pusat kota sebagai orientasi hemat Anda.",
          ],
        },
        {
          heading: "Tips makan hemat",
          paragraphs: [
            "Pilih hidangan pokok sederhana, hindari tempat dengan markup wisatawan, dan tanya warga untuk arah umum. Pagi hari sering lebih murah.",
          ],
        },
        {
          heading: "Menikmati tanpa boncos",
          bullets: [
            "Pilih warung bukan tempat mewah.",
            "Cek harga dulu.",
            "Gunakan kategori sebagai arah.",
          ],
          callout: "Panduan tidak mengulas harga kedai; gunakan kategori sebagai panduan hemat.",
        },
      ],
      faqs: [
        { q: "Di mana makan murah dekat sini?", a: "Warung dan jajanan pasar di sekitar pusat kota. Panduan tidak menunjuk satu alamat." },
        { q: "Apakah pagi lebih murah?", a: "Sering ya untuk hidangan pokok sederhana. Harga bervariasi; konfirmasikan di lokasi." },
        { q: "Cara hindari harga wisatawan?", a: "Pilih warung lokal dan tanya warga arah umum; hindari tempat dengan markup jelas." },
        { q: "Apakah panduan berafiliasi?", a: "Tidak. Panduan nirlaba tanpa endorsement." },
      ],
    },
    en: {
      metaTitle: "Affordable Food Near Keris Siginjai Monument Jambi",
      metaDescription: "Affordable food around Keris Siginjai Monument: budget meal categories, saving tips, and general directions. Non-profit guide, no brand endorsement.",
      h1: "Affordable Food Around the Monument",
      lead: "Enjoying Jambi food need not be expensive. This guide summarises budget categories around the monument and saving tips without naming brands.",
      facts: [
        { label: "PRICE", value: "Affordable" },
        { label: "VARIETY", value: "Daily food" },
        { label: "AREA", value: "Kota Baru" },
        { label: "STATUS", value: "Non-profit" },
      ],
      sections: [
        {
          heading: "Everyday budget choices",
          paragraphs: [
            "Simple warung, market snacks, and ordinary coffee shops offer fairly priced food. This is part of residents' routine, not only for tourists.",
            "The guide names categories. Use 'warung' or 'market snacks' around the city centre as your budget orientation.",
          ],
        },
        {
          heading: "Saving tips",
          paragraphs: [
            "Pick simple staple dishes, avoid tourist-markup places, and ask residents for general directions. Mornings are often cheaper.",
          ],
        },
        {
          heading: "Enjoy without overspending",
          bullets: [
            "Pick warung not fancy places.",
            "Check price first.",
            "Use categories as direction.",
          ],
          callout: "This guide reviews no shop prices; use categories as budget guidance.",
        },
      ],
      faqs: [
        { q: "Where is cheap food near here?", a: "Warung and market snacks around the city centre. The guide points to no single address." },
        { q: "Is morning cheaper?", a: "Often yes for simple staples. Prices vary; confirm on site." },
        { q: "How to avoid tourist prices?", a: "Pick local warung and ask residents for directions; avoid clearly marked-up places." },
        { q: "Is this guide affiliated?", a: "No. Non-profit guide with no endorsement." },
      ],
    },
  },
};

const UPDATED_ID = "Oktober 2026";
const UPDATED_EN = "October 2026";

// Daftar lengkap 30+ slug. Batch B (kunjungan) sudah ready; sisanya draft yang diisi bertahap.
export const topics: Topic[] = [
  // A — Sejarah & Budaya (draft)
  { slug: "sejarah-keris-siginjai", group: "sejarah", updated: UPDATED_ID, related: ["tugu-keris-landmark-kota-baru", "arsitektur-tugu-keris-jambi", "tradisi-keris-budaya-melayu"], ready: true, id: batchAC["sejarah-keris-siginjai"].id, en: batchAC["sejarah-keris-siginjai"].en },
  { slug: "tugu-keris-landmark-kota-baru", group: "sejarah", updated: UPDATED_ID, related: ["sejarah-keris-siginjai", "arsitektur-tugu-keris-jambi", "pahlawan-warisan-budaya-jambi"], ready: true, id: batchAC["tugu-keris-landmark-kota-baru"].id, en: batchAC["tugu-keris-landmark-kota-baru"].en },
  { slug: "arsitektur-tugu-keris-jambi", group: "sejarah", updated: UPDATED_ID, related: ["sejarah-keris-siginjai", "tugu-keris-landmark-kota-baru", "tradisi-keris-budaya-melayu"], ready: true, id: batchAC["arsitektur-tugu-keris-jambi"].id, en: batchAC["arsitektur-tugu-keris-jambi"].en },
  { slug: "pahlawan-warisan-budaya-jambi", group: "sejarah", updated: UPDATED_ID, related: ["sejarah-keris-siginjai", "tradisi-keris-budaya-melayu", "tugu-keris-landmark-kota-baru"], ready: true, id: batchAC["pahlawan-warisan-budaya-jambi"].id, en: batchAC["pahlawan-warisan-budaya-jambi"].en },
  { slug: "tradisi-keris-budaya-melayu", group: "sejarah", updated: UPDATED_ID, related: ["sejarah-keris-siginjai", "pahlawan-warisan-budaya-jambi", "arsitektur-tugu-keris-jambi"], ready: true, id: batchAC["tradisi-keris-budaya-melayu"].id, en: batchAC["tradisi-keris-budaya-melayu"].en },

  // B — Kunjungan & Akses (ready)
  { slug: "transportasi-bandara-sultan-thaha", group: "kunjungan", updated: UPDATED_ID, related: ["angkutan-umum-taksi-online", "parkir-akses-jalan-paal-lima", "waktu-terbaik-kunjungi"], ready: true, id: batchB["transportasi-bandara-sultan-thaha"].id, en: batchB["transportasi-bandara-sultan-thaha"].en },
  { slug: "angkutan-umum-taksi-online", group: "kunjungan", updated: UPDATED_ID, related: ["transportasi-bandara-sultan-thaha", "parkir-akses-jalan-paal-lima", "waktu-terbaik-kunjungi"], ready: true, id: batchB["angkutan-umum-taksi-online"].id, en: batchB["angkutan-umum-taksi-online"].en },
  { slug: "parkir-akses-jalan-paal-lima", group: "kunjungan", updated: UPDATED_ID, related: ["angkutan-umum-taksi-online", "transportasi-bandara-sultan-thaha", "tips-wisata-aman"], ready: true, id: batchB["parkir-akses-jalan-paal-lima"].id, en: batchB["parkir-akses-jalan-paal-lima"].en },
  { slug: "waktu-terbaik-kunjungi", group: "kunjungan", updated: UPDATED_ID, related: ["tips-wisata-aman", "transportasi-bandara-sultan-thaha", "panduan-keluarga-anak"], ready: true, id: batchB["waktu-terbaik-kunjungi"].id, en: batchB["waktu-terbaik-kunjungi"].en },
  { slug: "panduan-keluarga-anak", group: "kunjungan", updated: UPDATED_ID, related: ["tips-wisata-aman", "waktu-terbaik-kunjungi", "walking-tour-kota-baru"], ready: true, id: batchB["panduan-keluarga-anak"].id, en: batchB["panduan-keluarga-anak"].en },
  { slug: "tips-wisata-aman", group: "kunjungan", updated: UPDATED_ID, related: ["panduan-keluarga-anak", "parkir-akses-jalan-paal-lima", "waktu-terbaik-kunjungi"], ready: true, id: batchB["tips-wisata-aman"].id, en: batchB["tips-wisata-aman"].en },

  // C — Kuliner & Kafe (draft)
  { slug: "kuliner-legendaris-dekat-tugu", group: "kuliner", updated: UPDATED_ID, related: ["makan-malam-kuliner-malam", "kuliner-khas-jambi-tradisional"], ready: true, id: batchAC["kuliner-legendaris-dekat-tugu"].id, en: batchAC["kuliner-legendaris-dekat-tugu"].en },
  { slug: "makan-malam-kuliner-malam", group: "kuliner", updated: UPDATED_ID, related: ["kuliner-legendaris-dekat-tugu", "cafe-nyaman-bersantai"], ready: true, id: batchAC["makan-malam-kuliner-malam"].id, en: batchAC["makan-malam-kuliner-malam"].en },
  { slug: "warung-kopi-cafe-paal-lima", group: "kuliner", updated: UPDATED_ID, related: ["cafe-nyaman-bersantai", "nongkrong-anak-muda"], ready: true, id: batchAC["warung-kopi-cafe-paal-lima"].id, en: batchAC["warung-kopi-cafe-paal-lima"].en },
  { slug: "kuliner-khas-jambi-tradisional", group: "kuliner", updated: UPDATED_ID, related: ["kuliner-legendaris-dekat-tugu", "jajanan-pasar-street-food"], ready: true, id: batchAC["kuliner-khas-jambi-tradisional"].id, en: batchAC["kuliner-khas-jambi-tradisional"].en },
  { slug: "jajanan-pasar-street-food", group: "kuliner", updated: UPDATED_ID, related: ["kuliner-khas-jambi-tradisional", "kuliner-murah-meriah"], ready: true, id: batchAC["jajanan-pasar-street-food"].id, en: batchAC["jajanan-pasar-street-food"].en },
  { slug: "sarapan-pagi-dekat-tugu", group: "kuliner", updated: UPDATED_ID, related: ["kuliner-khas-jambi-tradisional", "warung-kopi-cafe-paal-lima"], ready: true, id: batchAC["sarapan-pagi-dekat-tugu"].id, en: batchAC["sarapan-pagi-dekat-tugu"].en },
  { slug: "cafe-nyaman-bersantai", group: "kuliner", updated: UPDATED_ID, related: ["warung-kopi-cafe-paal-lima", "makan-malam-kuliner-malam"], ready: true, id: batchAC["cafe-nyaman-bersantai"].id, en: batchAC["cafe-nyaman-bersantai"].en },
  { slug: "kuliner-halal-ramah-keluarga", group: "kuliner", updated: UPDATED_ID, related: ["panduan-keluarga-anak", "kuliner-legendaris-dekat-tugu"], ready: true, id: batchAC["kuliner-halal-ramah-keluarga"].id, en: batchAC["kuliner-halal-ramah-keluarga"].en },
  { slug: "nongkrong-anak-muda", group: "kuliner", updated: UPDATED_ID, related: ["warung-kopi-cafe-paal-lima", "aktivitas-malam-hari"], ready: true, id: batchAC["nongkrong-anak-muda"].id, en: batchAC["nongkrong-anak-muda"].en },
  { slug: "kuliner-murah-meriah", group: "kuliner", updated: UPDATED_ID, related: ["jajanan-pasar-street-food", "kuliner-khas-jambi-tradisional"], ready: true, id: batchAC["kuliner-murah-meriah"].id, en: batchAC["kuliner-murah-meriah"].en },

  // D — Sekitar & Itinerari (draft)
  { slug: "destinasi-wisata-terdekat", group: "sekitar", updated: UPDATED_ID, related: ["itinerary-1-hari", "walking-tour-kota-baru"], ready: false },
  { slug: "itinerary-1-hari", group: "sekitar", updated: UPDATED_ID, related: ["itinerary-setengah-hari", "destinasi-wisata-terdekat"], ready: false },
  { slug: "itinerary-setengah-hari", group: "sekitar", updated: UPDATED_ID, related: ["itinerary-1-hari", "walking-tour-kota-baru"], ready: false },
  { slug: "mall-pasar-tradisional", group: "sekitar", updated: UPDATED_ID, related: ["kuliner-legendaris-dekat-tugu", "destinasi-wisata-terdekat"], ready: false },
  { slug: "aktivitas-malam-hari", group: "sekitar", updated: UPDATED_ID, related: ["makan-malam-kuliner-malam", "nongkrong-anak-muda"], ready: false },
  { slug: "spot-foto-instagramable", group: "sekitar", updated: UPDATED_ID, related: ["walking-tour-kota-baru", "waktu-terbaik-kunjungi"], ready: false },
  { slug: "wisata-saat-hujan", group: "sekitar", updated: UPDATED_ID, related: ["tips-wisata-aman", "mall-pasar-tradisional"], ready: false },
  { slug: "taman-kota-ruang-publik", group: "sekitar", updated: UPDATED_ID, related: ["walking-tour-kota-baru", "destinasi-wisata-terdekat"], ready: false },
  { slug: "walking-tour-kota-baru", group: "sekitar", updated: UPDATED_ID, related: ["taman-kota-ruang-publik", "destinasi-wisata-terdekat"], ready: false },
];

export function getReadyTopics(): Topic[] {
  return topics.filter((t) => t.ready);
}

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug && t.ready);
}

export function topicSlugs(): string[] {
  return getReadyTopics().map((t) => t.slug);
}

// Label untuk tautan terkait: judul h1 dalam bahasa halaman.
export function labelForLink(slug: string, lang: "id" | "en"): string | undefined {
  const t = topics.find((x) => x.slug === slug);
  if (!t || !t.ready) return undefined;
  const c = t[lang];
  return c?.h1;
}
