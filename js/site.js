const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-main-nav]");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
        navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement && !event.target.classList.contains("nav-course-toggle")) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menú");
            navigation.classList.remove("is-open");
        }
    });
}
