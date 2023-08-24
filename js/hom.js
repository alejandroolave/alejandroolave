let slider = document.querySelector(".slider");
let moveDerecha = document.querySelector(".flechaderecha");
let moveIzquierda = document.querySelector(".flechaizquierda");

let imegenes = document.querySelectorAll(".imgcarro").length;
let contador = 0;

function cambioDerecha() {
    contador ++; 
    if (contador>imegenes-1){
        contador=0;
    }

    slider.style.marginLeft=`-${contador*100}%`;


}
moveDerecha.addEventListener("click",cambioDerecha);

function cambioIzquierda() {
    contador --; 
    if (contador<0){
        contador= imegenes-1;
    }

    slider.style.marginLeft=`-${contador*100}%`;


}

document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const closeButton = document.getElementById("close-button");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    chatButton.addEventListener("click", function () {
        chatContainer.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        chatContainer.style.display = "none";
    });

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    });
});
