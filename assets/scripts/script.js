const sidebar = document.querySelector("#sidebar");
const sidebarButton = document.querySelectorAll(".sidebar__button");

sidebarButton.forEach((button) => {
  button.addEventListener("click", () => {
    let opened = sidebar.getAttribute("aria-expanded");

    if (opened == "false") {
      sidebar.setAttribute("aria-expanded", true);
    } else {
      sidebar.setAttribute("aria-expanded", false);
    }
  });
});
