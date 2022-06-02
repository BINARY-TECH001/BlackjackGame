let tim = document.querySelector(".time");
let messageEl = document.querySelector(".message-el");
let savedGame = document.querySelector(".result");
let cardEl = document.querySelector(".card-el");
let sumEl = document.querySelector(".sum-el");
let playerEl = document.getElementById("player-el");
let isAlive = false;
let hasBlackjack = false;
let message = "";
let cards = []
let sum = 0;

// let playerName = "Binary";
// let playerChips = 145;
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = playerName + ": $" + playerChips;


//object example
// let castle = {
//     title : "Live like a king in my castle",
//     price : 298,
//     isSuperHost : true,
//     images : ["img/castle1.png", "img/castle2.jpg"]
// }


//using object method to store player details
let player = {
    Name : "Binary",
    Chips : 145
}
playerEl.textContent = player.Name + ": $" + player.Chips;


function getRandomCard(){
    //Math.random is used to generate random number// it starts from 0.00 - 0.9999
    // return Math.floor( Math.random() * 13 ) + 1 //return 1 to 13
    let randonNumber = Math.floor( Math.random() * 13 ) + 1
    if(randonNumber > 10){
        return 10
    } else if (randonNumber == 1){
        return 11
    }else{
        return randonNumber
    }
};

//creating the time functions and displaying it usint textContent
function time(value){
    return value < 10 ? `0${value}` : value;
}


setInterval(function(){
let date = new Date(),
hours = date.getHours(),
minute = date.getMinutes(),
seconds = date.getSeconds(),
day = date.getMonth(),
hrs = hours > 12? date.getHours() % 12 : hours;

tim.textContent = `${time(hrs)} : ${time(minute)} :  ${time(seconds)}`;

}, 1000);


function renderGame(){
    cardEl.textContent = "CARDS: "  ;
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "SUM: " + sum;

    if (sum <= 21){
        message = "Do you want to draw a new card ?";
    }
    else if(sum === 21){
        message = "You've5r got BlackJack";
        hasBlackjack = true;
    }
    else{
        message = "You are out of the game !";
        isAlive = false;
    }
    messageEl.textContent = message
};

function saveGame(){
    savedGame.textContent = "save game: " + sum;
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};



function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};
console.log(cards);