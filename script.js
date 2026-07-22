/* ==========================================================================
   SEL HEWAN — WEBSITE EDUKASI INTERAKTIF
   script.js
   -----------------------------------------------------------------------
   Daftar isi:
   1.  Data Organel (sumber tunggal seluruh konten materi)
   2.  Data Referensi
   3.  Ikon SVG kecil untuk setiap organel
   4.  State & variabel global
   ========================================================================== */

/* ---------- 1. DATA ORGANEL ---------- */
/* Setiap objek = satu organel. Semua tampilan (panel detail, kartu daftar,
   rail, pencarian, quiz) dirender secara dinamis dari array ini, supaya
   konten mudah diubah tanpa menyentuh HTML. */
const organelleData = [
  {
    id: "membran-sel",
    nama: "Membran Sel",
    namaLain: "Membran Plasma · Selaput Sel",
    warna: "#22d3ee",
    pengertian: [
      "Membran sel adalah lapisan tipis yang membungkus seluruh bagian sel, menjadi batas antara isi sel dengan lingkungan di luarnya. Meskipun sangat tipis, hanya sekitar 5 sampai 10 nanometer, membran ini memegang peran penting karena menjaga seluruh isi sel tetap berada di tempatnya dan tidak tercampur dengan dunia luar.",
      "Secara struktur, membran sel tersusun dari dua lapisan molekul lemak yang disebut fosfolipid bilayer, dengan berbagai protein yang menempel atau menembus lapisan tersebut. Susunan ini sering digambarkan sebagai 'mozaik cair' karena molekul-molekul penyusunnya dapat bergeser dan bergerak seperti cairan, meskipun tetap membentuk lapisan yang kokoh dan stabil.",
      "Sifat paling khas dari membran sel adalah selektif permeabel, artinya membran ini memilih-milih zat mana saja yang boleh lewat. Molekul kecil seperti oksigen dan karbon dioksida bisa menembus dengan mudah, sedangkan molekul besar seperti glukosa membutuhkan bantuan protein transpor khusus yang bekerja seperti pintu bergerbang.",
      "Pada sel hewan, membran sel terletak paling luar karena sel hewan tidak memiliki dinding sel seperti sel tumbuhan. Posisi ini membuat membran sel menjadi bagian pertama yang berhubungan langsung dengan lingkungan sekitar, termasuk menerima berbagai sinyal kimia dari sel-sel tetangga di sekitarnya."
    ],
    fungsi: {
      umum: "Membran sel berfungsi melindungi seluruh isi sel dari kerusakan sekaligus menjaga bentuknya, mengatur dengan ketat zat apa saja yang boleh masuk dan keluar sel, serta bertindak sebagai tempat menempelnya reseptor untuk menerima sinyal dari sel lain.",
      contoh: "Bayangkan saat kamu minum air putih: air yang kamu minum akan diserap ke dalam sel-sel tubuhmu melalui proses yang diatur oleh membran sel, sementara zat sisa metabolisme dikeluarkan lewat jalur yang sama — persis seperti gerbang keluar-masuk yang selalu dijaga."
    },
    caraKerja: "Membran sel mengatur lalu lintas zat melalui beberapa cara: difusi (zat berpindah dari konsentrasi tinggi ke rendah tanpa energi), osmosis (perpindahan air melewati membran), dan transpor aktif (memindahkan zat berlawanan arah konsentrasi dengan bantuan energi). Untuk partikel besar, sel bahkan bisa 'menelan' zat lewat proses endositosis atau mengeluarkannya lewat eksositosis, di mana membran membungkus zat tersebut dalam gelembung kecil.",
    faktaMenarik: [
      "Ketebalan membran sel hanya sekitar 5–10 nanometer — sekitar 8.000 kali lebih tipis daripada selembar rambut manusia.",
      "Model 'mozaik cair' yang menjelaskan struktur membran sel pertama kali diperkenalkan oleh S.J. Singer dan Garth Nicolson pada tahun 1972.",
      "Membran sel memiliki penanda berupa glikoprotein di permukaannya, semacam 'kartu identitas' yang membuat sistem imun tubuh bisa mengenali mana sel tubuh sendiri dan mana yang asing.",
      "Molekul-molekul penyusun membran sel terus bergerak dan bergeser setiap saat, sehingga membran tidak pernah benar-benar diam meski sel sedang tidak aktif.",
      "Banyak virus, termasuk virus flu, memanfaatkan celah pada membran sel untuk menempel lalu menyusup masuk dan menginfeksi sel."
    ],
    analogi: { judul: "Pagar Rumah dengan Pos Satpam", teks: "Membran sel bagaikan pagar rumah lengkap dengan pos satpam di gerbangnya. Satpam ini memeriksa setiap orang dan barang yang ingin masuk atau keluar — hanya yang diizinkan yang boleh lewat, persis seperti membran sel yang selektif memilih zat mana yang boleh melintas." },
    ringkasan: [
      "Lapisan terluar yang membungkus sel hewan.",
      "Tersusun dari fosfolipid bilayer dan protein (model mozaik cair).",
      "Bersifat selektif permeabel — memilih zat yang boleh lewat.",
      "Melindungi sel dan mengatur transportasi zat keluar-masuk.",
      "Menjadi tempat reseptor untuk komunikasi antar sel."
    ],
    quiz: [
      { soal: "Apa fungsi utama membran sel?", pilihan: ["Menghasilkan energi untuk sel", "Mengatur zat yang keluar dan masuk sel", "Menyimpan materi genetik", "Mencerna partikel makanan"], jawaban: 1, penjelasan: "Membran sel bertugas menjaga bentuk sel sekaligus mengatur secara selektif zat apa saja yang boleh melewatinya." },
      { soal: "Membran sel tersusun utama dari dua komponen, yaitu...", pilihan: ["Selulosa dan air", "Fosfolipid dan protein", "Kitin dan lemak", "Karbohidrat dan DNA"], jawaban: 1, penjelasan: "Struktur membran sel dikenal sebagai model mozaik cair, tersusun dari lapisan ganda fosfolipid yang ditempeli berbagai protein." }
    ]
  },
  {
    id: "sitoplasma",
    nama: "Sitoplasma",
    namaLain: "Cairan Sel",
    warna: "#a8e8d3",
    pengertian: [
      "Sitoplasma adalah cairan kental yang mengisi hampir seluruh ruang di dalam sel, tepatnya di luar nukleus namun masih di dalam membran sel. Sitoplasma bukan sekadar cairan kosong yang mengisi ruang, melainkan medium hidup tempat berlangsungnya ribuan reaksi kimia penting bagi kelangsungan hidup sel.",
      "Komponen utama sitoplasma adalah sitosol, yaitu cairan dasar yang berisi air, garam mineral, dan berbagai molekul terlarut lainnya. Di dalam sitosol inilah organel-organel sel seperti mitokondria, ribosom, dan retikulum endoplasma 'mengambang' dan saling berhubungan satu sama lain.",
      "Di dalam sitoplasma juga terdapat sitoskeleton, yaitu jaringan serabut protein sangat halus yang berfungsi seperti rangka bagi sel. Sitoskeleton ini membantu sel mempertahankan bentuknya dan berperan penting dalam pergerakan organel dari satu titik ke titik lain di dalam sel.",
      "Pada sel hewan, sitoplasma tidak memiliki vakuola besar seperti pada sel tumbuhan, sehingga organel-organelnya cenderung tersebar lebih merata memenuhi ruang sel. Hal ini membuat sitoplasma sel hewan terlihat lebih padat berisi organel dibandingkan sel tumbuhan."
    ],
    fungsi: {
      umum: "Sitoplasma menjadi tempat berlangsungnya sebagian besar reaksi metabolisme sel, termasuk tahap awal pemecahan glukosa untuk menghasilkan energi (glikolisis), sekaligus berfungsi sebagai media transportasi zat antar organel dan menjaga kekokohan bentuk sel bersama sitoskeleton.",
      contoh: "Mirip seperti udara dan ruang di dalam sebuah pabrik yang menghubungkan setiap mesin produksi, sitoplasma menjadi 'ruang kerja' tempat semua organel beroperasi dan bahan-bahan diangkut dari satu bagian pabrik ke bagian lainnya."
    },
    caraKerja: "Di dalam sitoplasma, zat-zat bergerak melalui aliran yang disebut siklosis, membawa nutrisi dan produk metabolisme dari satu bagian sel ke bagian lain. Reaksi kimia seperti glikolisis berlangsung langsung di dalam sitosol, sementara sitoskeleton bekerja seperti rel yang memandu pergerakan vesikel dan organel menuju tujuannya masing-masing.",
    faktaMenarik: [
      "Sekitar 70 hingga 90 persen sitoplasma tersusun dari air.",
      "Pergerakan aliran di dalam sitoplasma memiliki nama khusus, yaitu siklosis.",
      "Sitoskeleton dalam sitoplasma tersusun dari tiga jenis serabut: mikrotubulus, mikrofilamen, dan filamen intermediet.",
      "Sitoplasma membantu sel mempertahankan tekanan internal agar sel tidak kempis atau kolaps.",
      "Tahap awal respirasi seluler (glikolisis) yang mengubah glukosa menjadi energi berlangsung di sitoplasma, sebelum dilanjutkan di mitokondria."
    ],
    analogi: { judul: "Ruang Kerja Pabrik", teks: "Sitoplasma seperti seluruh ruang di dalam pabrik tempat semua mesin (organel) berdiri dan bekerja. Tanpa ruang ini, mesin-mesin tidak akan punya tempat untuk beroperasi maupun jalur untuk memindahkan bahan baku dan hasil produksi." },
    ringkasan: [
      "Cairan yang mengisi ruang di dalam sel, di luar nukleus.",
      "Tersusun dari sitosol dan organel-organel sel.",
      "Mengandung sitoskeleton sebagai rangka sekaligus jalur transportasi.",
      "Tempat berlangsungnya reaksi metabolisme seperti glikolisis.",
      "Pada sel hewan, organel tersebar merata karena tidak ada vakuola besar."
    ],
    quiz: [
      { soal: "Cairan dasar penyusun sitoplasma yang berisi air dan zat terlarut disebut...", pilihan: ["Nukleoplasma", "Sitosol", "Plasmolisis", "Hemolimfa"], jawaban: 1, penjelasan: "Sitosol adalah cairan dasar tempat organel-organel sel mengambang di dalam sitoplasma." },
      { soal: "Proses awal pemecahan glukosa untuk energi yang terjadi di sitoplasma disebut...", pilihan: ["Fotosintesis", "Glikolisis", "Transkripsi", "Osmosis"], jawaban: 1, penjelasan: "Glikolisis adalah tahap awal respirasi seluler yang berlangsung di sitoplasma sebelum dilanjutkan ke mitokondria." }
    ]
  },
  {
    id: "nukleus",
    nama: "Nukleus",
    namaLain: "Inti Sel",
    warna: "#8b5cf6",
    pengertian: [
      "Nukleus atau inti sel adalah organel terbesar dalam sel hewan yang berfungsi sebagai pusat pengendali seluruh kegiatan sel. Di dalam nukleus tersimpan materi genetik berupa DNA yang membawa seluruh informasi yang dibutuhkan sel untuk tumbuh, bekerja, dan memperbanyak diri.",
      "Nukleus dibungkus oleh selubung inti (nuclear envelope), yaitu membran ganda yang memisahkan isi nukleus dari sitoplasma di sekitarnya. Pada selubung ini terdapat banyak lubang kecil yang disebut pori inti, berfungsi sebagai jalan keluar-masuknya molekul seperti RNA dan protein antara nukleus dan sitoplasma.",
      "Di dalam nukleus, DNA tidak berserakan begitu saja, melainkan terikat rapi bersama protein membentuk struktur yang disebut kromatin. Ketika sel akan membelah, kromatin akan memadat dan menggulung menjadi struktur yang lebih terlihat jelas, yang dikenal sebagai kromosom.",
      "Sebagian besar sel hewan hanya memiliki satu nukleus, meskipun ada pengecualian menarik: sel otot rangka manusia justru memiliki banyak nukleus dalam satu sel, sementara sel darah merah manusia yang sudah matang justru tidak memiliki nukleus sama sekali agar dapat mengangkut lebih banyak oksigen."
    ],
    fungsi: {
      umum: "Nukleus berfungsi sebagai pusat kendali sel yang mengatur seluruh aktivitas sel, menyimpan dan menjaga materi genetik (DNA), serta menjadi tempat berlangsungnya proses transkripsi yaitu penyalinan informasi genetik menjadi RNA yang nantinya digunakan untuk membuat protein.",
      contoh: "Layaknya kepala sekolah yang mengatur seluruh kegiatan di sekolah lewat instruksi dan keputusan, nukleus mengarahkan setiap organel dalam sel lewat 'perintah' berupa informasi genetik yang dikirim dalam bentuk RNA menuju ribosom untuk dijadikan protein."
    },
    caraKerja: "Nukleus bekerja dengan cara membaca informasi yang tersimpan dalam untaian DNA, lalu menyalinnya menjadi molekul RNA melalui proses yang disebut transkripsi. RNA tersebut kemudian keluar dari nukleus melalui pori inti menuju sitoplasma, untuk selanjutnya diterjemahkan oleh ribosom menjadi protein yang dibutuhkan sel.",
    faktaMenarik: [
      "Jika DNA di dalam satu nukleus manusia direntangkan lurus, panjangnya bisa mencapai sekitar dua meter.",
      "Selubung inti memiliki ribuan pori inti yang mengatur lalu lintas molekul antara nukleus dan sitoplasma.",
      "Sel darah merah manusia dewasa tidak memiliki nukleus, sehingga tidak dapat memperbaiki dirinya sendiri dan hanya bertahan sekitar 120 hari.",
      "Sel otot rangka manusia justru bisa memiliki ratusan nukleus dalam satu sel yang sama.",
      "Ukuran nukleus biasanya mencapai sekitar 10 persen dari total volume sel."
    ],
    analogi: { judul: "Kepala Sekolah", teks: "Nukleus berperan seperti kepala sekolah yang memegang seluruh kebijakan dan informasi penting. Setiap keputusan besar dalam sel selalu berasal dari 'ruang kepala sekolah' ini, yang kemudian disebarkan ke seluruh bagian sel untuk dijalankan." },
    ringkasan: [
      "Organel terbesar, berfungsi sebagai pusat kendali sel.",
      "Menyimpan materi genetik (DNA) dalam bentuk kromatin/kromosom.",
      "Dibungkus selubung inti berpori yang mengatur lalu lintas molekul.",
      "Tempat berlangsungnya transkripsi DNA menjadi RNA.",
      "Umumnya satu nukleus per sel, dengan beberapa pengecualian menarik."
    ],
    quiz: [
      { soal: "Apa fungsi utama nukleus dalam sel hewan?", pilihan: ["Mencerna zat sisa", "Pusat kendali dan penyimpan materi genetik", "Menghasilkan energi", "Membentuk protein secara langsung"], jawaban: 1, penjelasan: "Nukleus menyimpan DNA dan mengendalikan seluruh aktivitas sel melalui informasi genetik yang dikandungnya." },
      { soal: "Struktur yang memisahkan isi nukleus dari sitoplasma disebut...", pilihan: ["Dinding sel", "Selubung inti", "Membran golgi", "Retikulum endoplasma"], jawaban: 1, penjelasan: "Selubung inti (nuclear envelope) adalah membran ganda berpori yang membungkus nukleus." }
    ]
  },
  {
    id: "nukleolus",
    nama: "Nukleolus",
    namaLain: "Anak Inti",
    warna: "#a78bfa",
    pengertian: [
      "Nukleolus adalah struktur bulat padat yang terletak di dalam nukleus, sehingga sering disebut sebagai 'anak inti'. Berbeda dari nukleus, nukleolus tidak memiliki membran pembungkus sendiri — ia hanyalah wilayah yang lebih padat di dalam nukleus tempat aktivitas tertentu terkonsentrasi.",
      "Fungsi utama nukleolus adalah sebagai 'pabrik' pembuatan komponen ribosom. Di dalam nukleolus, gen-gen tertentu pada DNA disalin menjadi RNA ribosom (rRNA), yang kemudian digabungkan dengan protein untuk membentuk subunit-subunit ribosom.",
      "Setelah subunit ribosom selesai dirakit di dalam nukleolus, subunit-subunit tersebut akan dikirim keluar nukleus melalui pori inti menuju sitoplasma. Di sanalah kedua subunit besar dan kecil akan bergabung membentuk ribosom yang utuh dan siap bekerja membuat protein.",
      "Ukuran dan jumlah nukleolus dalam sebuah nukleus dapat berubah-ubah tergantung seberapa aktif sel tersebut memproduksi protein. Sel yang sangat aktif membuat protein, misalnya sel kelenjar, biasanya memiliki nukleolus yang lebih besar dan terlihat jelas."
    ],
    fungsi: {
      umum: "Nukleolus berfungsi sebagai tempat pembentukan RNA ribosom (rRNA) dan perakitan subunit ribosom, yang nantinya dikirim ke sitoplasma untuk digunakan dalam proses sintesis protein oleh ribosom.",
      contoh: "Seperti bagian percetakan khusus di dalam kantor kepala sekolah yang mencetak dokumen penting sebelum dibagikan ke seluruh sekolah, nukleolus 'mencetak' komponen ribosom sebelum dikirim keluar untuk bertugas membuat protein."
    },
    caraKerja: "Di dalam nukleolus, bagian tertentu dari DNA disalin menjadi rRNA melalui proses transkripsi. rRNA ini kemudian dibungkus bersama protein-protein khusus untuk membentuk dua subunit ribosom (subunit besar dan kecil) yang terpisah, sebelum akhirnya melewati pori inti menuju sitoplasma untuk dirakit menjadi ribosom yang berfungsi penuh.",
    faktaMenarik: [
      "Nukleolus adalah struktur pertama di dalam nukleus yang dapat terlihat jelas menggunakan mikroskop cahaya sederhana.",
      "Nukleolus tidak memiliki membran pembatas sendiri, berbeda dengan kebanyakan organel bermembran lainnya.",
      "Dalam satu nukleus, bisa terdapat lebih dari satu nukleolus tergantung jenis dan aktivitas selnya.",
      "Nukleolus akan menghilang sementara saat sel membelah, lalu terbentuk kembali setelah pembelahan selesai.",
      "Semakin aktif sel memproduksi protein, semakin besar pula ukuran nukleolusnya."
    ],
    analogi: { judul: "Percetakan di Kantor Kepala Sekolah", teks: "Nukleolus ibarat ruang percetakan kecil di dalam kantor kepala sekolah, tempat mencetak 'surat tugas' (subunit ribosom) sebelum dikirim ke seluruh penjuru sekolah (sitoplasma) untuk mulai bekerja." },
    ringkasan: [
      "Struktur padat di dalam nukleus, tanpa membran sendiri.",
      "Berfungsi membentuk RNA ribosom (rRNA).",
      "Tempat perakitan subunit ribosom sebelum dikirim ke sitoplasma.",
      "Ukurannya membesar pada sel yang aktif membuat protein.",
      "Menghilang sementara saat sel sedang membelah."
    ],
    quiz: [
      { soal: "Apa fungsi utama nukleolus?", pilihan: ["Mencerna zat asing", "Membentuk RNA ribosom dan subunit ribosom", "Menghasilkan energi sel", "Menyimpan lemak"], jawaban: 1, penjelasan: "Nukleolus adalah tempat pembentukan rRNA dan perakitan subunit ribosom sebelum dikirim ke sitoplasma." },
      { soal: "Berbeda dengan nukleus, nukleolus tidak memiliki...", pilihan: ["DNA", "Membran pembungkus sendiri", "Bentuk bulat", "Fungsi apapun"], jawaban: 1, penjelasan: "Nukleolus hanyalah wilayah padat di dalam nukleus, bukan organel bermembran tersendiri." }
    ]
  },
  {
    id: "ribosom",
    nama: "Ribosom",
    namaLain: "Pabrik Protein",
    warna: "#7c2d92",
    pengertian: [
      "Ribosom adalah organel sangat kecil yang bertugas membuat protein — molekul penting yang dibutuhkan sel untuk hampir semua fungsi kehidupan, mulai dari membangun struktur sel hingga mempercepat reaksi kimia. Meskipun ukurannya mikroskopis, ribosom adalah salah satu organel tersibuk dalam sel.",
      "Berbeda dari kebanyakan organel lain, ribosom tidak dibungkus oleh membran. Ribosom tersusun dari gabungan RNA ribosom (rRNA) dan protein, yang membentuk dua bagian terpisah disebut subunit besar dan subunit kecil, yang akan menyatu saat mulai bekerja membuat protein.",
      "Ribosom dapat ditemukan di dua lokasi dalam sel: ada yang mengambang bebas langsung di sitoplasma, dan ada yang menempel pada permukaan retikulum endoplasma kasar. Ribosom bebas biasanya membuat protein yang akan digunakan di dalam sel itu sendiri, sementara ribosom yang menempel di RE kasar membuat protein yang akan dikirim keluar sel atau ke organel lain.",
      "Proses pembuatan protein oleh ribosom disebut translasi, yaitu menerjemahkan kode genetik yang dibawa oleh RNA duta (mRNA) dari nukleus menjadi rangkaian asam amino yang tersambung membentuk protein. Satu sel bisa memiliki ribuan hingga jutaan ribosom yang bekerja secara bersamaan."
    ],
    fungsi: {
      umum: "Ribosom berfungsi sebagai tempat berlangsungnya sintesis protein, yaitu proses menerjemahkan informasi genetik dari mRNA menjadi rantai asam amino yang membentuk protein fungsional bagi sel.",
      contoh: "Setiap kali tubuhmu memerlukan protein baru, misalnya enzim pencernaan atau hormon pertumbuhan, ribosomlah yang bekerja merakitnya, layaknya juru masak yang meracik bahan-bahan sesuai resep hingga menjadi hidangan siap saji."
    },
    caraKerja: "Ribosom membaca kode genetik pada mRNA tiga huruf demi tiga huruf (disebut kodon), lalu mencocokkan setiap kodon dengan asam amino yang sesuai menggunakan bantuan RNA transfer (tRNA). Asam amino-asam amino tersebut kemudian disambung satu per satu membentuk rantai panjang yang akhirnya melipat menjadi protein dengan bentuk dan fungsi tertentu.",
    faktaMenarik: [
      "Satu sel manusia yang aktif dapat memiliki jutaan ribosom yang bekerja secara bersamaan.",
      "Ribosom ditemukan pertama kali oleh ilmuwan Romania-Amerika George Palade pada tahun 1955 menggunakan mikroskop elektron.",
      "Ribosom sel hewan (dan hewan pada umumnya) berukuran sedikit berbeda dari ribosom bakteri, sehingga menjadi target beberapa jenis obat antibiotik.",
      "Satu ribosom mampu merangkai puluhan asam amino setiap detik saat membuat protein.",
      "Ribosom bisa bekerja berkelompok dalam satu untai mRNA yang sama, membentuk struktur yang disebut polisom, agar produksi protein lebih cepat."
    ],
    analogi: { judul: "Juru Masak Pabrik", teks: "Ribosom seperti juru masak yang membaca resep (mRNA) huruf demi huruf, lalu mengambil bahan-bahan (asam amino) sesuai urutan resep tersebut untuk dimasak menjadi hidangan (protein) yang siap digunakan." },
    ringkasan: [
      "Organel kecil tanpa membran, tersusun dari rRNA dan protein.",
      "Berfungsi sebagai tempat sintesis (pembuatan) protein.",
      "Ditemukan bebas di sitoplasma atau menempel di RE kasar.",
      "Bekerja lewat proses translasi, menerjemahkan mRNA menjadi protein.",
      "Satu sel bisa memiliki jutaan ribosom yang aktif bekerja."
    ],
    quiz: [
      { soal: "Apa yang dihasilkan oleh ribosom?", pilihan: ["Energi (ATP)", "Protein", "Lemak", "Enzim pencernaan saja"], jawaban: 1, penjelasan: "Ribosom adalah tempat berlangsungnya sintesis protein melalui proses translasi." },
      { soal: "Ribosom dapat ditemukan bebas di sitoplasma atau menempel pada...", pilihan: ["Mitokondria", "Badan Golgi", "Retikulum Endoplasma Kasar", "Lisosom"], jawaban: 2, penjelasan: "Ribosom yang menempel pada RE kasar membuat protein yang akan dikirim keluar sel atau ke organel lain." }
    ]
  },
  {
    id: "re-kasar",
    nama: "Retikulum Endoplasma Kasar",
    namaLain: "RE Kasar · Rough ER",
    warna: "#fb7185",
    pengertian: [
      "Retikulum Endoplasma Kasar (RE Kasar) adalah jaringan membran berlipat-lipat yang menyebar dari selubung inti ke seluruh sitoplasma, dan disebut 'kasar' karena permukaannya dipenuhi ribosom yang menempel sehingga terlihat berbintik-bintik jika dilihat dengan mikroskop elektron.",
      "Bentuknya menyerupai lorong-lorong dan kantung pipih yang saling terhubung, membentuk semacam jalur produksi bersambung di dalam sel. RE kasar biasanya terletak berdekatan dengan nukleus, karena keduanya bekerja sama erat dalam proses pembuatan protein.",
      "Ribosom yang menempel pada permukaan RE kasar bertugas membuat protein yang nantinya perlu dimodifikasi lebih lanjut atau dikirim ke luar sel. Begitu protein selesai dibuat oleh ribosom, protein tersebut langsung masuk ke dalam rongga RE kasar untuk diproses lebih lanjut.",
      "Di dalam rongga RE kasar, protein yang baru terbentuk akan dilipat menjadi bentuk tiga dimensi yang benar dan diperiksa kualitasnya. Protein yang cacat atau salah lipat akan disingkirkan, sementara protein yang sudah sempurna akan dikemas ke dalam vesikel untuk dikirim ke Badan Golgi."
    ],
    fungsi: {
      umum: "RE kasar berfungsi sebagai tempat sintesis protein (dibantu ribosom yang menempel di permukaannya), sekaligus tempat pelipatan dan pemeriksaan kualitas awal protein tersebut sebelum dikirim ke Badan Golgi untuk diproses lebih lanjut.",
      contoh: "Sama seperti jalur perakitan di pabrik mobil, tempat setiap bagian dirakit oleh pekerja (ribosom) di sepanjang jalur (RE kasar) sebelum mobil yang setengah jadi dikirim ke bagian finishing (Badan Golgi)."
    },
    caraKerja: "Ribosom yang menempel pada permukaan luar RE kasar menerjemahkan mRNA menjadi rantai protein, yang langsung disalurkan masuk ke dalam rongga RE kasar melalui semacam 'terowongan' khusus pada membrannya. Di dalam rongga tersebut, protein dilipat dengan bantuan protein pendamping (chaperone), diberi tambahan gula tertentu, lalu dikemas ke dalam vesikel transport menuju Badan Golgi.",
    faktaMenarik: [
      "Nama 'kasar' pada RE kasar berasal dari tampilannya di bawah mikroskop elektron yang terlihat berbintik-bintik akibat ribosom yang menempel.",
      "RE kasar sangat banyak ditemukan pada sel-sel yang aktif memproduksi protein untuk disekresikan, misalnya sel kelenjar ludah dan sel pankreas.",
      "Jika RE kasar dan seluruh Retikulum Endoplasma di dalam satu sel hati direntangkan, luas permukaannya bisa jauh lebih besar daripada membran sel itu sendiri.",
      "Protein yang salah lipat di dalam RE kasar dapat memicu respons stres sel yang disebut 'unfolded protein response'.",
      "RE kasar bersambungan langsung dengan selubung inti, sehingga keduanya membentuk satu sistem membran yang saling terhubung."
    ],
    analogi: { judul: "Jalur Perakitan Pabrik", teks: "RE kasar berperan seperti jalur perakitan di pabrik, tempat para pekerja (ribosom) berjejer di sepanjang lorong untuk merakit dan memeriksa produk (protein) sebelum dikirim ke bagian pengemasan (Badan Golgi)." },
    ringkasan: [
      "Jaringan membran berlipat yang ditempeli ribosom di permukaannya.",
      "Terhubung langsung dengan selubung inti.",
      "Tempat sintesis protein oleh ribosom yang menempel.",
      "Melipat dan memeriksa kualitas protein sebelum dikirim keluar.",
      "Mengemas protein ke dalam vesikel menuju Badan Golgi."
    ],
    quiz: [
      { soal: "Mengapa Retikulum Endoplasma Kasar disebut 'kasar'?", pilihan: ["Karena bentuknya kasar dan tebal", "Karena permukaannya ditempeli banyak ribosom", "Karena mengandung banyak lemak", "Karena warnanya gelap"], jawaban: 1, penjelasan: "Permukaan RE kasar dipenuhi ribosom yang membuatnya terlihat berbintik-bintik di bawah mikroskop elektron." },
      { soal: "Setelah dibuat di RE kasar, protein biasanya dikirim menuju...", pilihan: ["Mitokondria", "Badan Golgi", "Lisosom langsung", "Nukleus"], jawaban: 1, penjelasan: "Protein dari RE kasar dikemas dalam vesikel dan dikirim ke Badan Golgi untuk diproses lebih lanjut." }
    ]
  },
  {
    id: "re-halus",
    nama: "Retikulum Endoplasma Halus",
    namaLain: "RE Halus · Smooth ER",
    warna: "#fdba74",
    pengertian: [
      "Retikulum Endoplasma Halus (RE Halus) adalah bagian dari sistem retikulum endoplasma yang permukaannya tidak ditempeli ribosom, sehingga terlihat licin atau 'halus' di bawah mikroskop elektron. RE halus biasanya menyambung langsung dengan RE kasar, membentuk jaringan lorong-lorong membran yang berkelanjutan.",
      "Bentuk RE halus lebih menyerupai pipa-pipa tabung yang saling bercabang dibandingkan kantung pipih seperti RE kasar. Perbedaan bentuk ini berkaitan dengan fungsinya yang lebih fokus pada pengolahan lemak dan senyawa kimia dibandingkan protein.",
      "Fungsi utama RE halus adalah mensintesis lipid atau lemak, termasuk fosfolipid yang menjadi bahan penyusun membran sel, serta hormon steroid. Karena itu, sel-sel yang banyak memproduksi hormon, seperti sel-sel kelenjar reproduksi, biasanya memiliki RE halus dalam jumlah besar.",
      "Selain memproduksi lemak, RE halus juga berperan penting dalam menetralkan racun dan obat-obatan (detoksifikasi), terutama pada sel-sel hati. RE halus juga berfungsi menyimpan ion kalsium yang penting untuk kontraksi otot, sehingga pada sel otot, RE halus memiliki nama khusus yaitu retikulum sarkoplasma."
    ],
    fungsi: {
      umum: "RE halus berfungsi mensintesis lipid dan hormon steroid, memetabolisme karbohidrat, menetralkan racun serta obat-obatan (terutama di sel hati), dan menyimpan ion kalsium yang dibutuhkan untuk kontraksi otot.",
      contoh: "Saat tubuhmu mencerna dan perlu menetralkan zat dari makanan atau obat tertentu, sel-sel hatimu mengandalkan RE halus untuk memproses dan menetralkan zat tersebut agar tidak membahayakan tubuh."
    },
    caraKerja: "Enzim-enzim yang menempel pada membran RE halus bekerja merangkai molekul lemak dari bahan-bahan sederhana, serta memodifikasi struktur kimia racun atau obat agar lebih mudah larut dan dibuang oleh tubuh. Pada sel otot, RE halus (retikulum sarkoplasma) menyimpan ion kalsium dan melepaskannya secara tiba-tiba saat otot menerima sinyal untuk berkontraksi.",
    faktaMenarik: [
      "RE halus tidak memiliki ribosom sama sekali di permukaannya, berbeda dengan RE kasar.",
      "Pada sel otot, RE halus memiliki nama khusus yaitu retikulum sarkoplasma, yang menyimpan ion kalsium untuk kontraksi otot.",
      "Sel hati manusia mengandung RE halus dalam jumlah besar karena perannya penting dalam menetralkan racun dan obat.",
      "Konsumsi obat atau alkohol secara terus-menerus dapat membuat RE halus di sel hati bertambah banyak untuk mengimbangi kerja detoksifikasi.",
      "RE halus juga berperan dalam sintesis hormon steroid, seperti hormon-hormon yang diproduksi oleh kelenjar adrenal."
    ],
    analogi: { judul: "Pabrik Kimia dan Unit Penetral Racun", teks: "RE halus berperan seperti pabrik kimia sekaligus unit penetral racun di dalam sel — memproduksi lemak dan hormon di satu sisi, sambil menetralkan zat-zat berbahaya di sisi lain agar sel tetap aman." },
    ringkasan: [
      "Bagian retikulum endoplasma tanpa ribosom, permukaannya halus.",
      "Berbentuk tabung-tabung yang saling bercabang.",
      "Berfungsi mensintesis lipid, hormon steroid, dan menyimpan kalsium.",
      "Berperan penting dalam detoksifikasi racun dan obat, terutama di hati.",
      "Pada sel otot disebut retikulum sarkoplasma."
    ],
    quiz: [
      { soal: "Apa perbedaan utama RE halus dari RE kasar?", pilihan: ["RE halus lebih besar", "RE halus tidak memiliki ribosom di permukaannya", "RE halus hanya ada pada tumbuhan", "RE halus berwarna hijau"], jawaban: 1, penjelasan: "RE halus tidak ditempeli ribosom sehingga permukaannya terlihat licin, berbeda dengan RE kasar." },
      { soal: "Pada sel hati, RE halus berperan penting dalam proses...", pilihan: ["Fotosintesis", "Detoksifikasi racun dan obat", "Pembelahan sel", "Pencernaan DNA"], jawaban: 1, penjelasan: "RE halus membantu menetralkan racun dan obat-obatan, terutama pada sel-sel hati." }
    ]
  },
  {
    id: "badan-golgi",
    nama: "Badan Golgi",
    namaLain: "Aparatus Golgi",
    warna: "#c2410c",
    pengertian: [
      "Badan Golgi adalah organel yang terdiri dari tumpukan kantung-kantung pipih bermembran yang disebut sisterna, biasanya berjumlah empat hingga delapan tumpukan yang saling berdekatan. Bentuknya sering digambarkan seperti tumpukan panekuk atau piring yang disusun rapi.",
      "Badan Golgi berfungsi sebagai pusat 'pengolahan akhir dan pengemasan' bagi protein dan lipid yang dikirim dari retikulum endoplasma. Setiap sisterna dalam tumpukan memiliki peran berbeda dalam tahapan pemrosesan, mulai dari sisi yang menerima hingga sisi yang mengirim keluar.",
      "Di dalam Badan Golgi, protein yang datang dari RE kasar mengalami berbagai modifikasi tambahan, seperti penambahan gugus gula (glikosilasi) atau pemotongan bagian tertentu, sehingga protein menjadi matang dan siap digunakan sesuai fungsinya masing-masing.",
      "Setelah selesai diproses, Badan Golgi akan 'memilah' protein dan lipid tersebut sesuai tujuan akhirnya, lalu mengemasnya ke dalam vesikel-vesikel kecil. Vesikel ini kemudian dikirim ke berbagai tujuan: ada yang menuju membran sel untuk disekresikan keluar, ada yang menuju lisosom, dan ada pula yang tetap digunakan di dalam sel."
    ],
    fungsi: {
      umum: "Badan Golgi berfungsi memodifikasi, mengemas, dan mendistribusikan protein serta lipid yang diterima dari retikulum endoplasma ke tujuan akhirnya masing-masing, baik di dalam sel maupun untuk disekresikan keluar sel.",
      contoh: "Seperti kantor pos yang menerima paket, mengemasnya dengan label alamat yang tepat, lalu mengirimkannya ke tujuan masing-masing, Badan Golgi mengemas protein dan lipid dengan 'label' khusus agar sampai ke tempat yang benar dalam sel."
    },
    caraKerja: "Vesikel berisi protein dari RE kasar menyatu dengan sisi penerima Badan Golgi (sisi cis). Protein tersebut kemudian bergerak melalui tumpukan sisterna, di mana enzim-enzim khusus memodifikasi strukturnya secara bertahap. Setelah sampai di sisi pengirim (sisi trans), protein yang sudah matang dikemas ke dalam vesikel baru dan dikirim menuju tujuan akhirnya masing-masing, seperti membran sel atau lisosom.",
    faktaMenarik: [
      "Badan Golgi dinamai sesuai penemunya, ilmuwan Italia Camillo Golgi, yang pertama kali mengamatinya pada tahun 1898.",
      "Camillo Golgi meraih Hadiah Nobel Fisiologi atau Kedokteran pada tahun 1906 atas penemuannya di bidang struktur sistem saraf, termasuk kontribusinya menemukan organel ini.",
      "Sel-sel yang aktif mensekresikan zat, seperti sel kelenjar ludah, biasanya memiliki Badan Golgi dalam jumlah lebih banyak.",
      "Badan Golgi juga berperan dalam membentuk lisosom, salah satu organel yang berfungsi mencerna zat sisa.",
      "Setiap tumpukan sisterna dalam Badan Golgi memiliki 'arah' kerja yang jelas, dari sisi penerima hingga sisi pengirim."
    ],
    analogi: { judul: "Kantor Pos", teks: "Badan Golgi bekerja layaknya kantor pos: menerima 'paket' protein dan lipid dari RE, mengemas dan memberi label tujuan yang tepat, lalu mengirimkannya ke alamat yang sesuai di dalam maupun luar sel." },
    ringkasan: [
      "Tumpukan kantung pipih bermembran (sisterna).",
      "Menerima protein dan lipid kiriman dari retikulum endoplasma.",
      "Memodifikasi (misalnya menambah gula) dan mematangkan protein.",
      "Mengemas dan memilah protein/lipid ke dalam vesikel.",
      "Mendistribusikan vesikel ke tujuan akhir seperti membran sel atau lisosom."
    ],
    quiz: [
      { soal: "Apa fungsi utama Badan Golgi?", pilihan: ["Menghasilkan energi", "Memodifikasi, mengemas, dan mendistribusikan protein/lipid", "Menyimpan materi genetik", "Membentuk rangka sel"], jawaban: 1, penjelasan: "Badan Golgi berperan sebagai pusat pengolahan akhir dan pengemasan sebelum protein/lipid dikirim ke tujuan akhirnya." },
      { soal: "Badan Golgi ditemukan oleh ilmuwan asal negara...", pilihan: ["Jerman", "Italia", "Prancis", "Inggris"], jawaban: 1, penjelasan: "Badan Golgi ditemukan dan dinamai berdasarkan ilmuwan Italia, Camillo Golgi." }
    ]
  },
  {
    id: "mitokondria",
    nama: "Mitokondria",
    namaLain: "Pembangkit Tenaga Sel",
    warna: "#e11d48",
    pengertian: [
      "Mitokondria adalah organel berbentuk lonjong menyerupai kacang atau sosis, yang berfungsi sebagai tempat berlangsungnya sebagian besar produksi energi dalam sel. Karena perannya yang vital ini, mitokondria dijuluki sebagai 'pembangkit tenaga sel' atau powerhouse of the cell.",
      "Mitokondria memiliki dua lapis membran: membran luar yang halus dan membran dalam yang berlipat-lipat membentuk struktur yang disebut krista. Lipatan krista ini memperluas permukaan membran dalam, sehingga semakin banyak tempat berlangsungnya reaksi penghasil energi.",
      "Keunikan lain dari mitokondria adalah organel ini memiliki materi genetiknya sendiri, disebut DNA mitokondria, yang terpisah dari DNA di dalam nukleus. DNA mitokondria pada manusia diwariskan khusus dari pihak ibu, karena mitokondria pada sel telur jauh lebih banyak dibandingkan pada sel sperma.",
      "Jumlah mitokondria dalam satu sel sangat bervariasi tergantung kebutuhan energi sel tersebut. Sel-sel yang membutuhkan banyak energi, seperti sel otot jantung dan sel otot rangka, dapat memiliki ribuan mitokondria, sementara sel yang kurang aktif hanya memiliki sedikit."
    ],
    fungsi: {
      umum: "Mitokondria berfungsi menghasilkan energi dalam bentuk ATP (adenosin trifosfat) melalui proses respirasi seluler, yaitu memecah molekul glukosa dengan bantuan oksigen menjadi energi yang dapat langsung digunakan oleh sel untuk menjalankan berbagai aktivitasnya.",
      contoh: "Saat kamu berlari atau berolahraga, sel-sel otot kakimu bekerja ekstra keras — dan mitokondria di dalam sel-sel tersebutlah yang bekerja lembur menghasilkan energi tambahan agar ototmu tetap mampu bergerak."
    },
    caraKerja: "Mitokondria menghasilkan energi melalui serangkaian tahap yang disebut respirasi seluler. Molekul glukosa yang sudah dipecah sebagian di sitoplasma akan diproses lebih lanjut di dalam mitokondria menggunakan oksigen, melalui siklus Krebs dan rantai transpor elektron pada membran dalam (krista), yang akhirnya menghasilkan ATP dalam jumlah besar sebagai 'mata uang energi' sel.",
    faktaMenarik: [
      "Mitokondria memiliki DNA sendiri yang terpisah dari DNA nukleus, dan hanya diwariskan dari pihak ibu.",
      "Sel otot jantung manusia bisa mengandung ribuan mitokondria karena kebutuhan energinya yang sangat tinggi dan terus-menerus.",
      "Menurut teori endosimbiosis, mitokondria diduga berasal dari bakteri purba yang hidup bersimbiosis di dalam sel leluhur eukariotik jutaan tahun lalu.",
      "Lipatan pada membran dalam mitokondria (krista) berfungsi memperluas area permukaan untuk menghasilkan energi lebih banyak.",
      "Mitokondria dapat membelah diri sendiri di dalam sel, mirip seperti bakteri, tanpa harus menunggu sel induk membelah."
    ],
    analogi: { judul: "Pembangkit Listrik", teks: "Mitokondria bekerja seperti pembangkit listrik tenaga bagi seluruh 'kota' sel. Ia mengubah bahan bakar (glukosa dan oksigen) menjadi energi listrik (ATP) yang dialirkan ke seluruh bagian sel agar semua aktivitas dapat berjalan." },
    ringkasan: [
      "Organel berbentuk lonjong dengan membran ganda dan krista.",
      "Dijuluki 'pembangkit tenaga sel' karena menghasilkan ATP.",
      "Bekerja lewat proses respirasi seluler menggunakan oksigen.",
      "Memiliki DNA sendiri, diwariskan dari pihak ibu.",
      "Jumlahnya lebih banyak pada sel yang butuh banyak energi, seperti sel otot."
    ],
    quiz: [
      { soal: "Mengapa mitokondria dijuluki 'pembangkit tenaga sel'?", pilihan: ["Karena bentuknya besar", "Karena menghasilkan energi (ATP) bagi sel", "Karena mengandung banyak air", "Karena letaknya di tengah sel"], jawaban: 1, penjelasan: "Mitokondria menghasilkan ATP melalui respirasi seluler, yang menjadi sumber energi utama bagi sel." },
      { soal: "Lipatan pada membran dalam mitokondria disebut...", pilihan: ["Krista", "Kloroplas", "Kromatin", "Sisterna"], jawaban: 0, penjelasan: "Krista adalah lipatan pada membran dalam mitokondria yang memperluas permukaan untuk produksi energi." }
    ]
  },
  {
    id: "lisosom",
    nama: "Lisosom",
    namaLain: "Kantung Pencerna Sel",
    warna: "#b45309",
    pengertian: [
      "Lisosom adalah organel berbentuk kantung bulat kecil yang berisi kumpulan enzim pencerna kuat, disebut enzim hidrolitik. Lisosom berperan sebagai 'sistem pencernaan' bagi sel, karena tugas utamanya adalah mencerna dan memecah berbagai materi yang tidak lagi dibutuhkan sel.",
      "Enzim-enzim di dalam lisosom bekerja optimal pada kondisi asam, sehingga bagian dalam lisosom memang sengaja dijaga lebih asam dibandingkan sitoplasma di sekitarnya. Membran lisosom sendiri dirancang khusus agar tahan terhadap enzim-enzim kuat yang dikandungnya, sehingga tidak ikut tercerna.",
      "Lisosom dibentuk oleh Badan Golgi, yang mengemas enzim-enzim pencerna ke dalam vesikel khusus. Setelah terbentuk, lisosom akan bergerak di dalam sitoplasma dan menyatu dengan partikel, bakteri, atau organel rusak yang perlu dihancurkan.",
      "Selain mencerna zat dari luar sel yang masuk lewat proses fagositosis, lisosom juga berperan penting dalam proses yang disebut autofagi, yaitu mendaur ulang organel sel yang sudah tua atau rusak menjadi bahan-bahan baru yang bisa digunakan kembali oleh sel."
    ],
    fungsi: {
      umum: "Lisosom berfungsi mencerna dan menguraikan materi yang tidak dibutuhkan sel, termasuk partikel makanan, bakteri yang masuk ke dalam sel, serta organel-organel sel yang sudah rusak atau tua, melalui enzim hidrolitik yang dikandungnya.",
      contoh: "Ketika sel darah putih dalam tubuhmu menangkap bakteri penyebab penyakit, lisosom di dalam sel darah putih itulah yang bertugas 'mencerna' dan menghancurkan bakteri tersebut agar tidak membahayakan tubuh."
    },
    caraKerja: "Lisosom menyatu dengan vesikel yang berisi materi target, seperti partikel makanan, bakteri, atau organel rusak. Setelah menyatu, enzim hidrolitik di dalam lisosom akan memecah materi tersebut menjadi molekul-molekul kecil dan sederhana, yang kemudian dapat digunakan kembali oleh sel sebagai bahan baku baru atau dibuang sebagai sisa metabolisme.",
    faktaMenarik: [
      "Lisosom kadang dijuluki 'kantung bunuh diri sel' karena jika membrannya pecah, enzim di dalamnya bisa mencerna sel itu sendiri.",
      "Proses daur ulang organel rusak oleh lisosom disebut autofagi, istilah yang berasal dari bahasa Yunani berarti 'memakan diri sendiri'.",
      "Penemu lisosom adalah ilmuwan Belgia Christian de Duve, yang menerima Hadiah Nobel atas penemuan ini pada tahun 1974.",
      "Beberapa penyakit genetik langka disebabkan oleh kegagalan fungsi enzim di dalam lisosom, yang disebut penyakit penimbunan lisosom.",
      "Sel darah putih memiliki lisosom dalam jumlah besar karena tugasnya aktif menghancurkan bakteri dan partikel asing."
    ],
    analogi: { judul: "Petugas Kebersihan Sel", teks: "Lisosom berperan seperti petugas kebersihan yang berkeliling sel membawa 'cairan pembersih' kuat, siap mengurai sampah, partikel asing, hingga peralatan (organel) yang sudah rusak agar sel tetap bersih dan efisien." },
    ringkasan: [
      "Kantung bulat berisi enzim hidrolitik (enzim pencerna).",
      "Dibentuk oleh Badan Golgi.",
      "Mencerna partikel asing, bakteri, dan organel rusak.",
      "Berperan dalam proses autofagi (daur ulang bagian sel).",
      "Bersifat asam di bagian dalamnya agar enzim bekerja optimal."
    ],
    quiz: [
      { soal: "Apa fungsi utama lisosom?", pilihan: ["Menghasilkan energi", "Mencerna materi yang tidak dibutuhkan sel", "Menyimpan DNA", "Membentuk protein"], jawaban: 1, penjelasan: "Lisosom mengandung enzim hidrolitik yang mencerna partikel asing, bakteri, dan organel rusak." },
      { soal: "Proses lisosom mendaur ulang organel sel yang rusak disebut...", pilihan: ["Fotosintesis", "Autofagi", "Transkripsi", "Osmosis"], jawaban: 1, penjelasan: "Autofagi adalah proses lisosom mencerna dan mendaur ulang bagian sel yang sudah tua atau rusak." }
    ]
  },
  {
    id: "sentriol",
    nama: "Sentriol",
    namaLain: "Sentrosom",
    warna: "#64748b",
    pengertian: [
      "Sentriol adalah sepasang struktur berbentuk silinder kecil yang biasanya terletak berdekatan dengan nukleus, tersusun saling tegak lurus satu sama lain seperti huruf L. Sepasang sentriol ini bersama material di sekitarnya membentuk struktur yang disebut sentrosom.",
      "Secara mikroskopis, setiap sentriol tersusun dari sembilan set mikrotubulus (serabut protein halus) yang tersusun melingkar membentuk struktur silinder. Susunan yang sangat teratur ini membuat sentriol memiliki bentuk yang khas dan mudah dikenali di bawah mikroskop elektron.",
      "Sentriol merupakan salah satu organel yang menjadi ciri khas sel hewan, karena pada umumnya tidak ditemukan pada sel tumbuhan. Struktur ini berperan penting terutama pada saat sel hendak membelah diri, baik dalam proses mitosis maupun meiosis.",
      "Selain berperan dalam pembelahan sel, sentriol juga berfungsi sebagai dasar pembentukan silia dan flagela, yaitu struktur seperti rambut atau cambuk halus yang digunakan beberapa jenis sel untuk bergerak atau menggerakkan zat di sekitarnya."
    ],
    fungsi: {
      umum: "Sentriol berperan penting dalam pembelahan sel dengan membentuk benang-benang gelendong pembelahan (spindle fiber) yang menarik dan memisahkan kromosom ke kedua kutub sel, serta menjadi dasar pembentukan silia dan flagela pada beberapa jenis sel.",
      contoh: "Sentriol bekerja seperti dua tukang derek yang berdiri di kedua ujung lapangan, menarik tali (benang spindel) untuk memastikan setiap 'tim' kromosom terbagi rata dan tertarik ke arah yang benar saat sel membelah menjadi dua."
    },
    caraKerja: "Menjelang sel membelah, sepasang sentriol akan berpindah ke kutub-kutub yang berlawanan di dalam sel. Dari masing-masing sentriol, tumbuh benang-benang mikrotubulus yang disebut gelendong pembelahan (spindle fiber), yang kemudian menempel pada kromosom dan menariknya secara merata ke kedua kutub sel, sehingga sel anak yang terbentuk memiliki jumlah kromosom yang sama.",
    faktaMenarik: [
      "Sentriol tersusun dari sembilan set mikrotubulus yang membentuk struktur silinder — pola ini disebut susunan '9+0'.",
      "Sel tumbuhan pada umumnya tidak memiliki sentriol, namun tetap dapat membelah dengan bantuan struktur lain.",
      "Sentriol juga menjadi dasar pembentukan silia dan flagela, misalnya ekor pada sel sperma yang berfungsi untuk bergerak.",
      "Sepasang sentriol akan menggandakan diri sebelum sel membelah, sehingga setiap sel anak mendapat sepasang sentriol yang baru.",
      "Kesalahan pada kerja sentriol saat pembelahan sel dapat menyebabkan jumlah kromosom pada sel anak menjadi tidak normal."
    ],
    analogi: { judul: "Tukang Derek Penarik Kromosom", teks: "Sentriol berperan seperti dua tukang derek yang berdiri di kutub berlawanan, menarik tali gelendong pembelahan untuk memastikan kromosom terbagi rata dan adil ke kedua sel anak saat sel membelah." },
    ringkasan: [
      "Sepasang struktur silinder yang saling tegak lurus, dekat nukleus.",
      "Tersusun dari sembilan set mikrotubulus.",
      "Berperan membentuk gelendong pembelahan (spindle fiber) saat sel membelah.",
      "Menjadi ciri khas sel hewan, umumnya tidak ada pada sel tumbuhan.",
      "Juga menjadi dasar pembentukan silia dan flagela."
    ],
    quiz: [
      { soal: "Sentriol berperan penting terutama pada saat...", pilihan: ["Sel istirahat", "Sel membelah diri", "Sel mencerna makanan", "Sel menghasilkan energi"], jawaban: 1, penjelasan: "Sentriol membentuk benang gelendong pembelahan yang menarik kromosom saat sel membelah." },
      { soal: "Sentriol umumnya tidak ditemukan pada sel...", pilihan: ["Hewan", "Tumbuhan", "Otot", "Saraf"], jawaban: 1, penjelasan: "Sentriol menjadi salah satu ciri khas sel hewan dan pada umumnya tidak dimiliki oleh sel tumbuhan." }
    ]
  },
  {
    id: "vakuola-kecil",
    nama: "Vakuola Kecil",
    namaLain: "Vakuola Sel Hewan",
    warna: "#0284c7",
    pengertian: [
      "Vakuola adalah kantung bermembran yang berfungsi sebagai tempat penyimpanan sementara berbagai zat di dalam sel. Pada sel hewan, vakuola berukuran jauh lebih kecil dibandingkan vakuola pada sel tumbuhan, dan biasanya jumlahnya lebih banyak, tersebar di berbagai bagian sitoplasma.",
      "Berbeda dengan sel tumbuhan yang memiliki satu vakuola besar sentral untuk menyimpan air dan menjaga tekanan sel, sel hewan memiliki banyak vakuola kecil dengan fungsi yang lebih beragam, mulai dari penyimpanan sementara hingga membantu proses transportasi zat.",
      "Vakuola kecil pada sel hewan sering terbentuk sebagai bagian dari proses endositosis, yaitu ketika sel 'menelan' zat dari luar dengan cara melipat membrannya ke dalam. Vakuola ini kemudian dapat menyatu dengan lisosom agar isinya dicerna, atau digunakan untuk keperluan sel lainnya.",
      "Meski berukuran kecil dan tidak sedominan vakuola pada sel tumbuhan, keberadaan vakuola pada sel hewan tetap penting untuk menjaga keseimbangan cairan dan menyimpan sementara zat-zat yang dibutuhkan maupun yang akan dibuang oleh sel."
    ],
    fungsi: {
      umum: "Vakuola kecil pada sel hewan berfungsi menyimpan sementara air, makanan, atau sisa metabolisme, serta membantu proses transportasi zat masuk (endositosis) maupun keluar sel (eksositosis).",
      contoh: "Mirip seperti kardus-kardus penyimpanan kecil di sebuah gudang, vakuola menampung sementara berbagai barang (zat) sebelum akhirnya dipindahkan ke tempat pemrosesan lain di dalam sel, seperti lisosom."
    },
    caraKerja: "Vakuola kecil terbentuk ketika sebagian membran sel melipat ke dalam dan membungkus zat dari luar sel, membentuk kantung kecil yang terlepas ke dalam sitoplasma. Vakuola ini dapat bergerak di dalam sel dan menyatu dengan organel lain, misalnya lisosom, untuk memproses isi yang dikandungnya.",
    faktaMenarik: [
      "Vakuola pada sel hewan berukuran jauh lebih kecil dibandingkan vakuola sentral pada sel tumbuhan.",
      "Sel hewan bisa memiliki banyak vakuola kecil sekaligus, berbeda dengan sel tumbuhan yang umumnya hanya punya satu vakuola besar.",
      "Vakuola makanan yang terbentuk lewat fagositosis akan menyatu dengan lisosom agar isinya dapat dicerna.",
      "Beberapa organisme bersel satu seperti Amoeba menggunakan vakuola kontraktil untuk mengeluarkan kelebihan air dari dalam selnya.",
      "Vakuola pada sel hewan bersifat sementara — bisa terbentuk dan menghilang sesuai kebutuhan sel, tidak permanen seperti pada sel tumbuhan."
    ],
    analogi: { judul: "Gudang Penyimpanan Sementara", teks: "Vakuola kecil berperan seperti kardus penyimpanan sementara di sebuah gudang — menampung barang (zat) untuk sementara waktu sebelum dipindahkan, diproses, atau dibuang sesuai kebutuhan." },
    ringkasan: [
      "Kantung bermembran untuk penyimpanan sementara zat.",
      "Pada sel hewan berukuran kecil dan jumlahnya banyak.",
      "Berbeda dari vakuola besar tunggal pada sel tumbuhan.",
      "Sering terbentuk lewat proses endositosis.",
      "Dapat menyatu dengan lisosom untuk mencerna isinya."
    ],
    quiz: [
      { soal: "Dibandingkan sel tumbuhan, vakuola pada sel hewan umumnya...", pilihan: ["Berukuran besar dan tunggal", "Berukuran kecil dan berjumlah banyak", "Tidak pernah ada", "Berisi kloroplas"], jawaban: 1, penjelasan: "Sel hewan memiliki banyak vakuola berukuran kecil, berbeda dengan sel tumbuhan yang memiliki satu vakuola besar." },
      { soal: "Vakuola kecil pada sel hewan sering terbentuk melalui proses...", pilihan: ["Fotosintesis", "Endositosis", "Transkripsi", "Replikasi DNA"], jawaban: 1, penjelasan: "Endositosis adalah proses membran sel melipat ke dalam untuk membungkus zat dari luar, membentuk vakuola." }
    ]
  },
  {
    id: "peroksisom",
    nama: "Peroksisom",
    namaLain: "Badan Mikro",
    warna: "#ca8a04",
    pengertian: [
      "Peroksisom adalah organel kecil berbentuk bulat yang dibungkus oleh satu lapis membran, berisi berbagai enzim yang berperan dalam reaksi oksidasi. Bentuknya sekilas mirip dengan lisosom, namun peroksisom memiliki jenis enzim dan fungsi yang berbeda.",
      "Salah satu enzim penting yang terkandung dalam peroksisom adalah katalase, yang berfungsi memecah hidrogen peroksida (H2O2) — senyawa yang bersifat racun bagi sel — menjadi air dan oksigen yang aman. Reaksi inilah yang menjadi asal-usul nama 'peroksisom'.",
      "Selain menetralkan hidrogen peroksida, peroksisom juga berperan dalam memecah molekul asam lemak berukuran panjang menjadi potongan yang lebih pendek melalui proses yang disebut beta-oksidasi, sebagai persiapan sebelum molekul tersebut diproses lebih lanjut oleh mitokondria untuk menghasilkan energi.",
      "Peroksisom dapat memperbanyak diri secara mandiri di dalam sel dengan cara membelah, mirip seperti mitokondria. Jumlah peroksisom dalam sel dapat meningkat jika sel terpapar zat-zat tertentu yang membutuhkan proses detoksifikasi lebih banyak."
    ],
    fungsi: {
      umum: "Peroksisom berfungsi menetralkan senyawa hidrogen peroksida yang bersifat racun menjadi air dan oksigen, serta membantu memecah molekul asam lemak berukuran panjang sebagai bagian dari proses metabolisme lemak dalam sel.",
      contoh: "Seperti unit pengolahan limbah kecil di dalam sebuah kompleks pabrik, peroksisom menetralkan zat-zat sisa berbahaya (seperti hidrogen peroksida) sebelum sempat merusak bagian sel yang lain."
    },
    caraKerja: "Enzim oksidase di dalam peroksisom memecah berbagai molekul, termasuk asam lemak, dan menghasilkan hidrogen peroksida sebagai produk sampingan dari reaksi tersebut. Karena hidrogen peroksida bersifat racun, enzim katalase yang juga terdapat di dalam peroksisom segera mengubahnya menjadi air dan oksigen yang tidak berbahaya bagi sel.",
    faktaMenarik: [
      "Peroksisom pertama kali ditemukan oleh ilmuwan Belgia Christian de Duve, orang yang sama yang menemukan lisosom.",
      "Enzim katalase dalam peroksisom adalah salah satu enzim tercepat yang diketahui dalam mengubah hidrogen peroksida menjadi air dan oksigen.",
      "Sel hati dan sel ginjal memiliki peroksisom dalam jumlah besar karena aktif melakukan detoksifikasi.",
      "Peroksisom dapat membelah diri secara mandiri untuk memperbanyak jumlahnya di dalam sel.",
      "Gangguan pada fungsi peroksisom dapat menyebabkan beberapa kelainan genetik langka yang memengaruhi metabolisme lemak."
    ],
    analogi: { judul: "Unit Pengolahan Limbah", teks: "Peroksisom berperan seperti unit pengolahan limbah kecil di sebuah pabrik — menangkap zat sisa berbahaya (hidrogen peroksida) dan segera mengubahnya menjadi zat yang aman sebelum sempat mencemari lingkungan sekitarnya." },
    ringkasan: [
      "Organel bulat berselaput tunggal, mirip lisosom namun berbeda fungsi.",
      "Mengandung enzim katalase untuk menetralkan hidrogen peroksida.",
      "Membantu memecah asam lemak berukuran panjang.",
      "Berperan penting dalam detoksifikasi sel.",
      "Dapat memperbanyak diri dengan cara membelah."
    ],
    quiz: [
      { soal: "Enzim khas di dalam peroksisom yang menetralkan hidrogen peroksida adalah...", pilihan: ["Katalase", "Amilase", "Lipase", "Pepsin"], jawaban: 0, penjelasan: "Katalase mengubah hidrogen peroksida yang beracun menjadi air dan oksigen yang aman." },
      { soal: "Selain menetralkan racun, peroksisom juga membantu memecah...", pilihan: ["DNA", "Asam lemak berukuran panjang", "RNA ribosom", "Karbohidrat kompleks"], jawaban: 1, penjelasan: "Peroksisom membantu proses beta-oksidasi untuk memecah asam lemak panjang menjadi bagian lebih pendek." }
    ]
  },
  {
    id: "vesikel",
    nama: "Vesikel",
    namaLain: "Kantung Transport",
    warna: "#f59e0b",
    pengertian: [
      "Vesikel adalah kantung kecil bermembran yang berfungsi sebagai 'kendaraan' pengangkut zat di dalam sel. Vesikel terbentuk dari lipatan membran, baik dari membran sel, retikulum endoplasma, maupun Badan Golgi, untuk membungkus dan memindahkan zat tertentu dari satu tempat ke tempat lain.",
      "Ukuran vesikel jauh lebih kecil dibandingkan organel-organel besar seperti nukleus atau mitokondria, namun jumlahnya bisa sangat banyak karena vesikel terus-menerus terbentuk dan digunakan setiap kali sel perlu memindahkan zat dari satu bagian ke bagian lain.",
      "Vesikel berperan penting dalam menjaga agar sistem endomembran sel (RE, Badan Golgi, lisosom, dan membran sel) tetap saling terhubung meskipun secara fisik terpisah. Tanpa vesikel, protein dan lipid yang telah diproses di satu organel tidak akan bisa mencapai tujuannya di organel lain.",
      "Ada berbagai jenis vesikel dengan fungsi berbeda, misalnya vesikel transport yang membawa protein dari RE ke Badan Golgi, vesikel sekretori yang membawa zat menuju membran sel untuk dikeluarkan, dan vesikel yang terbentuk saat proses endositosis maupun eksositosis."
    ],
    fungsi: {
      umum: "Vesikel berfungsi sebagai alat transportasi zat di dalam sel, mengangkut protein, lipid, dan berbagai molekul lain antar organel, serta membawa zat menuju atau menjauhi membran sel dalam proses eksositosis dan endositosis.",
      contoh: "Seperti truk pengangkut yang membawa barang dari satu gudang ke gudang lain di kompleks pabrik, vesikel mengangkut 'kargo' berupa protein dan lipid dari satu organel menuju organel lainnya sesuai tujuan yang sudah ditentukan."
    },
    caraKerja: "Vesikel terbentuk ketika sebagian kecil membran suatu organel menonjol keluar lalu terlepas, membungkus zat tertentu di dalamnya. Vesikel ini kemudian bergerak melalui sitoplasma, sering dipandu oleh sitoskeleton, hingga mencapai membran organel tujuan. Di sana, membran vesikel menyatu dengan membran organel target, melepaskan isinya ke dalam organel tersebut.",
    faktaMenarik: [
      "Satu sel dapat menghasilkan ribuan vesikel setiap harinya untuk mengangkut berbagai macam zat.",
      "Vesikel sekretori yang membawa hormon insulin pada sel pankreas akan menyatu dengan membran sel saat tubuh membutuhkan pelepasan insulin ke darah.",
      "Protein khusus pada permukaan vesikel membantu memastikan vesikel menyatu dengan organel tujuan yang tepat, tidak tertukar dengan organel lain.",
      "Vesikel juga berperan dalam mengirimkan neurotransmiter antar sel saraf, memungkinkan sinyal saraf berpindah dari satu sel ke sel lainnya.",
      "Penelitian tentang bagaimana vesikel mengangkut zat di dalam sel pernah dianugerahi Hadiah Nobel Fisiologi atau Kedokteran pada tahun 2013."
    ],
    analogi: { judul: "Truk Kurir dalam Sel", teks: "Vesikel berperan seperti truk kurir yang mengangkut paket (protein dan lipid) dari satu gudang (organel) ke gudang lainnya, memastikan setiap barang sampai ke alamat tujuan yang tepat di dalam sel." },
    ringkasan: [
      "Kantung kecil bermembran untuk mengangkut zat di dalam sel.",
      "Terbentuk dari lipatan membran organel atau membran sel.",
      "Menghubungkan sistem endomembran (RE, Golgi, lisosom, membran sel).",
      "Berperan dalam proses endositosis dan eksositosis.",
      "Memiliki penanda protein agar sampai ke organel tujuan yang tepat."
    ],
    quiz: [
      { soal: "Apa fungsi utama vesikel dalam sel?", pilihan: ["Menghasilkan energi", "Mengangkut zat antar organel", "Menyimpan materi genetik", "Membentuk gelendong pembelahan"], jawaban: 1, penjelasan: "Vesikel bertindak sebagai 'kendaraan' yang mengangkut protein, lipid, dan molekul lain antar organel." },
      { soal: "Vesikel dapat terbentuk dari lipatan membran milik...", pilihan: ["Hanya nukleus", "RE, Badan Golgi, atau membran sel", "Hanya mitokondria", "Hanya lisosom"], jawaban: 1, penjelasan: "Vesikel dapat terbentuk dari berbagai bagian sistem endomembran, termasuk RE, Badan Golgi, dan membran sel." }
    ]
  }
];

