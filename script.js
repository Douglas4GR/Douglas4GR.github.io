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

        // Configurações de cores para cada tema
        const colorSettings = {
            light: { navbar: "navbar-light bg-light", jumbotron: "bg-light", footer: "bg-dark", metaColor: "#ffffff", em: "destaque-blackwhite", logo: "logo-blackwhite" },
            dark: { navbar: "navbar-dark bg-dark", jumbotron: "bg-dark", footer: "bg-dark", metaColor: "#333333", em: "destaque-blackwhite", logo: "logo-blackwhite" },
            champagne: { navbar: "navbar-champagne navbar-dark", jumbotron: "jumbotron-champagne", footer: "footer-champagne", metaColor: "#99582A", em: "destaque-champagne", logo: "logo-champagne" },
            coast: { navbar: "navbar-light navbar-coast", jumbotron: "jumbotron-coast", footer: "footer-coast", metaColor: "#5E503F", em: "destaque-coast", logo: "logo-coast" },
            taiga: { navbar: "navbar-dark navbar-taiga", jumbotron: "jumbotron-taiga", footer: "footer-taiga", metaColor: "#BC6C25", em: "destaque-taiga", logo: "logo-champagne" },
        };

        const settings = colorSettings[theme];

        if (settings) {
            // Modificando as classes da navbar, jumbotron, footer, e outras
            navbar.className = `navbar navbar-expand-lg ${settings.navbar}`;
            jumbotron.className = `jumbotron text-center ${settings.jumbotron}`;
            footer.className = `text-center py-4 ${settings.footer}`;
            metaThemeColor.setAttribute("content", settings.metaColor);
            activeModeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
            em.className = `${settings.em}`;

            // Alterando a classe do logo
            logo.classList.remove("logo-blackwhite", "logo-champagne", "logo-coast", "logo-taiga"); // Remove todas as classes antigas de logo
            logo.classList.add(settings.logo); // Adiciona a nova classe de logo
        }
    }

    // Detecta o tema preferido do dispositivo
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // Aplica o tema padrão ao carregar a página
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
