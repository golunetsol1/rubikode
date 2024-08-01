// =============================== Owl carousel jQuery plugins =============================== //

$(document).ready(function () {
    var platformSlider = $('#platformSlider');
    var broadRange = $('#broadRange');

    platformSlider.owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    broadRange.owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: true,
                navText: [
                    "<i class='ri-arrow-left-double-line'></i>",
                    "<i class='ri-arrow-right-double-line'></i>"
                ]
            },
            577: {
                items: 3
            },
            768: {
                items: 4
            }
        }
    });
});

// ===============================Bottom Top and Login Button =============================== //

let mybutton = document.getElementById("myBtn");
let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
let span = document.getElementsByClassName("close")[0];

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
mybutton.addEventListener("click", topFunction);

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//=================================== Support Chat window and chat button ===================================//

document.addEventListener('DOMContentLoaded', () => {
    const chatPopup = document.getElementById('chat-popup');
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');
    const messages = document.getElementById('messages');

    function setChatPopupPosition() {
        const buttonRect = openChatButton.getBoundingClientRect();
        if (buttonRect.left < window.innerWidth / 2) {
            chatPopup.style.left = '2%';
            chatPopup.style.right = 'auto';
        } else {
            chatPopup.style.right = '2%';
            chatPopup.style.left = 'auto';
        }
    }

    function openChat() {
        setChatPopupPosition();
        chatPopup.style.display = 'flex';
        openChatButton.style.visibility = 'hidden';
        chatInput.focus();
    }
    function closeChat() {
        chatPopup.style.display = 'none';
        openChatButton.style.visibility = 'visible';
    }
    openChatButton.addEventListener('click', openChat);
    closeChatButton.addEventListener('click', closeChat);
    sendMessageButton.addEventListener('click', () => {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messages.appendChild(messageElement);
            chatInput.value = '';
            sendMessageButton.disabled = true;
            messages.scrollTop = messages.scrollHeight;
        }
    });
    chatInput.addEventListener('input', () => {
        if (chatInput.value.trim() !== '') {
            sendMessageButton.disabled = false;
        } else {
            sendMessageButton.disabled = true;
        }
    });
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessageButton.click();
        }
    });
});