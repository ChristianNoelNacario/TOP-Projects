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

function PlayerSelection() {
    return choice = prompt("What are you choosing?");    
}

function Janken(Player, Computer) {
    Player = Player.toLowerCase();
    Computer = Computer.toLowerCase();

    console.log(Computer);
    if (["rock", "paper", "scissors"].indexOf(Player) > -1) {
        if (Player == "paper" && Computer == "rock") {
            alert("You Win! Paper beats Rock");
        }
        else if (Player == "rock" && Computer == "scissors") {
            alert("You Win! Rock beats Scissors!");
        }
        else if (Player == "scissors" && Computer == "paper") {
            alert("You Win! Scissors beats Paper!");
        }
        else if (Player == Computer) {
            alert("It is a draw!");
        }
        else {
            alert(`Computer Win! ${Computer} beats ${Player}`);
        }
    }
    else {
        alert("I dont think that was a choice...");
    }

}

for (i = 0 ; i <= 5; i++) {
    Janken(PlayerSelection(), getComputerChoice());
}
