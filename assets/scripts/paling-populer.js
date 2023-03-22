const palingPopulerBig = [
	{
		title: "Rendang",
		lokasi: "Padang",
		deskripsi: "Makanan khas padang yang terkenal diseluruh Indonesia",
		star: 5,
		lastStar: "fa-solid fa-star",
		komentar: 255,
		image: "./assets/images/paling-populer/rendang.png",
	},
	{
		title: "Papeda",
		lokasi: "Papua",
		deskripsi: "Makanan khas padang yang terkenal diseluruh Indonesia",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 55,
		image: "./assets/images/paling-populer/papeda.png",
	},
	{
		title: "Bakpia",
		lokasi: "Yogyakarta",
		deskripsi: "Makanan khas padang yang terkenal diseluruh Indonesia",
		star: 5,
		lastStar: "fa-solid fa-star",
		komentar: 115,
		image: "./assets/images/paling-populer/bakpia-big.png",
	},
];

const palingPopulerSmall = [
	{
		title: "Sate Bandeng",
		lokasi: "Banten",
		star: 4.7,
		lastStar: "fa-solid fa-star",
		komentar: 25,
		image: "./assets/images/paling-populer/sate-bandeng.png",
	},
	{
		title: "Nasi Lapola",
		lokasi: "Maluku",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 76,
		image: "./assets/images/paling-populer/nasi-lapola.png",
	},
	{
		title: "Nasi Lengko",
		lokasi: "Cirebon",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 90,
		image: "./assets/images/paling-populer/nasi-lengko.png",
	},
	{
		title: "Pedesan Entog",
		lokasi: "Indramayu",
		star: 4.7,
		lastStar: "fa-solid fa-star",
		komentar: 53,
		image: "./assets/images/paling-populer/pedesan-entog.png",
	},
	{
		title: "Mie Gomak",
		lokasi: "Sumatra Utara",
		star: 4.7,
		lastStar: "fa-solid fa-star",
		komentar: 89,
		image: "./assets/images/paling-populer/mie-gomak.png",
	},
	{
		title: "Cumi Cah Kangkung",
		lokasi: "Jambi",
		star: 4.7,
		lastStar: "fa-solid fa-star",
		komentar: 94,
		image: "./assets/images/paling-populer/cumi-cah-kangkung.png",
	},
];

palingPopulerBig.forEach((makanan) => {
	document.querySelector("#paling-populer__grid-column-1").innerHTML += `
              <div id="paling-populer__grid-item--large">
                <div class="h-[13.75rem] mb-1.5 relative shadow-[0_2px_12px_-5px_rgba(0,0,0,0.25)]">
                  <img class="w-full h-full object-cover object-center rounded-lg" src="${makanan.image}" alt="Makanan" loading="lazy" />
                  <button class="flex justify-center items-center w-[3.625rem] h-[3.375rem] rounded-bl-lg rounded-tr-lg bg-white absolute right-0 top-0 cursor-pointer">
                    <i class="fa-regular fa-bookmark text-[1.375rem] gradient--red"></i>
                  </button>
                  <div class="flex gap-[0.1875rem] absolute left-1/2 bottom-3 -translate-x-1/2">
                    <span class="w-[0.4375rem] aspect-square rounded-full bg-gradient-to-r from-[#F95E5E] to-[#AF2E2E] cursor-pointer"></span>
                    <span class="w-[0.4375rem] aspect-square rounded-full bg-white cursor-pointer"></span>
                    <span class="w-[0.4375rem] aspect-square rounded-full bg-white cursor-pointer"></span>
                    <span class="w-[0.4375rem] aspect-square rounded-full bg-white cursor-pointer"></span>
                    <span class="w-[0.4375rem] aspect-square rounded-full bg-white cursor-pointer"></span>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                    <h3 class="text-[1.375rem] font-bold mb-2"><a href="#">${makanan.title}</a></h3>
                    <div>
                      <i class="fa-sharp fa-solid fa-location-dot text-sm mr-px gradient--red"></i>
                      <span class="text-xs gradient--red">${makanan.lokasi}</span>
                    </div>
                  </div>
                </div>
                <p class="text-sm leading-[1.125rem] w-10/12 mb-2">${makanan.deskripsi}</p>
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <div class="text-[#FFA800] text-[0.8125rem] mr-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="${makanan.lastStar}"></i>
                    </div>
                    <span class="text-sm">${makanan.star}/5</span>
                  </div>
                  <div class="flex items-center text-[#A3A3A3]">
                    <i class="fa-solid fa-comments text-[0.8125rem] mr-[0.1875rem]"></i>
                    <span class="text-sm">${makanan.komentar} komentar</span>
                  </div>
                </div>
              </div>`;
});

palingPopulerSmall.forEach((makanan) => {
	document.querySelector("#paling-populer__grid-column-2").innerHTML += `
              <div id="paling-populer__grid-item--small">
                <div class="h-[9.125rem] mb-[0.3125rem] relative shadow-[0_6px_12px_-5px_rgba(0,0,0,0.25)]">
                  <img class="w-full h-full object-cover object-center rounded" src="${makanan.image}" alt="Makanan" loading="lazy" />
                  <button class="flex justify-center items-center w-8 h-8 rounded-bl rounded-tr bg-white absolute right-0 top-0 cursor-pointer">
                    <i class="fa-regular fa-bookmark text-xs gradient--red"></i>
                  </button>
                </div>
                <div>
                  <div class="flex flex-col mb-3">
                    <h3 class="text-base font-bold"><a href="#">${makanan.title}</a></h3>
                    <div>
                      <i class="fa-sharp fa-solid fa-location-dot text-sm mr-px gradient--red"></i>
                      <span class="text-xs gradient--red">${makanan.lokasi}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-0.5">
                  <div class="flex items-center">
                    <div class="text-[#FFA800] text-[0.8125rem] mr-1">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="${makanan.lastStar}"></i>
                    </div>
                    <span class="text-sm">${makanan.star}/5</span>
                  </div>
                  <div class="flex items-center text-[#A3A3A3]">
                    <i class="fa-solid fa-comments text-[0.8125rem] mr-[0.1875rem]"></i>
                    <span class="text-sm">${makanan.komentar} komentar</span>
                  </div>
                </div>
              </div>`;
});