/* ---------- 2. DATA REFERENSI ---------- */
const referenceData = [
  { nama: "Buku Siswa IPA Kelas VIII", penerbit: "Kurikulum Merdeka — Kemendikbudristek RI", desc: "Buku paket resmi yang membahas struktur dan fungsi sel sebagai unit kehidupan.", link: "", jenis: "book" },
  { nama: "Campbell Biology", penerbit: "Reece, Urry, Cain, Wasserman, Minorsky, Jackson", desc: "Buku teks biologi umum yang menjadi rujukan standar dunia untuk biologi sel.", link: "", jenis: "book" },
  { nama: "Khan Academy — Biology", penerbit: "khanacademy.org", desc: "Materi dan video pembelajaran gratis tentang struktur dan fungsi sel.", link: "https://www.khanacademy.org", jenis: "web" },
  { nama: "Encyclopaedia Britannica", penerbit: "britannica.com", desc: "Ensiklopedia daring tepercaya dengan artikel mendalam mengenai sel dan organelnya.", link: "https://www.britannica.com", jenis: "web" },
  { nama: "BYJU'S — Cell Structure", penerbit: "byjus.com", desc: "Portal edukasi dengan penjelasan visual mengenai organel sel hewan dan tumbuhan.", link: "https://byjus.com", jenis: "web" },
  { nama: "Ruangguru", penerbit: "ruangguru.com", desc: "Platform belajar Indonesia dengan rangkuman materi biologi sesuai kurikulum sekolah.", link: "https://www.ruangguru.com", jenis: "web" }
];

