
const cardValues = ["🐌", "🐶", "🐔", "🐘", "🦆", "🐪", "🐻", "🦅"];
let cards = [...cardValues, ...cardValues];
cards = shuffle(cards); 

const gameBoard = document.getElementById("game-board");
let flippedCards = [];
let matchedPairs = 0;

cards.forEach(value => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    card.innerText = ";)";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard() {
    if (flippedCards.length === 2) return;

    this.classList.add("flipped");
    this.innerText = this.dataset.value;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        if (matchedPairs === cardValues.length) {
            setTimeout(() => alert("Hűha,űgyes voltál kedves barátom!"), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.innerText = ";)";
            card2.innerText = ";)";
        }, 1000);
    }
    flippedCards = [];
}
