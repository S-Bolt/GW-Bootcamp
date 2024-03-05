let playAgain
let totalWins = 0;
let totalLosses = 0
let totalTies = 0

//game loop
do{
    const userChoice = getUserChoice();
    alert(`You chose: ${userChoice}`);

    const computerChoice = getRandomChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    //counts based on results
    if (result === `tie`) {
        totalTies++;
        alert(`It's a tie.`);
    } else if(result === `win`) {
        totalWins++;
        alert(`You win!`);
    } else {
        totalLosses++;
        alert(`You lose!`);
    }
        alert(`Total Wins: ${totalWins}\nTotal Ties:${totalTies}\nTotal Loses: ${totalLosses}`);

    //play again?
    playAgain = confirm(`Do you want to play again? (Okay/Cancel)`);

    if (!playAgain) {
        alert(`Thanks for playing! Goodbye.`);
    }
} while (playAgain);


// Function to get a valid user choice
function getUserChoice() {
    let userChoice;
    do {
        userChoice = prompt('Enter R, P, or S:').toUpperCase();
    } while (!['R', 'P', 'S'].includes(userChoice));
    return userChoice;
}

//computer choice
function getRandomChoice() {
    const choices = [`R`, `P`, `S`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
 const computerChoice= getRandomChoice();
 console.log(`Computer chose: ${computerChoice}`);

 //determine winner

 function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `tie`;
    }   else if (
        (userChoice ===`R` && computerChoice === `S`)||  
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')  
    ){
        return  `win`;
    } else {
        return `loss`;
    }
}


