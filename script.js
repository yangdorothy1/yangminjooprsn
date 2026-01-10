const database = [
    "2-3-5-7 scheduled repetition",
    "DON'T PANIC!",
    "KEEP CALM\nand\nSTUDY ON",
    "Utilize Cornell Notes",
    "Mock Lectures Open Every Evening",
    "SLEEP.\nNOW.",
    "don't bite off more than you can chew",
    "Love Yourself",
    "NIGHT ROUTINE\n1. document\n2. journal\n3. read"
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
