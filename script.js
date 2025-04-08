// Adicionando interação com o botão
document.getElementById("messageButton").addEventListener("click", function() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Bem-vindo à minha página! Espero que você goste!";
    messageDiv.style.color = "#2e8b57"; // Mensagem estilizada
});
