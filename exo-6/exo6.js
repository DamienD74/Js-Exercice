// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 5;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo.garage = true;
console.log(joeInfo.garage);

//------------------------------------------------------------------------------------------------------------------------

var team = {
    players:
        [{
            firstName: "James",
            lastName: "Harden",
            age: 31
        }],
    games:
        [{
            opponent: "hornet",
            teamPoints: 97,
            opponentPoints: 122
        }],
};

function addPlayer(firstName,lastName,age)
{
    var player = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    team.players.push(player)
}

function addGames(opponent,teamPoints,opponentPoints)
{
    var game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    };
    team.games.push(game);
}

function totalScoreEquipe()
{
    var ptsTotalEquipe = 0;

    team.games.forEach((game) =>
    {
        ptsTotalEquipe += game.teamPoints;
    })

    console.log(ptsTotalEquipe);
}

function calculMoyenneScoreOponent()
{
    var ptsTotalOpponent = 0;

    team.games.forEach((game)=>
    {
        ptsTotalOpponent += game.opponentPoints;
    })

    ptsTotalOpponent /= team.games.length;

    console.log(ptsTotalOpponent);
}

function theOldPlayer()
{
    var oldPlayer = team.players[0];

    team.players.forEach((player)=>
    {
        if( oldPlayer.age < player.age)
        {
            oldPlayer = player;
        }
    })

    console.log(oldPlayer);
}

addPlayer("John", "Wall" ,30);
addPlayer("Eric", "Gordon" ,32);
addPlayer("Christian", "Wood" ,25);
addPlayer("Danuel", "House" ,27);
addGames("Raptors", 117, 99);
addGames("Thunder", 112, 114);
addGames("Piston", 100, 113);
addGames("Warrior", 94, 108);

team.players.sort(function compare(a, b)
{
    if (a.firstName < b.firstName)
    {
        return -1;
    }
    if (a.firstName > b.firstName)
    {
        return 0;
    }
})

console.log(team.players)
console.log(team.games);

totalScoreEquipe();
calculMoyenneScoreOponent();
theOldPlayer();