/* ---------- 3. IKON SVG PER ORGANEL ---------- */
/* Ikon ringan (viewBox 0 0 100 100) dipakai di kartu daftar & panel detail,
   supaya bentuknya senada dengan diagram sel utama. */
const organelleIcons = {
  "membran-sel": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="none" stroke="#22d3ee" stroke-width="7"/><circle cx="50" cy="50" r="34" fill="#22d3ee" opacity=".12"/></svg>`,
  "sitoplasma": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" fill="#a8e8d3" opacity=".5"/><circle cx="38" cy="42" r="4" fill="#059669"/><circle cx="60" cy="36" r="3" fill="#059669"/><circle cx="64" cy="60" r="4" fill="#059669"/><circle cx="42" cy="64" r="3" fill="#059669"/></svg>`,
  "nukleus": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="33" fill="#c9b8fb" stroke="#5b21b6" stroke-width="3"/><circle cx="59" cy="41" r="10" fill="#5b21b6"/></svg>`,
  "nukleolus": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="none" stroke="#a78bfa" stroke-width="3" stroke-dasharray="4 5"/><circle cx="50" cy="50" r="16" fill="#5b21b6"/></svg>`,
  "ribosom": `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="42" rx="20" ry="14" fill="#7c2d92"/><ellipse cx="50" cy="60" rx="15" ry="10" fill="#a855c7"/></svg>`,
  "re-kasar": `<svg viewBox="0 0 100 100"><path d="M20,30 Q40,40 20,55 Q0,70 20,80" fill="none" stroke="#fb7185" stroke-width="8" stroke-linecap="round" transform="translate(30,0)"/><circle cx="42" cy="28" r="3.5" fill="#9f1239"/><circle cx="30" cy="45" r="3.5" fill="#9f1239"/><circle cx="42" cy="62" r="3.5" fill="#9f1239"/><circle cx="30" cy="78" r="3.5" fill="#9f1239"/></svg>`,
  "re-halus": `<svg viewBox="0 0 100 100"><path d="M25,25 Q55,35 30,50 Q5,65 35,75" fill="none" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/></svg>`,
  "badan-golgi": `<svg viewBox="0 0 100 100"><path d="M20,32 Q50,20 80,32" fill="none" stroke="#c2410c" stroke-width="7" stroke-linecap="round"/><path d="M20,48 Q50,36 80,48" fill="none" stroke="#c2410c" stroke-width="7" stroke-linecap="round"/><path d="M20,64 Q50,52 80,64" fill="none" stroke="#c2410c" stroke-width="7" stroke-linecap="round"/><path d="M20,80 Q50,68 80,80" fill="none" stroke="#c2410c" stroke-width="7" stroke-linecap="round"/></svg>`,
  "mitokondria": `<svg viewBox="0 0 100 100"><rect x="18" y="34" width="64" height="32" rx="16" fill="#fda4af" stroke="#881337" stroke-width="3"/><path d="M28,42 Q36,34 44,42 Q52,50 60,42 Q68,34 74,42" fill="none" stroke="#881337" stroke-width="3"/><path d="M28,58 Q36,50 44,58 Q52,66 60,58 Q68,50 74,58" fill="none" stroke="#881337" stroke-width="3"/></svg>`,
  "lisosom": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="32" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><circle cx="42" cy="44" r="3" fill="#78350f"/><circle cx="58" cy="48" r="3" fill="#78350f"/><circle cx="48" cy="60" r="3" fill="#78350f"/><circle cx="60" cy="60" r="3" fill="#78350f"/></svg>`,
  "sentriol": `<svg viewBox="0 0 100 100"><rect x="22" y="42" width="40" height="11" rx="5.5" fill="#475569" stroke="#1e293b" stroke-width="1.5"/><rect x="52" y="20" width="11" height="40" rx="5.5" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/></svg>`,
  "vakuola-kecil": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="32" fill="#bae6fd" opacity=".8" stroke="#0284c7" stroke-width="3.5"/></svg>`,
  "peroksisom": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#fef08a" stroke="#713f12" stroke-width="3"/><path d="M50,34 L56,48 L44,48 Z" fill="#713f12"/></svg>`,
  "vesikel": `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="26" fill="#fde68a" stroke="#b45309" stroke-width="3" stroke-dasharray="5 4"/></svg>`
};

