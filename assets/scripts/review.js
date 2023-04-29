const review = [
	{
		nama: "Siti Nadia",
		comment: "“Resepnya lumayan gampang diikuti”",
		profile: "/assets/images/kata-mereka/profile-1.png",
	},
	{
		nama: "Rizaldi",
		comment: "“Baru nyoba padahal udah lumayan enak ehehe”",
		profile: "/assets/images/kata-mereka/profile-2.png",
	},
	{
		nama: "Aisyah Ratu",
		comment: "“Saya udah langganan liat tutorial disini”",
		profile: "/assets/images/kata-mereka/profile-3.png",
	},
	{
		nama: "Putri Lestari",
		comment: "“Resepnya pada cocok untuk masakan nusantara”",
		profile: "/assets/images/kata-mereka/profile-4.png",
	},
	{
		nama: "Yanuarsyah",
		comment: "“Baru pertama kali coba ,ternyata lumayan mudah”",
		profile: "/assets/images/kata-mereka/profile-5.png",
	},
	{
		nama: "Ahmad Rizal",
		comment: "“mantap, memang betul kita harus melestarikan budaya”",
		profile: "/assets/images/kata-mereka/profile-6.png",
	},
];

review.forEach((rev, index) => {
	document.querySelector("#kata-mereka__grid").innerHTML += `
          <div class="lg:flex lg:gap-[1.125rem] lg:items-center">
            <img
              class="max-w-[4.5rem] mb-[0.4375rem] md:max-w-[7.375rem] md:mb-0"
              src="${rev.profile}"
              alt="Profile picture." />
            <div>
              <h3 class="text-sm font-bold md:text-2xl md:mb-2.5">
               ${rev.nama}
              </h3>
              <p
                class="text-[#A3A3A3] text-[0.625rem] mb-1 md:text-base md:mb-2.5">
                ${rev.comment}
              </p>
              <div class="text-[#FFA800] text-sm mr-px md:text-xl">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
	`;
});
