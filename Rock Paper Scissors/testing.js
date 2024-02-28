function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return pick = "Rock";
    }
    
    else if (choice == 1) {
        return pick = "Scissors";
    }

    else {
        return pick = "Paper";
    }
    
}


let Pscore = 0;
let Cscore = 0;


function Janken(Player, Computer) {
    Player = Player.toLowerCase();
    Computer = Computer.toLowerCase();
    const message = document.querySelector('#Results');
    const Pscore_text = document.querySelector('#PScore');
    const Cscore_text = document.querySelector('#CScore');

    console.log(Computer);
    console.log(Player);


    if (["rock", "paper", "scissors"].indexOf(Player) > -1) {
        if (Pscore >= 5) {
            message.textContent = "GAME OVER! YOU WIN!";
            return 
        }
        if (Cscore >= 5) {
            message.textContent = "GAME OVER! COMPUTER WINS!"
            return
        }
        
        if (Player == "paper" && Computer == "rock") {
            message.textContent = "You Win! Paper beats Rock";
            Pscore += 1;
            console.log(Pscore);
            Pscore_text.textContent = `Huamn: ${Pscore}`
        }
        else if (Player == "rock" && Computer == "scissors") {
            message.textContent = "You Win! Rock beats Scissors!";
            Pscore += 1;
            Pscore_text.textContent = `Huamn: ${Pscore}`
        }
        else if (Player == "scissors" && Computer == "paper") {
            message.textContent = "You Win! Scissors beats Paper!";
            Pscore += 1;
            Pscore_text.textContent = `Huamn: ${Pscore}`
        }
        else if (Player == Computer) {
            message.textContent = "It is a draw!";
        }
        else {
            message.textContent = `Computer Win! ${Computer} beats ${Player}`;
            Cscore += 1;
            Cscore_text.textContent = `Bitch: ${Cscore}`
        }
    }
    else {
        message.textContent = "I dont think that was a choice...";
    }

}

function PlayerSelection() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const Pchoice = button.className;
            const Computer = getComputerChoice();
            Janken(Pchoice, Computer);
    });
});    
}

PlayerSelection();




