const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-main-nav]");
const whatsappNumber = "525522035373";

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

const whatsappLink = document.createElement("a");
whatsappLink.className = "whatsapp-float";
whatsappLink.href = `https://wa.me/${whatsappNumber}?text=Hola%20CENCADEH%2C%20quiero%20informes.`;
whatsappLink.target = "_blank";
whatsappLink.rel = "noopener noreferrer";
whatsappLink.textContent = "WhatsApp ↗";
whatsappLink.setAttribute("aria-label", "Escribir a CENCADEH por WhatsApp");
document.body.append(whatsappLink);

const studentLink = document.createElement("a");
studentLink.className = "student-float";
studentLink.href = "https://www.cencadeh.com.mx/aulavirtual/";
studentLink.target = "_blank";
studentLink.rel = "noopener noreferrer";
studentLink.textContent = "Aula Virtual ↗";
studentLink.setAttribute("aria-label", "Entrar al Aula Virtual de CENCADEH");
document.body.append(studentLink);

const semaforoButton = document.querySelector("[data-semaforo-button]");

if (semaforoButton) {
    const sampleWeeks = [
        [
            { state: "yellow", hours: "4 h", status: "Practicar" },
            { state: "green", hours: "3 h", status: "Avance" },
            { state: "red", hours: "5 h", status: "Reforzar" }
        ],
        [
            { state: "green", hours: "3 h", status: "Avance" },
            { state: "red", hours: "5 h", status: "Reforzar" },
            { state: "yellow", hours: "4 h", status: "Practicar" }
        ]
    ];
    let week = 0;

    semaforoButton.addEventListener("click", () => {
        week = (week + 1) % sampleWeeks.length;
        document.querySelectorAll("[data-study-row]").forEach((row, index) => {
            const sample = sampleWeeks[week][index];
            row.dataset.state = sample.state;
            row.querySelector("[data-hours]").textContent = sample.hours;
            row.querySelector(".study-status").textContent = sample.status;
        });
        semaforoButton.setAttribute("aria-pressed", String(week === 1));
        semaforoButton.textContent = week === 1 ? "Ver semana de ejemplo anterior" : "Simular revisión semanal";
    });
}
