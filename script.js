const database = [
    "2-3-5-7 scheduled repetition",
    "DON'T PANIC!",
    "KEEP CALM AND STUDY ON",
    "Utilize Cornell Notes",
    "Mock Lectures Open Every Evening"
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
