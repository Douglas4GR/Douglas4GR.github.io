document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const activeModeText = document.getElementById("activeModeText");
    const metaThemeColor = document.getElementById("meta-theme-color");

    // Função para aplicar o tema selecionado
    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        const navbar = document.querySelector("nav");
        const jumbotron = document.querySelector(".jumbotron");
        const footer = document.querySelector("footer");
        const em = document.querySelector("em");
        const logo = document.querySelector(".logo");
        const main = document.querySelector("main");
        const cartas = document.querySelectorAll(".carta"); // Seleciona todas as instâncias de .carta

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
                logo: "logo-blackwhite"
            },
            dark: { 
                navbar: "navbar-dark bg-dark", 
                jumbotron: "bg-dark", 
                main: "",
                carta: "",
                footer: "bg-dark", 
                metaColor: "#333333", 
                em: "destaque-blackwhite", 
                logo: "logo-blackwhite" 
            },
            champagne: { 
                navbar: "navbar-champagne navbar-dark", 
                jumbotron: "jumbotron-champagne", 
                main: "main-champagne",
                carta: "carta-champagne", // Classe específica para a carta
                footer: "footer-champagne", 
                metaColor: "#99582A", 
                em: "destaque-champagne", 
                logo: "logo-champagne" 
            },
            coast: { 
                navbar: "navbar-light navbar-coast", 
                jumbotron: "jumbotron-coast", 
                main: "main-coast",
                carta: "carta-coast", // Classe específica para a carta
                footer: "footer-coast", 
                metaColor: "#5E503F", 
                em: "destaque-coast", 
                logo: "logo-coast" 
            },
            taiga: { 
                navbar: "navbar-dark navbar-taiga", 
                jumbotron: "jumbotron-taiga", 
                main: "main-taiga",
                carta: "blur-card", // Classe específica para a carta
                footer: "footer-taiga", 
                metaColor: "#BC6C25", 
                em: "destaque-taiga", 
                logo: "logo-taiga" 
            },
        };

        const settings = colorSettings[theme];

        if (settings) {
            navbar.className = `navbar navbar-expand-lg ${settings.navbar}`;
            jumbotron.className = `jumbotron text-center ${settings.jumbotron}`;
            footer.className = `text-center py-4 ${settings.footer}`;
            main.className = `${settings.main}`;
            metaThemeColor.setAttribute("content", settings.metaColor);
            activeModeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);

            if (em) {
                em.className = `${settings.em}`;
            }
            if (logo) {
                logo.classList.remove("logo-blackwhite", "logo-champagne", "logo-coast", "logo-taiga");
                logo.classList.add(settings.logo);
            }

            cartas.forEach(carta => {
                carta.className = `carta ${settings.carta}`; // Aplica a classe de tema específica a cada carta
            });
        }
    }

    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(defaultTheme);

    // Event listener para cada item do dropdown
    dropdownItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedTheme = item.getAttribute("data-theme");
            applyTheme(selectedTheme);
        });
    });
});