/* ---------- 4. STATE & VARIABEL GLOBAL ---------- */
const state = {
  visited: new Set(),          // id organel yang sudah dibuka/dipelajari
  darkMode: false,
  activeOrganelle: null,       // id organel yang sedang aktif di panel
  panelTab: "pengertian",
  quiz: {
    questions: [],
    index: 0,
    score: 0,
    answered: false
  },
  isMobileSidebarOpen: false
};

const TOTAL_ORGANEL = organelleData.length;

/* Util singkat */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const byId = (id) => organelleData.find(o => o.id === id);

/* ==========================================================================
   5. LAYAR LOADING
   ========================================================================== */
function initLoadingScreen() {
  const screen = qs("#loadingScreen");
  window.addEventListener("load", () => {
    setTimeout(() => {
      screen.classList.add("hidden");
      // Setelah loading selesai, jalankan sapuan scan pertama di diagram sel
      setTimeout(triggerScanSweep, 400);
    }, 700);
  });
  // Jaring pengaman: kalau event 'load' lambat/gagal, tetap sembunyikan setelah 3.5s
  setTimeout(() => screen.classList.add("hidden"), 3500);
}

/* ==========================================================================
   6. LATAR PARTIKEL (canvas) — menyerupai molekul yang melayang & terhubung
   ========================================================================== */
