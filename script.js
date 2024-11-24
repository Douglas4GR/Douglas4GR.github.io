document.addEventListener("DOMContentLoaded", function () {
    const activeModeText = document.getElementById("activeModeText");
    const metaThemeColor = document.getElementById("meta-theme-color");

    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        const navbar = document.querySelector("nav");
        const jumbotron = document.querySelector(".jumbotron");
        const footer = document.querySelector("footer");
        const ems = document.querySelectorAll("em");
        const logo = document.querySelector(".logo");
        const main = document.querySelector("main");
        const cartas = document.querySelectorAll(".carta");

        const colorSettings = {
            light: { 
                navbar: "navbar-light bg-light", 
                jumbotron: "bg-light", 
                main: "",
                carta: "card-neutro",
                footer: "bg-light text-dark", 
                metaColor: "#ffffff", 
                em: "destaque-blackwhite", 
                logo: "logo-blackwhite",
            },
            dark: { 
                navbar: "navbar-dark bg-dark dark", 
                jumbotron: "bg-dark", 
                main: "",
                carta: "card-neutro",
                footer: "bg-dark", 
                metaColor: "#333333", 
                em: "destaque-blackwhite", 
                logo: "logo-blackwhite",
            },
            dg: { 
                navbar: "navbar-dark navbar-dg", 
                jumbotron: "jumbotron-dg", 
                main: "main-dg",
                carta: "blur-card", 
                footer: "footer-dg", 
                metaColor: "#BC6C25", 
                em: "destaque-dg", 
                logo: "logo-dg",
            },
        };

        const settings = colorSettings[theme];

        if (settings) {
            if (navbar) navbar.className = `navbar navbar-expand-lg fixed-top ${settings.navbar}`;
            if (jumbotron) jumbotron.className = `jumbotron text-center ${settings.jumbotron}`;
            if (footer) footer.className = `text-center py-4 ${settings.footer}`;
            if (main) main.className = `${settings.main}`;
            if (metaThemeColor) metaThemeColor.setAttribute("content", settings.metaColor);
            if (activeModeText) activeModeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1) + " Mode";

            if (logo) {
                logo.classList.remove("logo-blackwhite", "logo-golden", "logo-coast", "logo-dg");
                logo.classList.add(settings.logo);
            }

            ems.forEach(em => {
                em.className = `${settings.em}`;
            });
            cartas.forEach(carta => {
                carta.className = `carta ${settings.carta}`;
            });
        }
        localStorage.setItem('tema', theme);
    }

    function carregarTema() {
        const temaSistema = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        const temaAtual = localStorage.getItem('tema') || temaSistema || 'dg';
        applyTheme(temaAtual);
    }
    carregarTema();

    document.querySelectorAll(".btn-theme").forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-theme");
            applyTheme(selectedTheme);

            const themeModal = bootstrap.Modal.getInstance(document.getElementById("themeModal"));
            themeModal.hide();
        });
    });
});
