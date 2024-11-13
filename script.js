document.addEventListener("DOMContentLoaded", function () {
    const activeModeText = document.getElementById("activeModeText");
    const metaThemeColor = document.getElementById("meta-theme-color");
    const botdrop = document.getElementById("themeSelectorButton"); // Botão que abre o modal

    // Função para aplicar o tema selecionado
    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        const navbar = document.querySelector("nav");
        const jumbotron = document.querySelector(".jumbotron");
        const footer = document.querySelector("footer");
        const em = document.querySelector("em");
        const logo = document.querySelector(".logo");
        const main = document.querySelector("main");
        const cartas = document.querySelectorAll(".carta");

        // Configurações de cores para cada tema
        const colorSettings = {
            light: { 
                navbar: "navbar-light bg-light", 
                jumbotron: "bg-light", 
                main: "",
                carta: "",
                footer: "bg-dark", 
                metaColor: "#ffffff", 
                em: "destaque-blackwhite", 
                logo: "logo-blackwhite",
                botdrop: "btn-outline-dark"
            },
            dark: { 
                navbar: "navbar-dark bg-dark dark", 
                jumbotron: "bg-dark", 
                main: "",
                carta: "",
                footer: "bg-dark", 
                metaColor: "#333333", 
                em: "destaque-blackwhite", 
                logo: "logo-blackwhite",
                botdrop: "btn-outline-light"
            },
            champagne: { 
                navbar: "navbar-champagne navbar-dark", 
                jumbotron: "jumbotron-champagne", 
                main: "main-champagne",
                carta: "carta-champagne", 
                footer: "footer-champagne", 
                metaColor: "#99582A", 
                em: "destaque-champagne", 
                logo: "logo-champagne",
                botdrop: "btn-outline-champagne"
            },
            coast: { 
                navbar: "navbar-light navbar-coast", 
                jumbotron: "jumbotron-coast", 
                main: "main-coast",
                carta: "carta-coast", 
                footer: "footer-coast", 
                metaColor: "#5E503F", 
                em: "destaque-coast", 
                logo: "logo-coast",
                botdrop: "btn-outline-coast"
            },
            taiga: { 
                navbar: "navbar-dark navbar-taiga", 
                jumbotron: "jumbotron-taiga", 
                main: "main-taiga",
                carta: "blur-card", 
                footer: "footer-taiga", 
                metaColor: "#BC6C25", 
                em: "destaque-taiga", 
                logo: "logo-taiga",
                botdrop: "btn-outline-taiga"
            },
        };

        const settings = colorSettings[theme];

        if (settings) {
            if (navbar) navbar.className = `navbar navbar-expand-lg ${settings.navbar}`;
            if (jumbotron) jumbotron.className = `jumbotron text-center ${settings.jumbotron}`;
            if (footer) footer.className = `text-center py-4 ${settings.footer}`;
            if (main) main.className = `${settings.main}`;
            if (metaThemeColor) metaThemeColor.setAttribute("content", settings.metaColor);
            if (activeModeText) activeModeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
            if (botdrop) botdrop.className = `btn btn-sm ${settings.botdrop}`;

            if (em) em.className = `${settings.em}`;
            if (logo) {
                logo.classList.remove("logo-blackwhite", "logo-champagne", "logo-coast", "logo-taiga");
                logo.classList.add(settings.logo);
            }

            cartas.forEach(carta => {
                carta.className = `carta ${settings.carta}`;
            });
        }
    }

    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(defaultTheme);

    // Event listener para os botões de tema no modal
    document.querySelectorAll(".btn-theme").forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-theme");
            applyTheme(selectedTheme);

            // Fecha o modal após a seleção
            const themeModal = bootstrap.Modal.getInstance(document.getElementById("themeModal"));
            themeModal.hide();
        });
    });
});