function initParticles() {
  const canvas = qs("#particleCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;
  const COLORS = ["#34d399", "#22d3ee", "#3b82f6", "#8b5cf6"];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => createParticle());
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 1.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.55;
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // garis penghubung antar molekul yang berdekatan
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "#34d399";
          ctx.globalAlpha = (1 - dist / 110) * 0.18;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(step);
}

/* ==========================================================================
   7. MOUSE GLOW & PARALLAX RINGAN
   ========================================================================== */
function initMouseEffects() {
  const glow = qs("#mouseGlow");
  const heroVisual = qs("#heroVisual");
  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
  let curX = targetX, curY = targetY;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX; targetY = e.clientY;

    if (heroVisual) {
      const rect = heroVisual.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      heroVisual.style.transform = `translate(${dx * 14}px, ${dy * 14}px)`;
    }
  });

  function animateGlow() {
    curX += (targetX - curX) * 0.12;
    curY += (targetY - curY) * 0.12;
    if (glow) glow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ==========================================================================
   8. MODE GELAP
   ========================================================================== */
function initDarkMode() {
  const toggle = qs("#darkModeToggle");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) setDarkMode(true);

  toggle.addEventListener("click", () => setDarkMode(!state.darkMode));
}
function setDarkMode(on) {
  state.darkMode = on;
  document.body.classList.toggle("dark", on);
}

