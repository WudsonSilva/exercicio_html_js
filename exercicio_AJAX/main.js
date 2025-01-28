document.addEventListener("DOMContentLoaded", async function() {
    const API_URL = "https://api.github.com/users/WudsonSilva";

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const data = await response.json();

        // Atualizando os elementos do DOM
        document.getElementById("profile-avatar").src = data.avatar_url;
        document.getElementById("profile-name").textContent = data.name || "Usuário sem nome";
        document.getElementById("profile-username").textContent = `@${data.login}`;
        document.getElementById("repo-count").textContent = data.public_repos;
        document.getElementById("followers-count").textContent = data.followers;
        document.getElementById("following-count").textContent = data.following;
        document.getElementById("profile-link").href = data.html_url;
    } catch (error) {
        console.error("Erro ao carregar os dados do GitHub:", error);
        alert("Não foi possível carregar as informações do usuário.");
    }
});