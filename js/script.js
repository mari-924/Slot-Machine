let img_names = ["bell", "cherry", "bar"];

let img_1 = document.querySelector("#first");
img_1.src = "/images/" + img_names[(Math.floor(Math.random()*2)+1)] + ".jpg";

let img_2 = document.querySelector("#second");
img_2.src = "/images/" + img_names[(Math.floor(Math.random()*2)+1)] + ".jpg";

let img_3 = document.querySelector("#third");
img_3.src = "/images/" + img_names[(Math.floor(Math.random()*2)+1)] + ".jpg";

document.querySelector("#credits_btn").addEventListener("click", setCredits);
document.querySelector("#bet_btn").addEventListener("click", getBet);
document.querySelector("#spin_btn").addEventListener("click", displaySymbols);

let credits = document.querySelector("#credits");
let output = document.querySelector("#output");

let winnings = 0;
let loss = 0;
let amount = 0;
let currentCredits = 0;
let currentBet = 0;


function getBet() {
    let bet = Number(document.querySelector("#bet").value);
  
    if (bet <= 0) {
        output.textContent = "Not a valid bet! Must be greater than $0!";
    } else if (bet + currentBet > currentCredits) {
        output.textContent = "Not enough credits to add that bet!";
    } else {
        currentBet += bet;
        output.textContent = "Current Bet: " + currentBet;
    }
}

function displaySymbols(){
    if (currentBet <= 0) {
        output.textContent = "Place a valid bet before spinning!";
        return;
    }
    
    currentCredits -= currentBet;

    let first = Math.floor(Math.random() * 3);
    let second = Math.floor(Math.random() * 3);
    let third = Math.floor(Math.random() * 3);

    img_1.src = "/images/" + img_names[first] + ".jpg";
    img_2.src = "/images/" + img_names[second] + ".jpg";
    img_3.src = "/images/" + img_names[third] + ".jpg";

    if(first === second && second === third){
        win(currentBet);
    } else {
        lose(currentBet);
    }

    credits.textContent = "Credits: " + currentCredits;
    currentBet = 0;
}

function setCredits() {
    let inputCredits = Number(document.querySelector("#credit_amount").value);
    if (inputCredits <= 0) {
        output.textContent = "Enter a valid amount of credits.";
    } else {
        currentCredits += inputCredits;
        credits.textContent = "Credits: " + currentCredits;
        output.textContent = "Credits added! Total Credits: " + currentCredits;
    }
}

function win(bet) {
    currentCredits += bet * 2;
    winnings += bet * 2; 
    output.textContent = "YOU WIN! +" + (bet * 2) + " credits.";
}

function lose(bet){
    loss += bet;     
    output.textContent = "YOU LOSE!";
}
