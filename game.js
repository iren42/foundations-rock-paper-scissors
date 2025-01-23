const PAPER = 1;
const ROCK = 2;
const SCISSORS = 0;

let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function numberToString(rand)
{
	if (rand == SCISSORS)
		return ("scissors");
	if (rand == PAPER)
		return ("paper");
	if (rand == ROCK)
		return ("rock");
}

function getComputerChoice()
{
	let rand;
	rand = getRandomInt(3);
	return (numberToString(rand));
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice()
{
	let userInput;
	userInput = prompt("Choose between rock, paper and scissors", "rock");
	return (userInput.toLowerCase());
}

function playRound(humanChoice, computerChoice)
{
	if (humanChoice == computerChoice)
		console.log("It's a draw. You played: " + humanChoice);
	else if (computerChoice == PAPER)
	{
		switch (humanChoice)
		{
			case "scissors":
				console.log("You win: " + humanChoice + " beats " + computerChoice);
				break;
			case "rock":
				console.log("You lose: " + computerChoice+ " beats " + humanChoice);
				break;
			default:
				console.log("Sorry, we did not understand");
		}
	}
	else if (computerChoice == ROCK)
	{
		switch (humanChoice)
		{
			case "scissors":
				console.log("You lose: " + computerChoice+ " beats " + humanChoice);
				break;
			case "paper":
				console.log("You win: " + humanChoice + " beats " + computerChoice);
				break;
			default:
				console.log("Sorry, we did not understand");
		}
	}
	else
	{

		switch (humanChoice)
		{
			case "rock":
				console.log("You win: " + humanChoice + " beats " + computerChoice);
				break;
			case "paper":
				console.log("You lose: " + computerChoice+ " beats " + humanChoice);
				break;
			default:
				console.log("Sorry, we did not understand");
		}
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
