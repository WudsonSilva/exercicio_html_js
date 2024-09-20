document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = document.getElementById("campoA").value;
    let campoB = document.getElementById("campoB").value;
    let mensagem = document.getElementById("mensagem");

    campoA = parseInt(campoA);
    campoB = parseInt(campoB);

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido!";
        mensagem.style.color = "red";
    }
});