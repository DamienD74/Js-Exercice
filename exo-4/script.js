// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

function deleteLastElement()
{
    secretMessage.pop();
}

function addToProgram()
{
    secretMessage.push("to");
    secretMessage.push(("program"));
}

function replaceEasilyToRight()
{
    var pos = secretMessage.indexOf("easily");
    secretMessage[pos] = "right";
}

function deleteFirstElement()
{
    secretMessage.shift();
}

function addProgramming()
{
secretMessage.unshift("Programming");
}

function replaceGetRightTheFirstTimeToKnow()
{
    var pos = secretMessage.indexOf("get");
    var nbElement = 4;

    secretMessage.splice(pos, nbElement);

    pos = secretMessage.indexOf("time,");
    secretMessage[pos] = "know";
}

deleteLastElement();
addToProgram();
replaceEasilyToRight();
deleteFirstElement();
addProgramming();
replaceGetRightTheFirstTimeToKnow();
console.log(secretMessage.join(' '));