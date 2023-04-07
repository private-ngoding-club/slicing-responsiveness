// Paling Populer.
palingPopulerBig.forEach((makanan) => {
	document.querySelector("#paling-populer__grid-column-1").innerHTML += `
              <div id="paling-populer__grid-item--large" data-id="${makanan.id}" data-saved="false">
                <div class="h-[13.75rem] mb-1.5 relative shadow-[0_2px_12px_-5px_rgba(0,0,0,0.25)]">
                  <img class="w-full h-full object-cover object-center rounded-lg" src="${makanan.image}" alt="Makanan" loading="lazy" />
                  <button id="save-button" class="flex justify-center items-center w-[3.625rem] h-[3.375rem] rounded-bl-lg rounded-tr-lg bg-white absolute right-0 top-0 cursor-pointer">
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
              <div id="paling-populer__grid-item--small" data-id="${makanan.id}" data-saved="false">
                <div class="h-[9.125rem] mb-[0.3125rem] relative shadow-[0_6px_12px_-5px_rgba(0,0,0,0.25)]">
                  <img class="w-full h-full object-cover object-center rounded" src="${makanan.image}" alt="Makanan" loading="lazy" />
                  <button id="save-button" class="flex justify-center items-center w-8 h-8 rounded-bl rounded-tr bg-white absolute right-0 top-0 cursor-pointer">
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

// Mulai Memasak.
mulaiMemasak.forEach((makanan) => {
	document.querySelector("#mulai-memasak__grid").innerHTML += `
	    <div id="mulai-memasak__grid-item" class="mb-5 xl:mb-[1.625rem]" data-id="${makanan.id}" data-saved="false">
	      <div class="h-[9.125rem] mb-[0.3125rem] relative shadow-[0_6px_12px_-5px_rgba(0,0,0,0.25)] xl:h-[17.25rem] xl:mb-3">
	        <img class="w-full h-full object-cover object-center rounded" src="${makanan.image}" alt="Makanan" loading="lazy" />
	        <button id="save-button" class="flex justify-center items-center w-8 h-8 rounded-bl rounded-tr bg-white absolute right-0 top-0 cursor-pointer xl:w-[3.625rem] xl:h-[3.625rem]">
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
