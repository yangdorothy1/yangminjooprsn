const database = [
    "Evidence Based!",
    "Love Yourself",
    "Just Do It",
    "Keep Going",
    "Coffee Time ☕",
    "Focus On Now",
    "You Got This!"
];

const messageBox = document.getElementById('message-box');
const nextBtn = document.getElementById('btn-next');

function showRandomMessage() {
    messageBox.innerText = "...";
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * database.length);
        messageBox.innerText = database[randomIndex];
    }, 150);
}

nextBtn.addEventListener('click', showRandomMessage);
showRandomMessage();
