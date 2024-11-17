document.addEventListener("DOMContentLoaded", function () {
    const activeModeText = document.getElementById("activeModeText");
    const metaThemeColor = document.getElementById("meta-theme-color");

    // Mensagens para cada tema no footer
    const footerMessages = {
        dark: "“Portanto, não vos inquieteis com o dia de amanhã, pois o amanhã trará suas próprias preocupações. Basta a cada dia o seu mal.” (Mateus 6, 34)",
        light: "“Falou-lhes, pois, Jesus outra vez, dizendo: Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.” (João 8, 12)",
        golden: "“Porque para Deus nada é impossível” (Lucas 1, 37)",
        coast: "“A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.” (Salmo 119, 105)",
        taiga: "“Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas. Pois o meu jugo é suave e o meu fardo é leve.” (Mateus 11, 28-30)"
    };
    // Função para atualizar o texto do footer
    function updateFooterText(theme) {
        const footerText = document.querySelector("footer p");
        if (footerText) {
            footerText.textContent = footerMessages[theme] || "“Portanto, não vos inquieteis com o dia de amanhã, pois o amanhã trará suas próprias preocupações. Basta a cada dia o seu mal.” (Mateus 6, 34)";
        }
    }

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
                carta: "card-neutro",
                footer: "bg-dark", 
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
            golden: { 
                navbar: "navbar-golden navbar-dark", 
                jumbotron: "jumbotron-golden", 
                main: "main-golden",
                carta: "carta-golden", 
                footer: "footer-golden", 
                metaColor: "#99582A", 
                em: "destaque-golden", 
                logo: "logo-golden",
            },
            coast: { 
                navbar: "navbar-light navbar-coast",    
                jumbotron: "jumbotron-coast", 
                main: "main-coast",
                carta: "card-neutro", 
                footer: "footer-coast", 
                metaColor: "#5E503F", 
                em: "destaque-coast", 
                logo: "logo-coast",
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
            },
        };

        const settings = colorSettings[theme];

        if (settings) {
            if (navbar) navbar.className = `navbar navbar-expand-lg ${settings.navbar}`;
            if (jumbotron) jumbotron.className = `jumbotron text-center ${settings.jumbotron}`;
            if (footer) footer.className = `text-center py-4 ${settings.footer}`;
            if (main) main.className = `${settings.main}`;
            if (metaThemeColor) metaThemeColor.setAttribute("content", settings.metaColor);
            if (activeModeText) activeModeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1) + " Mode";

            if (em) em.className = `${settings.em}`;
            if (logo) {
                logo.classList.remove("logo-blackwhite", "logo-golden", "logo-coast", "logo-taiga");
                logo.classList.add(settings.logo);
            }

            cartas.forEach(carta => {
                carta.className = `carta ${settings.carta}`;
            });

            // Atualiza o texto do footer com base no tema selecionado
            updateFooterText(theme);
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
