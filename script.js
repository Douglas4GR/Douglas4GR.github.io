// JavaScript personalizado
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada!");
    // Adicione aqui seu código JavaScript para interatividade
});

// Verifica se o usuário já definiu um tema preferido
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // Se não houver tema salvo, usa o tema preferido do sistema
    document.body.setAttribute("data-theme", "dark");
}

// Alterna entre os temas claro e escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Salva a preferência do usuário
});

