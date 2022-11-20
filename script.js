// Requirements
// Cards should be laid out on a 6x6 grid, all face down initially (i.e. numbers not showing)
// Add pseudo-class to hide number son page load

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

// let body;
// let grid = document.getElementById("#grid");
// let square = document.getElementsByClassName(".square");

// let squareValue = document.getElementsByClassName(".square").value;

// let table = document.getElementById("gamecard");

// let dict = [];
// let cardsturned = 0;
// let pairsturned = 0;
// let card1 = 0;
// let card2 = 0;

// start();

// function start() {
//     dict = [];
//     cardsturned = 0;
//     pairsturned = 0;
//     card1 = 0;
//     card2 = 0;

//     let table = document.getElementById("gamecard");
//     table.innerHTML = "";

//     for (let i = 0; i < 6; i++) {
//         var tr = document.createElement("tr");
//         table.appendChild(tr);
//         for (let j = 0; j < 6; j++) {
//             var td = document.createElement("td");
//             let btn = document.createElement("button");
//             let rdm = Math.floor(Math.random() * (18 - 1 + 1) + 1);
//             while (dict[rdm] == 2) {
//                 rdm = Math.floor(Math.random() * (18 - 1 + 1) + 1);
//             }
//             if (dict[rdm] == 1) {
//                 dict[rdm]++;
//             } else {
//                 dict[rdm] = 1;
//             }
//             btn.innerHTML = "";
//             btn.id = rdm + "-" + dict[rdm];

//             btn.onclick = function () {
//                 btn_click(this);
//             };
//             td.appendChild(btn);
//             tr.appendChild(td);
//         }
//     }
// }

// const cards = document.querySelectorAll(".memory-card");

// let hasFlippedCard = false;
// let firstCard, secondCard;

// function flipCard() {
//     // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//     // this.classList.toggle("flip");
//     this.classList.add("flip");
// }

// cards.forEach((card) => card.addEventListener("click", flipCard));

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    // hasFlippedCard = false;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }

    unflipCards();
}

// let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// isMatch ? disableCards() : unflipCards();

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
    }, 1500);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