/* ==========================================================================
   9. SIDEBAR, HAMBURGER & SCROLLSPY
   ========================================================================== */
function initSidebar() {
  const sidebar = qs("#sidebar");
  const overlay = qs("#sidebarOverlay");
  const hamburger = qs("#hamburgerBtn");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    state.isMobileSidebarOpen = true;
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    state.isMobileSidebarOpen = false;
  }
  hamburger.addEventListener("click", () => {
    state.isMobileSidebarOpen ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);
  qsa(".sidebar-link").forEach(link => link.addEventListener("click", closeSidebar));

  // Scrollspy: menyorot menu sidebar sesuai section yang sedang terlihat
  const sections = qsa("main > section, .hero");
  const links = qsa(".sidebar-link");
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle("active", l.dataset.section === id));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
  sections.forEach(sec => spyObserver.observe(sec));
}

/* ==========================================================================
   10. SMOOTH SCROLL (tombol & tautan anchor)
   ========================================================================== */
function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  qs("#startLearningBtn").addEventListener("click", () => {
    qs("#sel-interaktif").scrollIntoView({ behavior: "smooth" });
    setTimeout(triggerScanSweep, 500);
  });
  qs("#scrollIndicator").addEventListener("click", () => {
    qs("#sel-interaktif").scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   11. EFEK RIPPLE PADA TOMBOL
   ========================================================================== */
function initRippleEffect() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".ripple");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.4;
    circle.className = "ripple-circle";
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(circle);
    circle.addEventListener("animationend", () => circle.remove());
  });
}

