// Jenifer Lloyd
// Lab4

// Event Listener
document.getElementById("button").addEventListener("click", madlibJALbuild);

//Event Function
function madlibJALbuild() {
    // Input
    
    let adjective = document.getElementById("adjective").value;
    let noun1 = document.getElementById("noun1").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let noun2 = document.getElementById("noun2").value;
    let pronoun = document.getElementById("pronoun").value;
    let song = document.getElementById("song").value;
    let verb = document.getElementById("verb").value;
    let pluralNoun = document.getElementById("pluralNoun").value;
    
    // Process
   // let result = "There once was a " + adjective + " " + noun1 +  " named " + name + ", that wanted a " 
  //  + color + " " + noun2 + ". " 
   // + pronoun + " would sing " + song + " and " + verb + " on a box. " 
   // + "The " + pluralNoun + " enjoyed the " + noun1 + "'s holiday performance. ";

    // Output
   // document.getElementById("result").innerHTML = result;
   // document.getElementById("play_button").addEventListener("click", reset);   

function goAgain() {
    text = ""; //reset the text to an empty string - making it disappear
    againBtn = ""; //reset the text to an empty string - making it disappear
    document.getElementById("story").innerHTML = text;
    document.getElementById("again").innerHTML = againBtn;
}

function makeStory() {
    var intro = "There once was a " + adjective + " " + noun1 +  " named " + name + ", that wanted a " 
    + color + " " + noun2 + ". " 
    + pronoun + " would sing " + song + " and " + verb + " on a box. " 
    + "The " + pluralNoun + " enjoyed the " + noun1 + "'s holiday performance. ";
    text = intro;
    againBtn = "<button type=\"button\" onclick=\"goAgain()\">Go Again</button>";
    document.getElementById("story").innerHTML = text;
    document.getElementById("again").innerHTML = againBtn;
}

}

