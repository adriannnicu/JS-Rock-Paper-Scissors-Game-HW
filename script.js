var gamePossibilities = ["Rock", "Paper", "Scissors"];

var getComputerPick = gamePossibilities[Math.floor(Math.random() * 3)];
console.log("Computer Pick " + getComputerPick);

var getUserPick = gamePossibilities[Math.floor(Math.random() * 3)];
console.log("User Pick " + getUserPick);

function play() {
    if(getComputerPick === 'Rock' && getUserPick === 'Scissors' || getComputerPick === 'Scissors' && getUserPick === 'Paper' || getComputerPick === 'Paper' && getUserPick === 'Rock') {
        console.log('Computer Win!')
    } else if(getUserPick === 'Rock' && getComputerPick === 'Scissors' || getUserPick === 'Scissors' && getComputerPick === 'Paper' || getUserPick === 'Paper' && getComputerPick === 'Rock') {
        console.log('User Win!')
    } else {
        console.log('Its a tie!')
    }
}

play();