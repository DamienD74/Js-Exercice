// you can write js here
console.log('exo-2');

var isTesting = true;

const myDate = new Date('March, 26, 2021 10:38:20');

var jourSemaine = "C'est un jour de semaine";
var jourWeekend = "C'est enfin le weekend";

if(isTesting)
{
    var jourActuelle = prompt();
    var heureActuelle = prompt();
}
else
{
    var jourActuelle = myDate.getDay();
    var heureActuelle = myDate.getHours();
}

if (jourActuelle == 0 || jourActuelle == 6 || (jourActuelle == 5 && heureActuelle > 17) || (jourActuelle == 1 && heureActuelle < 9))
{
    console.log(jourWeekend);
}
else
{
    console.log(jourSemaine);
}