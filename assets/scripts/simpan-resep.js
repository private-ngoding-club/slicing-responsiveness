let savedMakananForStorage =
	JSON.parse(localStorage.getItem("Makanan Tersimpan")) || [];

const saveButton = document.querySelectorAll("#save-button");

saveButton.forEach((button, index) => {
	button.addEventListener("click", () => {
		const makananItem = button.parentNode.parentNode;
		const bookmarkIcon = button.querySelector("i");

		if (makananItem.getAttribute("data-saved") == "false") {
			makananItem.setAttribute("data-saved", true);

			// Change bookmark icon when clicked.
			bookmarkIcon.classList.remove("fa-regular", "gradient--red");
			bookmarkIcon.classList.add("fa-solid", "text-[#F05454]");

			// Add selected food to savedMakananForStorage array.
			mulaiMemasak.forEach((makananObject, index) => {
				if (makananObject.id == makananItem.dataset.id && makananObject) {
					savedMakananForStorage.push(makananObject);
				}
			});
			palingPopulerBig.forEach((makananObject, index) => {
				if (makananObject.id == makananItem.dataset.id && makananObject) {
					savedMakananForStorage.push(makananObject);
				}
			});
			palingPopulerSmall.forEach((makananObject, index) => {
				if (makananObject.id == makananItem.dataset.id && makananObject) {
					savedMakananForStorage.push(makananObject);
				}
			});
		} else {
			makananItem.setAttribute("data-saved", false);

			// Change bookmark icon when clicked.
			bookmarkIcon.classList.remove("fa-solid", "text-[#F05454]");
			bookmarkIcon.classList.add("fa-regular", "gradient--red");

			// Remove selected food from savedMakananForStorage array.
			savedMakananForStorage.forEach((makananObject, index) => {
				if (makananObject.id == makananItem.dataset.id) {
					savedMakananForStorage.splice(index, 1);
				}
			});
		}

		localStorage.setItem(
			"Makanan Tersimpan",
			JSON.stringify(savedMakananForStorage)
		);
	});
});

// Change bookmark icon when load if it is saved before.
savedMakananForStorage.forEach((makanan, index) => {
	const makananBookmarked = document.querySelector(`[data-id="${makanan.id}"]`);
	makananBookmarked.setAttribute("data-saved", true);

	const bookmarkIcon = makananBookmarked.querySelector("i");
	bookmarkIcon.classList.remove("fa-regular", "gradient--red");
	bookmarkIcon.classList.add("fa-solid", "text-[#F05454]");
});
