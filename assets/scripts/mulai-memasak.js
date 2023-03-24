const mulaiMemasak = [
	{
		title: "Sate Bandeng",
		lokasi: "Banten",
		star: 4.2,
		lastStar: "fa-regular fa-star",
		komentar: 25,
		image: "./assets/images/mulai-memasak/sate-bandeng.png",
	},
	{
		title: "Nasi Lapola",
		lokasi: "Maluku",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 25,
		image: "./assets/images/mulai-memasak/nasi-lapola.png",
	},
	{
		title: "Papeda",
		lokasi: "Papua",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 53,
		image: "./assets/images/mulai-memasak/papeda.png",
	},
	{
		title: "Nasi Jinggo",
		lokasi: "Bali",
		star: 4.3,
		lastStar: "fa-regular fa-star",
		komentar: 34,
		image: "./assets/images/mulai-memasak/nasi-jinggo.png",
	},
	{
		title: "Karedok",
		lokasi: "Bandung",
		star: 5,
		lastStar: "fa-solid fa-star",
		komentar: 67,
		image: "./assets/images/mulai-memasak/karedok.png",
	},
	{
		title: "Bakpia",
		lokasi: "Yogyakarta",
		star: 5,
		lastStar: "fa-solid fa-star",
		komentar: 113,
		image: "./assets/images/mulai-memasak/bakpia.png",
	},
	{
		title: "Sop Konro",
		lokasi: "Sulawesi Selatan",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 89,
		image: "./assets/images/mulai-memasak/sop-konro.png",
	},
	{
		title: "Soto Banjar",
		lokasi: "Kalimantan",
		star: 4.7,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 90,
		image: "./assets/images/mulai-memasak/soto-banjar.png",
	},
	{
		title: "Nasi Kutaraja",
		lokasi: "Nusa Tenggara Barat",
		star: 4,
		lastStar: "fa-regular fa-star",
		komentar: 95,
		image: "./assets/images/mulai-memasak/nasi-kutaraja.png",
	},
	{
		title: "Sate Padang",
		lokasi: "Padang",
		star: 4,
		lastStar: "fa-regular fa-star",
		komentar: 51,
		image: "./assets/images/mulai-memasak/sate-padang.png",
	},
	{
		title: "Gulai Cancang",
		lokasi: "Padang",
		star: 4.9,
		lastStar: "fa-solid fa-star",
		komentar: 72,
		image: "./assets/images/mulai-memasak/gulai-cancang.png",
	},
	{
		title: "Sambal Colo Colo",
		lokasi: "Papua",
		star: 4.5,
		lastStar: "fa-solid fa-star-half-stroke",
		komentar: 61,
		image: "./assets/images/mulai-memasak/sambal-colo-colo.png",
	},
];

mulaiMemasak.forEach((makanan) => {
	document.querySelector("#mulai-memasak__grid").innerHTML += `
	    <div id="mulai-memasak__grid-item"  class="mb-5 xl:mb-[1.625rem]">
	      <div class="h-[9.125rem] mb-[0.3125rem] relative shadow-[0_6px_12px_-5px_rgba(0,0,0,0.25)] xl:h-[17.25rem] xl:mb-3">
	        <img class="w-full h-full object-cover object-center rounded" src="${makanan.image}" alt="Makanan" loading="lazy" />
	        <button class="flex justify-center items-center w-8 h-8 rounded-bl rounded-tr bg-white absolute right-0 top-0 cursor-pointer xl:w-[3.625rem] xl:h-[3.625rem]">
	          <i class="fa-regular fa-bookmark text-xs gradient--red xl:text-xl"></i>
	        </button>
	      </div>
	      <div>
	        <div class="flex flex-col mb-3 xl:mb-[0.8125rem]">
	          <h3 class="text-base font-bold xl:text-2xl"><a href="#">${makanan.title}</a></h3>
	          <div>
	            <i class="fa-sharp fa-solid fa-location-dot text-sm mr-px gradient--red"></i>
	            <span class="text-xs gradient--red xl:text-sm">${makanan.lokasi}</span>
	          </div>
	        </div>
	      </div>
	      <div class="flex flex-col gap-0.5 md:flex-row md:justify-between">
	        <div class="flex items-center">
	          <div class="text-[#FFA800] text-[0.8125rem] mr-1 xl:text-[0.9375rem]">
	            <i class="fa-solid fa-star"></i>
	            <i class="fa-solid fa-star"></i>
	            <i class="fa-solid fa-star"></i>
	            <i class="fa-solid fa-star"></i>
	            <i class="${makanan.lastStar}"></i>
	          </div>
	          <span class="text-sm xl:text-base">${makanan.star}/5</span>
	        </div>
	        <div class="flex items-center text-[#A3A3A3]">
	          <i class="fa-solid fa-comments text-[0.8125rem] mr-[0.1875rem] xl:text-[0.9375rem]"></i>
	          <span class="text-sm xl:text-base">${makanan.komentar} komentar</span>
	        </div>
	      </div>
	    </div>`;
});
