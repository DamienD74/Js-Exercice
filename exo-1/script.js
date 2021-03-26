// you can write js here
console.log('hello from file');

var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

console.log(kelvins);

var celsius = kelvins - 273;               //Stocke une valeur en celsius en soustrayant la valeur en kelvins par 273

console.log(celsius);

var fahrenheits = celsius * (9/5) + 32;    //Stocke une valeur en fahrenheits en multipliant la valeur en celsius par 9/5 et en ajoutant 32

console.log(fahrenheits);

fahrenheits = Math.floor(fahrenheits);     //Arrondi la valeur de fahrenheits en un nombre entier à la valeur inférieur

console.log(fahrenheits);