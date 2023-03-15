const sidebar = document.querySelector("#sidebar");
const sidebarButton = document.querySelector("#sidebar__button");

sidebarButton.addEventListener("click", () => {
	let opened = sidebarButton.getAttribute("data-sidebar-expanded");

	if (opened == "false") {
		sidebarButton.dataset.sidebarExpanded = "true";
		// sidebar.dataset.sidebarExpanded = "true";
		sidebar.setAttribute("aria-expanded", true);
	} else {
		sidebarButton.dataset.sidebarExpanded = "false";
		// sidebar.dataset.sidebarExpanded = "false";
		sidebar.setAttribute("aria-expanded", false);
	}
});
