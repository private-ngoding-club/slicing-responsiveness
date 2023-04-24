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
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
  },
  {
    title: "Mengapa nasi padang terkenal",
    deskripsi:
      "“Nasi padang murah dan mengenyangkan,” kata Cindita. di Restoran Sederhana ...",
    image: "./assets/images/tahu-kah/mengapa-nasi-padang.png",
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
