// Jenifer Lloyd

// Input
let adjective = prompt("Enter an adjective: ");
let noun1 = prompt("Enter a noun: ");
let name = prompt("Enter a name: ");
let color = prompt("Enter a color: ");
let noun2 = prompt("Enter another noun: ");
let pronoun = prompt("Enter a pronoun: ");
let song = prompt("Enter a song: ");
let verb = prompt("Enter a verb: ");
let pluralNoun = prompt("Enter a plural noun: ");

// Process
let result = "There once was a " + adjective + " " + noun1 +  " named " + name + ", that wanted a " 
+ color + " " + noun2 + ". " 
+ pronoun + " would sing " + song + " and " + verb + " on a box. " 
+ "The " + pluralNoun + " enjoyed the " + noun1 + "'s holiday performance. ";

// Output
document.getElementById("result").innerHTML = result;
alert(result);