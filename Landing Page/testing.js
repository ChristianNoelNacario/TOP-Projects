// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * 3);

//     if (choice == 0) {
//         return pick = "Rock";
//     }
    
//     else if (choice == 1) {
//         return pick = "Scissors";
//     }

//     else {
//         return pick = "Paper";
//     }
    
// }

// function PlayerSelection() {
//     return choice = prompt("What are you choosing?");    
// }

// function Janken(Player, Computer) {
//     Player = Player.toLowerCase();
//     Computer = Computer.toLowerCase();

//     console.log(Computer);
//     if (["rock", "paper", "scissors"].indexOf(Player) > -1) {
//         if (Player == "paper" && Computer == "rock") {
//             alert("You Win! Paper beats Rock");
//         }
//         else if (Player == "rock" && Computer == "scissors") {
//             alert("You Win! Rock beats Scissors!");
//         }
//         else if (Player == "scissors" && Computer == "paper") {
//             alert("You Win! Scissors beats Paper!");
//         }
//         else if (Player == Computer) {
//             alert("It is a draw!");
//         }
//         else {
//             alert(`Computer Win! ${Computer} beats ${Player}`);
//         }
//     }
//     else {
//         alert("I dont think that was a choice...");
//     }

// }

// for (i = 0 ; i <= 5; i++) {
//     Janken(PlayerSelection(), getComputerChoice());
// }

// ########################################################################################

// const sect4 = document.querySelector("#test");

// const par = document.createElement('p');
// const h3 = document.createElement('h3');
// const div = document.createElement('div');

// div.classList.add('divvy');

// const divcont = document.querySelector('divvy');

// const h1 = document.createElement('h1');
// const p2 = document.createElement('p');

// h1.textContent = "I\m a div too!";
// p2.textContent = "ME TOO!";

// div.appendChild(h1);
// div.appendChild(p2);

// div.style.width = '300px';
// div.style.border = 'thin solid black';
// div.style.backgroundColor = 'pink';
// h3.style.color = 'blue';
// par.style.color = 'red';
// h3.textContent = 'I\'m a blue h3!';
// par.textContent = 'Hey I\'m red';

// sect4.appendChild(h3);
// sect4.appendChild(par);
// sect4.appendChild(div);
// sect4.appendChild(divcont);

// ##############################################################################################