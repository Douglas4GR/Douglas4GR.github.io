document.addEventListener("DOMContentLoaded", () => {
    const activeModeText = document.getElementById("activeModeText");
    const metaThemeColor = document.getElementById("meta-theme-color");
    const profileImage = document.getElementById("FotoPerfil"); // Seleciona a imagem na div .carta

    const themes = {
        light: {
            navbar: "navbar-light translucent-white",
            jumbotron: "bg-light",
            footer: "bg-light text-dark",
            metaColor: "#ffffff",
            em: "destaque",
            logo: "logo-mono",
            icon: "bi-sun nav-link",
            imageSrc: "imagens/perfis/perfil-light.png"
        },
        dark: {
            navbar: "navbar-dark translucent-dark",
            jumbotron: "bg-dark",
            footer: "bg-dark text-light",
            metaColor: "#1e1e1e",
            em: "destaque",
            logo: "logo-blackwhite",
            icon: "bi-moon nav-link",
            imageSrc: "imagens/perfis/perfil-dark.png"
        }
    };

    function applyTheme(theme) {
        const settings = themes[theme] || themes.light;
        document.body.setAttribute("data-theme", theme);

        const navbar = document.querySelector("nav");
        const jumbotron = document.querySelector(".jumbotron");
        const footer = document.querySelector("footer");
        const logo = document.querySelector(".logo");
        const ems = document.querySelectorAll("em");

        navbar.className = `navbar navbar-expand-lg fixed-top ${settings.navbar}`;
        jumbotron.className = `jumbotron text-center shadow ${settings.jumbotron}`;
        footer.className = `text-center py-4 ${settings.footer}`;
        metaThemeColor.setAttribute("content", settings.metaColor);
        activeModeText.className = `bi ${settings.icon}`;

        metaThemeColor.setAttribute("content", settings.metaColor);
        const appleStatusBar = document.createElement("meta");
        appleStatusBar.name = "apple-mobile-web-app-status-bar-style";
        appleStatusBar.content = settings.metaColor === "#ffffff" ? "default" : "black";
        document.head.appendChild(appleStatusBar);

        if (profileImage) {
            profileImage.src = settings.imageSrc;
        }

        logo.className = "logo " + settings.logo;
        ems.forEach(em => em.className = settings.em);

        localStorage.setItem("tema", theme);
    }

    function loadTheme() {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const saved = localStorage.getItem("tema");
        const theme = saved || (systemDark ? "dark" : "light");
        applyTheme(theme);
    }

    loadTheme();

    // Listener para mudança de tema do sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (!localStorage.getItem("tema")) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    document.querySelectorAll(".btn-theme").forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.getAttribute("data-theme");
            applyTheme(theme);
            bootstrap.Modal.getInstance(document.getElementById("themeModal"))?.hide();
        });
    });
});