/* ==========================================================================
   12. SCROLL REVEAL (fade + naik saat elemen masuk viewport)
   ========================================================================== */
function initScrollReveal() {
  const revealEls = qsa(".reveal");
  revealEls.forEach((el, i) => el.style.setProperty("--reveal-i", i % 6));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  revealEls.forEach(el => observer.observe(el));
}

/* ==========================================================================
   13. RENDER: RAIL, KARTU DAFTAR ORGANEL, REFERENSI
   ========================================================================== */
function renderRailList() {
  const rail = qs("#railList");
  rail.innerHTML = organelleData.map(o => `
    <div class="rail-item" data-id="${o.id}" role="button" tabindex="0">
      <span class="rail-dot" style="--dot-color:${o.warna}"></span>
      <span>${o.nama}</span>
      <svg class="rail-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
  `).join("");
  qsa(".rail-item", rail).forEach(item => {
    item.addEventListener("click", () => openOrganellePanel(item.dataset.id, true));
  });
}

function renderOrganelleGrid() {
  const grid = qs("#organelleGrid");
  grid.innerHTML = organelleData.map(o => `
    <div class="organelle-card" data-id="${o.id}">
      <div class="card-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <div class="card-icon">${organelleIcons[o.id]}</div>
      <p class="card-name">${o.nama}</p>
      <p class="card-teaser">${o.pengertian[0]}</p>
    </div>
  `).join("");
  qsa(".organelle-card", grid).forEach(card => {
    card.addEventListener("click", () => openOrganellePanel(card.dataset.id, true));
  });
}

function renderReferences() {
  const grid = qs("#referenceGrid");
  const bookIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5A2 2 0 0 1 6 4h13v15H6a2 2 0 0 0-2 2V5.5Z"/><path d="M19 17H6a2 2 0 0 0-2 2"/></svg>`;
  const webIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>`;
  grid.innerHTML = referenceData.map(r => `
    <div class="reference-card">
      <div class="ref-icon">${r.jenis === "book" ? bookIcon : webIcon}</div>
      <div>
        <p class="ref-name">${r.nama}</p>
        <p class="ref-desc">${r.desc}</p>
        ${r.link ? `<a class="ref-link" href="${r.link}" target="_blank" rel="noopener">${r.link.replace('https://', '')}</a>` : `<span class="ref-link">${r.penerbit}</span>`}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   14. INTERAKSI DIAGRAM SEL (hover, tooltip, klik, zoom kamera)
   ========================================================================== */
function initCellDiagram() {
  const svg = qs("#cellSvg");
  const stage = qs("#cellStage");
  const tooltip = qs("#cellTooltip");
  const organelles = qsa(".organelle", svg);

  organelles.forEach(g => {
    const id = g.dataset.id;
    const data = byId(id);
    if (!data) return;

    g.addEventListener("mouseenter", () => {
      g.classList.add("hovered");
      showTooltip(data.nama, g);
    });
    g.addEventListener("mousemove", () => showTooltip(data.nama, g));
    g.addEventListener("mouseleave", () => {
      g.classList.remove("hovered");
      hideTooltip();
    });
    g.addEventListener("click", () => openOrganellePanel(id, true));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openOrganellePanel(id, true); }
    });
  });

  function showTooltip(text, el) {
    const stageRect = stage.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const x = elRect.left + elRect.width / 2 - stageRect.left;
    const y = elRect.top - stageRect.top;
    tooltip.textContent = text;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add("visible");
  }
  function hideTooltip() { tooltip.classList.remove("visible"); }

  function setZoom(targetEl) {
    const svgRect = svg.getBoundingClientRect();
    const elRect = targetEl.getBoundingClientRect();
    const originX = ((elRect.left + elRect.width / 2 - svgRect.left) / svgRect.width) * 100;
    const originY = ((elRect.top + elRect.height / 2 - svgRect.top) / svgRect.height) * 100;
    svg.style.setProperty("--zoom-x", `${originX}%`);
    svg.style.setProperty("--zoom-y", `${originY}%`);
    stage.classList.add("zoomed");
  }
  function clearZoom() { stage.classList.remove("zoomed"); }

  // dipakai oleh openOrganellePanel() & closeOrganellePanel()
  window.__cellDiagram = {
    activateOrganelle(id) {
      organelles.forEach(g => g.classList.toggle("active", g.dataset.id === id));
      const target = organelles.find(g => g.dataset.id === id);
      if (target) setZoom(target);
      hideTooltip();
    },
    deactivate() {
      organelles.forEach(g => g.classList.remove("active"));
      clearZoom();
    },
    markVisited(id) {
      const target = organelles.find(g => g.dataset.id === id);
      if (target) target.classList.add("visited");
    }
  };
}

function triggerScanSweep() {
  const line = qs("#cellScanline");
  if (!line) return;
  line.classList.remove("sweep");
  void line.offsetWidth; // reset animasi
  line.classList.add("sweep");
}

/* ==========================================================================
   15. PANEL DETAIL ORGANEL
   ========================================================================== */
function initDetailPanel() {
  const panel = qs("#detailPanel");
  const overlay = qs("#panelOverlay");

  qs("#panelCloseBtn").addEventListener("click", closeOrganellePanel);
  overlay.addEventListener("click", closeOrganellePanel);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) closeOrganellePanel();
  });

  qsa(".detail-tab").forEach(tab => {
    tab.addEventListener("click", () => switchPanelTab(tab.dataset.tab));
  });

  qs("#detailNextBtn").addEventListener("click", () => {
    const currentIndex = organelleData.findIndex(o => o.id === state.activeOrganelle);
    const nextIndex = (currentIndex + 1) % organelleData.length;
    openOrganellePanel(organelleData[nextIndex].id, true);
  });

  qs("#detailLearnMoreBtn").addEventListener("click", () => switchPanelTab("fakta"));
}

function openOrganellePanel(id, markVisited) {
  const data = byId(id);
  if (!data) return;
  state.activeOrganelle = id;

  renderPanelContent(data);
  switchPanelTab("pengertian");

  qs("#detailPanel").classList.add("open");
  qs("#detailPanel").setAttribute("aria-hidden", "false");
  qs("#panelOverlay").classList.add("open");
  document.body.style.overflow = "hidden";

  if (window.__cellDiagram) window.__cellDiagram.activateOrganelle(id);
  updateRailActive(id);
  if (markVisited) markOrganelleVisited(id);
}

