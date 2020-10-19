var compchc;
var userchc = (window.prompt("Enter your choice rock, paper or scissors :")).toLowerCase();
var random_number = Math.random();
if (userchc === 'paper' || userchc === 'rock' || userchc === 'scissors') {
    if (random_number < 0.30) compchc = "rock";
    else if (random_number >= 0.30 && random_number < 0.65) compchc = "paper";
    else compchc = "scissors";
    window.console.log("You chose " + userchc + " Computer chose " + compchc);
    game(userchc, compchc);
} else {
    window.alert("You have entered invalid choice...");
}

function game(userchc, compchc) {
    if (userchc === "scissors") {
        if (userchc === compchc) {
            window.alert("The result is a tie!");
        } else if (compchc === "rock") {
            window.alert("Computer chose rock & User chose scissors \n Computer Wins!");
        } else {
            window.alert("User chose scissors & Computer chose paper \n User Wins!");
        }
    }
    if (userchc === "rock") {
        if (userchc === compchc) {
            window.alert("The result is a tie!");
        } else if (compchc === "scissors") {
            window.alert("User chose Rock & Computer chose Scissors \n User Wins!");
        } else {
            window.alert("Computer chose Paper & User chose Rock \n Computer Wins!");
        }
    }
    if (userchc === "paper") {
        if (userchc === compchc) {
            window.alert("The result is a tie!");
        } else if (compchc === "rock") {
            window.alert("User chose Paper & Computer chose Rock \n User Wins!");
        } else {
            window.alert("Computer chose Scissors & User chose Paper \n Computer Wins!");
        }
    }
}