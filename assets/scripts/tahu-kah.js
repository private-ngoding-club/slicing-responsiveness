const currentLocation = location.pathname;
const homeUrl = ["/", "/index.html"];
const limit = homeUrl.includes(currentLocation) ? 2 : 9;

const tahuKahItems = [
  {
    title: "5 Oleh-oleh khas Banten",
    deskripsi:
      "5 Makanan Khas Banten yang Paling Bikin Ngiler, Wajib Coba! · 1. Sate Bebek · ...",
    image: "./assets/images/tahu-kah/5-oleh-oleh.png",
  },
  {
    title: "7 Ide bisnis kuliner modern",
    deskripsi:
      "7 Ide Bisnis Makanan Hasil Budidaya. Makanan hasil budidaya ... ",
    image: "./assets/images/tahu-kah/7-ide-bisnis.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa kita harus melestarikan budaya ?",
    deskripsi:
      "“budaya daerah merupakan aset berharga bagi kehidupan berbangsa ...",
    image: "./assets/images/tahu-kah/blog-4.png",
  },
  {
    title: "Yuk coba kunjungi 5 wisata di Kalimantan",
    deskripsi:
      "“5 Destinasi Wisata Terbaik di Kalimantan, Surganya Pecinta Alam ...",
    image: "./assets/images/tahu-kah/blog-5.png",
  },
  {
    title: "Sejarah masakan khas Indonesia",
    deskripsi:
      "“Indonesia awalnya dikenal sebagai negeri penghasil rempah yang ...",
    image: "./assets/images/tahu-kah/blog-6.png",
  },
  {
    title: "Keunikan sejarah dibalik jajan seblak",
    deskripsi:
      "“Seblak merupakan penganan khas Bandung yang sebenarnya mirip dengan ...",
    image: "./assets/images/tahu-kah/blog-7.png",
  },
  {
    title: "5 Tempat Oleh-oleh Khas Yogyakarta",
    deskripsi:
      "“1. Mamahke Jogja · 2. Bakpia · 3. Yangko · 4. Geplak · 5. Gudeg Kering ...",
    image: "./assets/images/tahu-kah/blog-8.png",
  },
  {
    title: "Kalau bermain ke aceh, jangan lupa kunjungi 5 tempat ini",
    deskripsi:
      "“Di sini ada banyak tempat wisata menarik yang wajib Anda kunjungi, ...",
    image: "./assets/images/tahu-kah/blog-9.png",
  },
];

tahuKahItems.forEach((item, index) => {
  if (index <= limit) {
    document.querySelector("#tahu-kah__grid").innerHTML += `
          <div>
            <div class="mb-5 relative">
              <img
                class="w-full h-auto rounded-lg"
                src="${item.image}"
                alt="Thumbnail" />
            </div>
            <h3 class="text-[1.375rem] font-bold mb-2 xl:text-2xl xl:mb-2.5">
              <a href="#">${item.title}</a>
            </h3>
            <p class="text-sm leading-[1.125rem] xl:text-base xl:leading-5">
              ${item.deskripsi}
            </p>
          </div>`;
  }
});
