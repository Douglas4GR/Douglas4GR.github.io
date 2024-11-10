// Verificar se o usuário já definiu um tema preferido
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.setAttribute("data-theme", "dark");
}

// Alternar entre os temas claro e escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Salvar a preferência do usuário

    // Atualizar os ícones do botão de alternar tema
    const iconMoon = document.getElementById("icon-moon");
    const iconSun = document.getElementById("icon-sun");

    if (newTheme === "dark") {
        iconMoon.style.display = "none";
        iconSun.style.display = "inline";
    } else {
        iconMoon.style.display = "inline";
        iconSun.style.display = "none";
    }
});
