const PAPER = 1;
const ROCK = 2;
const SCISSORS = 0;

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


function playGame()
{
	function playRound(humanChoice, computerChoice)
	{
		if (humanChoice == computerChoice)
			console.log("It's a draw. You both played: " + humanChoice);
		else if (computerChoice == "paper")
		{
			switch (humanChoice)
			{
				case "scissors":
					console.log("You win: " + humanChoice + " beats " + computerChoice);
					humanScore++;
					break;
				case "rock":
					console.log("You lose: " + computerChoice+ " beats " + humanChoice);
					computerScore++;
					break;
				default:
					console.log("Sorry, we did not understand");
			}
		}
		else if (computerChoice == "rock")
		{
			switch (humanChoice)
			{
				case "scissors":
					console.log("You lose: " + computerChoice+ " beats " + humanChoice);
					computerScore++;
					break;
				case "paper":
					console.log("You win: " + humanChoice + " beats " + computerChoice);
					humanScore++;
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
					humanScore++;
					break;
				case "paper":
					console.log("You lose: " + computerChoice+ " beats " + humanChoice);
					computerScore++;
					break;
				default:
					console.log("Sorry, we did not understand");
			}
		}
	}

	let humanScore = 0;
	let computerScore = 0;
	let	roundNb = 0;
	let	humanSelection;
	let computerSelection;

	while (roundNb++ < 5)
	{
		humanSelection = getHumanChoice();
		computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}

	console.log("Scores: " + humanScore + " for human, " + computerScore + " for computer");
}

playGame();
