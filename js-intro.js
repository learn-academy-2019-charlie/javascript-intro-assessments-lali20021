// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
var mantra = "Be the dev";
var newMantra = mantra.charAt(0);
console.log(newMantra)

// 2. Write the code that determines if there is a 'x' in mantra.
var mantra = "Be the dev";
var searchX = mantra.includes("x")
console.log(searchX)


// 3. Write the code that determines if there is a 'v' in mantra.
var mantra = "Be the dev";
var searchV = mantra.includes("v")
console.log(searchV)

// Stretch: Write the code that returns the position of 'v' in mantra.
var mantra = "Be the dev";
var position = mantra.indexOf("v")
console.log(position)

// Consider the following statement:
// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
var codingIsEasy = true
var imBored = true 

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}



// Consider the following statement:
// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
var imLost
var imFrustrated

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}


// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev";
for(let i=0; i<mantra.length; i++){
  console.log(mantra.charAt(i));
}

// Stretch: Using a while loop.
var mantra = "Be the dev";
var i = 0;
while(i <= mantra.length){
  i++;
  console.log(mantra.charAt(i-1));
}

// Super Stretch: Using forEach().
var mantra = "Be the dev";
mantra.split("").forEach(letter => {
console.log(letter);
});

// Consider the following variable:
// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
var message = "thisisateststring"

function noVowels(str) {
  var message = "thisisateststring" 
  var vowels = "aieuo";
  var strArr = str.toLowerCase().split("");
  var newArr = strArr.filter(function(letter) {
    if(vowels.indexOf(letter) == -1) {
      return letter;
    }
  });
  var string = "";
  newArr.forEach(function(letter) {
    //string += letter;
  });

console.log(noVowels(message))


// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.


// Consider the following variable:
// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, 
                  {name: 'Stimpy', animal: 'cat'}, 
                  {name: 'Daffy', animal: 'duck'}, 
                  {name: 'Scratchy', animal: 'cat'}, 
                  {name: 'Ren', animal: 'dog'}, 
                  {name: 'Felix', animal: 'cat'}]


var newArr = []
