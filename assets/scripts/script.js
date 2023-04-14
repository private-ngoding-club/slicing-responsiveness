const sidebar = document.querySelector("#sidebar");
const sidebarButtons = document.querySelectorAll(".sidebar__button");

sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let opened = sidebar.getAttribute("data-expanded");

    if (opened == "false") {
      sidebar.setAttribute("data-expanded", true);
      sidebarButtons.forEach((btn) => btn.setAttribute("aria-expanded", true));
    } else {
      sidebar.setAttribute("data-expanded", false);
      sidebarButtons.forEach((btn) => btn.setAttribute("aria-expanded", false));
    }
  });
});