function closeOrganellePanel() {
  qs("#detailPanel").classList.remove("open");
  qs("#detailPanel").setAttribute("aria-hidden", "true");
  qs("#panelOverlay").classList.remove("open");
  document.body.style.overflow = "";
  if (window.__cellDiagram) window.__cellDiagram.deactivate();
}

function renderPanelContent(data) {
  qs("#detailTag").textContent = `ORGANEL // ${data.nama.toUpperCase()}`;
  qs("#detailTitle").textContent = data.nama;
  qs("#detailSubtitle").textContent = data.namaLain;
  qs("#detailIconWrap").innerHTML = organelleIcons[data.id] || "";

  qs("#panePengertian").innerHTML = data.pengertian.map(p => `<p>${p}</p>`).join("");

  qs("#paneFungsi").innerHTML = `
    <p>${data.fungsi.umum}</p>
    <div class="analogy-card" style="margin-top:14px;">
      <div class="analogy-icon">💡</div>
      <div><p class="analogy-title">Contoh dalam Kehidupan Sehari-hari</p><p class="analogy-text">${data.fungsi.contoh}</p></div>
    </div>`;

  qs("#paneCaraKerja").innerHTML = `
    <div class="illustration-box">${organelleIcons[data.id] || ""}</div>
    <p>${data.caraKerja}</p>`;

  qs("#paneFakta").innerHTML = `<div class="fact-list">${
    data.faktaMenarik.map((f, i) => `<div class="fact-item"><span class="fact-num">${i + 1}</span><span>${f}</span></div>`).join("")
  }</div>`;

  qs("#paneAnalogi").innerHTML = `
    <div class="analogy-card">
      <div class="analogy-icon">🔗</div>
      <div><p class="analogy-title">${data.analogi.judul}</p><p class="analogy-text">${data.analogi.teks}</p></div>
    </div>`;

  qs("#paneRingkasan").innerHTML = `<div class="summary-list">${
    data.ringkasan.map(r => `<div class="summary-item">${r}</div>`).join("")
  }</div>`;

  renderMiniQuiz(data);
}

function switchPanelTab(tabName) {
  state.panelTab = tabName;
  qsa(".detail-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
  qsa(".detail-pane").forEach(p => p.classList.toggle("active", p.dataset.pane === tabName));
  const body = qs("#detailBody");
  if (body) body.scrollTop = 0;
}

function renderMiniQuiz(data) {
  const pane = qs("#paneQuiz");
  pane.innerHTML = data.quiz.map((q, qi) => `
    <div class="mini-quiz-item" data-qi="${qi}">
      <p class="mini-quiz-q">${qi + 1}. ${q.soal}</p>
      <div class="mini-quiz-opts">
        ${q.pilihan.map((opt, oi) => `
          <button class="mini-quiz-opt" data-oi="${oi}" type="button">
            <span class="opt-letter">${String.fromCharCode(65 + oi)}</span><span>${opt}</span>
          </button>`).join("")}
      </div>
      <div class="mini-quiz-explain"></div>
    </div>`).join("");

  qsa(".mini-quiz-item", pane).forEach(item => {
    const qi = Number(item.dataset.qi);
    const qData = data.quiz[qi];
    const opts = qsa(".mini-quiz-opt", item);
    opts.forEach(opt => {
      opt.addEventListener("click", () => {
        if (item.classList.contains("answered")) return;
        item.classList.add("answered");
        const oi = Number(opt.dataset.oi);
        opts.forEach(o => o.classList.add("disabled-opt"));
        if (oi === qData.jawaban) {
          opt.classList.add("correct");
          opt.classList.remove("disabled-opt");
        } else {
          opt.classList.add("wrong");
          opts[qData.jawaban].classList.add("correct");
          opts[qData.jawaban].classList.remove("disabled-opt");
        }
        const explain = qs(".mini-quiz-explain", item);
        explain.textContent = qData.penjelasan;
        explain.classList.add("show");
      });
    });
  });
}

/* ==========================================================================
   16. PROGRES BELAJAR
   ========================================================================== */
function markOrganelleVisited(id) {
  const isNew = !state.visited.has(id);
  state.visited.add(id);
  updateProgressUI();
  updateRailVisited(id);
  updateCardVisited(id);
  if (window.__cellDiagram) window.__cellDiagram.markVisited(id);

  if (isNew && state.visited.size === TOTAL_ORGANEL) {
    showToast("🎉 Semua organel selesai dipelajari! Yuk uji pemahamanmu lewat Quiz.");
  }
}

function updateProgressUI() {
  const count = state.visited.size;
  const percent = Math.round((count / TOTAL_ORGANEL) * 100);

  qs("#visitedCount").textContent = count;
  qs("#totalCount").textContent = TOTAL_ORGANEL;
  qs("#learnProgressPercent").textContent = `${percent}%`;
  qs("#learnProgressFill").style.width = `${percent}%`;

  const ring = qs("#progressRingBar");
  const circumference = 2 * Math.PI * 24;
  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference - (percent / 100) * circumference}`;
  qs("#progressRingText").textContent = `${percent}%`;
}

function updateRailVisited(id) {
  const item = qs(`.rail-item[data-id="${id}"]`);
  if (item) item.classList.add("visited");
}
function updateCardVisited(id) {
  const card = qs(`.organelle-card[data-id="${id}"]`);
  if (card) card.classList.add("visited");
}
function updateRailActive(id) {
  qsa(".rail-item").forEach(item => item.classList.toggle("current", item.dataset.id === id));
}

/* ==========================================================================
   17. TOAST NOTIFIKASI
   ========================================================================== */
let toastTimer;
function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4000);
}

/* ==========================================================================
   18. PENCARIAN ORGANEL
   ========================================================================== */
function initSearch() {
  const input = qs("#searchInput");
  const resultsBox = qs("#searchResults");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { resultsBox.classList.remove("open"); resultsBox.innerHTML = ""; return; }

    const matches = organelleData.filter(o =>
      o.nama.toLowerCase().includes(q) || o.namaLain.toLowerCase().includes(q)
    );

    resultsBox.innerHTML = matches.length
      ? matches.map(o => `
          <div class="search-result-item" data-id="${o.id}" role="option">
            <span class="search-result-dot" style="background:${o.warna}"></span>
            <span>${o.nama}</span>
          </div>`).join("")
      : `<div class="search-empty">Organel "${input.value}" tidak ditemukan</div>`;

    qsa(".search-result-item", resultsBox).forEach(item => {
      item.addEventListener("click", () => {
        openOrganellePanel(item.dataset.id, true);
        input.value = "";
        resultsBox.classList.remove("open");
      });
    });
    resultsBox.classList.add("open");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { const first = qs(".search-result-item", resultsBox); if (first) first.click(); }
    if (e.key === "Escape") { resultsBox.classList.remove("open"); input.blur(); }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar-search")) resultsBox.classList.remove("open");
  });
}

/* ==========================================================================
   19. QUIZ UTAMA (14 soal, satu dari tiap organel, urutan diacak)
   ========================================================================== */
function initQuiz() {
  qs("#quizStartBtn").addEventListener("click", startQuiz);
  qs("#quizRetryBtn").addEventListener("click", startQuiz);
  qs("#quizNextBtn").addEventListener("click", nextQuizQuestion);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuizQuestions() {
  const questions = organelleData.map(o => ({ organelId: o.id, ...o.quiz[0] }));
  return shuffleArray(questions);
}

function startQuiz() {
  state.quiz.questions = buildQuizQuestions();
  state.quiz.index = 0;
  state.quiz.score = 0;

  qs("#quizStart").classList.add("quiz-state-hidden");
  qs("#quizResult").classList.add("quiz-state-hidden");
  qs("#quizPlay").classList.remove("quiz-state-hidden");

  qs("#quizDots").innerHTML = state.quiz.questions.map(() => `<span class="quiz-dot"></span>`).join("");
  renderQuizQuestion();
}

function updateQuizDots() {
  qsa(".quiz-dot").forEach((dot, i) => {
    dot.classList.toggle("done", i < state.quiz.index);
    dot.classList.toggle("current", i === state.quiz.index);
  });
}

function renderQuizQuestion() {
  const q = state.quiz.questions[state.quiz.index];
  state.quiz.answered = false;

  qs("#quizQNum").textContent = `Soal ${state.quiz.index + 1}/${state.quiz.questions.length}`;
  qs("#quizScoreLive").textContent = `Skor: ${state.quiz.score}`;
  qs("#quizQuestion").textContent = q.soal;
  const feedback = qs("#quizFeedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";
  qs("#quizNextBtn").disabled = true;
  qs("#quizNextBtn").textContent = state.quiz.index === state.quiz.questions.length - 1 ? "Lihat Hasil" : "Lanjut";

  qs("#quizOptions").innerHTML = q.pilihan.map((opt, oi) => `
    <button class="quiz-option" data-oi="${oi}" type="button">
      <span class="opt-letter">${String.fromCharCode(65 + oi)}</span><span>${opt}</span>
    </button>`).join("");

  qsa(".quiz-option").forEach(btn => btn.addEventListener("click", () => answerQuiz(Number(btn.dataset.oi))));
  updateQuizDots();
}

function answerQuiz(oi) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  const q = state.quiz.questions[state.quiz.index];
  const options = qsa(".quiz-option");
  options.forEach(o => (o.disabled = true));

  const feedback = qs("#quizFeedback");
  if (oi === q.jawaban) {
    state.quiz.score++;
    options[oi].classList.add("correct");
    feedback.textContent = `Benar — ${q.penjelasan}`;
    feedback.classList.add("is-correct");
  } else {
    options[oi].classList.add("wrong");
    options[q.jawaban].classList.add("correct");
    feedback.textContent = `Kurang tepat — ${q.penjelasan}`;
    feedback.classList.add("is-wrong");
  }
  qs("#quizScoreLive").textContent = `Skor: ${state.quiz.score}`;
  qs("#quizNextBtn").disabled = false;
  markOrganelleVisited(q.organelId);
}

function nextQuizQuestion() {
  state.quiz.index++;
  if (state.quiz.index >= state.quiz.questions.length) showQuizResult();
  else renderQuizQuestion();
}

function showQuizResult() {
  qs("#quizPlay").classList.add("quiz-state-hidden");
  qs("#quizResult").classList.remove("quiz-state-hidden");

  const total = state.quiz.questions.length;
  const score = state.quiz.score;
  const percent = total ? score / total : 0;

  qs("#quizResultScore").textContent = `${score}/${total}`;

  const ring = qs("#quizResultRing");
  const circumference = 2 * Math.PI * 52;
  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference - percent * circumference}`;

  let title, msg;
  if (percent === 1) { title = "Sempurna! 🏆"; msg = "Kamu menguasai seluruh organel sel hewan dengan sangat baik."; }
  else if (percent >= 0.7) { title = "Kerja Bagus! 👏"; msg = "Pemahamanmu sudah cukup kuat — cek lagi bagian yang masih meleset."; }
  else if (percent >= 0.4) { title = "Lumayan, Terus Berlatih 💪"; msg = "Coba telusuri lagi beberapa organel yang belum kamu kuasai."; }
  else { title = "Ayo Coba Lagi 🌱"; msg = "Jangan menyerah — jelajahi lagi diagram sel interaktif, lalu ulangi quiz ini."; }

  qs("#quizResultTitle").textContent = title;
  qs("#quizResultMsg").textContent = msg;
}

/* ==========================================================================
   20. INISIALISASI
   ========================================================================== */
function init() {
  initLoadingScreen();
  initParticles();
  initMouseEffects();
  initDarkMode();
  initSidebar();
  initSmoothScroll();
  initRippleEffect();
  initScrollReveal();

  renderRailList();
  renderOrganelleGrid();
  renderReferences();

  initCellDiagram();
  initDetailPanel();
  initSearch();
  initQuiz();

  updateProgressUI();
}

document.addEventListener("DOMContentLoaded", init);
