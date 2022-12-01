// Requirements

// Cards should be laid out on a 6x6 grid, all face down initially (i.e. numbers not showing)
// Add pseudo-class to hide numbers on page load

// There should be a total of 36 cards with the numbers 1-18 (two of each), placed randomly on the grid
// DONE

// Clicking a card should 'reveal' it - showing the hidden number of the card
// Define State
// Card
// Card Turned over

// Clicking a second card should reveal that card

// If the second card has the same number as the first card, both cards should be removed from the board after 3 seconds

// If the second card has a different number to the first card, both cards should be 'hidden' again after 3 seconds (i.e. turned face down)

// The user shouldn't be able to turn over any more cards until the 3 second timer completes and the two revealed cards are either removed (if they matched), or hidden again (if they didn't)

// Once all cards are removed from the board, the game is over and the 'Play again' button should be shown

// Clicking 'Play again' should generate a new, random set of cards on the grid

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function startGame() {
    correct_flips = 0;
    last_flipped = [];
    moves = 0;
    seconds = 0;
    minutes = 0;
    seconds_str = "";
    minutes_str = "";
    // time.innerHTML = "XX:XX";
    // counter.innerHTML = "0";
    // container.innerHTML = "";
    cards.forEach((el) => el.classList.remove("flip"));
    // clearInterval(timer_observer);
    // spreadCards(box);
    // container.childNodes.forEach((node) =>
    //     node.firstElementChild.classList.remove("matchingcards")
    // );
    // startWatching(seconds, minutes);
}
