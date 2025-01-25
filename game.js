const PAPER = 1;
const ROCK = 2;
const SCISSORS = 0;

const MAXROUND = 1;

function getRandomInt(max)
{
	return (Math.floor(Math.random() * max));
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
	return (numberToString(getRandomInt(3)));
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice()
{
	let userInput = prompt("Choose between rock, paper and scissors", "rock");
	return (userInput.toLowerCase());
}


function playGame()
{
	function playRound(humanChoice, computerChoice)
	{
		if (humanChoice == computerChoice)
			console.log("It's a draw. You both played: " + humanChoice);
		else if (computerChoice == "paper" && humanChoice == "rock" ||
			computerChoice == "scissors" && humanChoice == "paper" ||
			computerChoice == "rock" && humanChoice == "scissors")
		{
			console.log("You lose: " + computerChoice+ " beats " + humanChoice);
			computerScore++;
		}
		else if (humanChoice == "paper" && computerChoice == "rock" ||
			humanChoice == "scissors" && computerChoice == "paper" ||
			humanChoice == "rock" && computerChoice == "scissors")
		{
			console.log("You win: " + humanChoice + " beats " + computerChoice);
			humanScore++;
		}
		else
			console.log("Sorry, we did not understand");
	}

	let humanScore = 0;
	let computerScore = 0;
	let	roundNb = 0;
	let	humanSelection = "";
	let computerSelection = "";

	while (roundNb++ < MAXROUND)
	{
		humanSelection = getHumanChoice();
		computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}
	console.log("Scores: " + humanScore + " for human, " + 
		computerScore + " for computer");
}

playGame();
