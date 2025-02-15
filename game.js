const PAPER = 1;
const ROCK = 2;
const SCISSORS = 0;

const MAXSCORE = 5;

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
	function continueGame()
	{
		return (humanScore < MAXSCORE && computerScore < MAXSCORE);
	}
	function announceWinner()
	{
		let winnerName = "Human";
		if (humanScore < computerScore)
			winnerName = "Computer";
		winnerDiv.textContent = "Le gagnant est " + winnerName;	
	}
	function playRound(humanChoice, computerChoice)
	{
		if (!continueGame())
			return ;
		if (humanChoice == computerChoice)
			console.log("It's a draw. You both played: " + humanChoice);
		else if (computerChoice == "paper" && humanChoice == "rock" ||
			computerChoice == "scissors" && humanChoice == "paper" ||
			computerChoice == "rock" && humanChoice == "scissors")
		{
			console.log("You lose: " + computerChoice+ " beats " + humanChoice);
			computerScore++;
			computerScoreDiv.textContent = computerScore;
			if (!continueGame())
				announceWinner();
		}
		else if (humanChoice == "paper" && computerChoice == "rock" ||
			humanChoice == "scissors" && computerChoice == "paper" ||
			humanChoice == "rock" && computerChoice == "scissors")
		{
			console.log("You win: " + humanChoice + " beats " + computerChoice);
			humanScore++;
			humanScoreDiv.textContent = humanScore;
			if (!continueGame())
				announceWinner();
		}
		else
			console.log("Sorry, we did not understand");
	}


	let humanScore = 0;
	let computerScore = 0;
	let	roundNb = 0;

	const	rock = document.querySelector("#rock");
	const	paper = document.querySelector("#paper");
	const	scissors = document.querySelector("#scissors");
	const	humanScoreDiv = document.querySelector("#humanScore");
	const	computerScoreDiv = document.querySelector("#computerScore");
	const	winnerDiv= document.querySelector("#winner");

	computerScoreDiv.textContent = computerScore;
	humanScoreDiv.textContent = humanScore;

	rock.addEventListener("click", event => {
		playRound("rock", getComputerChoice());
	});
	paper.addEventListener("click", event => {
		playRound("paper", getComputerChoice());
	});
	scissors.addEventListener("click", event => {
		playRound("scissors", getComputerChoice());
	});

}

playGame();

