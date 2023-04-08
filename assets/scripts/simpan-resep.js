let savedMakananForStorage =
  JSON.parse(localStorage.getItem("Makanan Tersimpan")) || [];

const saveButton = document.querySelectorAll("#save-button");

saveButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    const makananItem = button.parentNode.parentNode;
    const makananItemId = makananItem.getAttribute("data-id");
    const bookmarkIcon = button.querySelector("i");

    const isItemExist = savedMakananForStorage.find(
      (item) => item.id == makananItemId
    );

    const allCurrentMakananItem = document.querySelectorAll(
      `[data-id="${makananItemId}"]`
    );

    if (isItemExist === undefined) {
      // Change bookmark icon when clicked.
      allCurrentMakananItem.forEach((item) => {
        item.querySelector("i").classList.remove("fa-regular", "gradient--red");
        item.querySelector("i").classList.add("fa-solid", "text-[#F05454]");
      });

      // Add selected food to savedMakananForStorage array.
      dataMakanan.forEach((makananObject, index) => {
        if (makananObject.id == makananItem.dataset.id && makananObject) {
          savedMakananForStorage.push(makananObject);
        }
      });
    } else {
      // Change bookmark icon when clicked.
      allCurrentMakananItem.forEach((item) => {
        item.querySelector("i").classList.remove("fa-solid", "text-[#F05454]");
        item.querySelector("i").classList.add("fa-regular", "gradient--red");
      });

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
  const makananBookmarked = document.querySelectorAll(
    `[data-id="${makanan.id}"]`
  );

  makananBookmarked.forEach((makanan) => {
    const bookmarkIcon = makanan.querySelector("i");
    bookmarkIcon.classList.remove("fa-regular", "gradient--red");
    bookmarkIcon.classList.add("fa-solid", "text-[#F05454]");
  });
});
