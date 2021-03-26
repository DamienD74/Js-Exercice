// you can write js here

console.log('exo-5');

var input = "Bonjour je fais des prouts";

var vowels = ["a", "e", "y", "u", "i", "o"];

var resultArray = [null];

for (var i = 0; i < input.length; i++)
{
    vowels.forEach(function (vowel)
    {
        if(input.charAt(i) == vowel)
        {
            resultArray.push(input.charAt(i));
        }
    });
}

resultArray.shift();
console.log(resultArray.join(" ").toUpperCase());