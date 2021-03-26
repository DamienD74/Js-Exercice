// you can write js here
console.log('exo-3');

function getPlayerChoice(playerInput)
{
    var playerInput = prompt("your choice (pierre, feuille, ciseau) ?")

    playerInput = playerInput.toLowerCase();

    if (playerInput == 'pierre' || playerInput == "ciseau" || playerInput == "feuille" || playerInput == "bomb")
    {
        return playerInput;
    }
    else
    {
        console.log("Vous n'avez pas fait un bon choix tapez pierre, feuille ou ciseau");
    }
}

function getComputerChoice()
{
    var nb = Math.floor(Math.random() * 3)

    if (nb == 0)
    {
        return "pierre";
    }
    else if (nb == 1)
    {
        return "feuille";
    }
    else
    {
        return "ciseau";
    }
}

function findWinner(playerChoice, computerChoice)
{
    if (playerChoice == "bomb")
    {
        return "Won";
    }
    else if (playerChoice == computerChoice)
    {
        return "Tied";
    }
    else if ((playerChoice == "pierre" && computerChoice == "ciseau") || (playerChoice == "feuille" && computerChoice == "pierre") || (playerChoice == "ciseau" && computerChoice == "feuille"))
    {
        return "Won";
    }
    else
    {
        return "Lost";
    }
}

function playGame()
{
    var uChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();

    console.log("Le joueur a sélectionné " + uChoice);
    console.log("L'ordinateur a sélectionné " + computerChoice);

    console.log(findWinner(uChoice, computerChoice));

    if (findWinner(uChoice, computerChoice) == "Tied")
    {
        playGame();
    }
}

playGame();