$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!

function onReady() {
  //listen for arcane-scepter click, run arcaneSceptreAttack
  //listen for entangle click, run entangleAttack
  //listen for dragon-blade click, run dragonBladeAttack
  //listen for star-fire click, run starFireAttack
}

//Going to want global variables for the AP and HP

//Attack function will generally...
//set the attack HP variable for that specific attack
//set the attack AP variable for that specific attack
//update the state of global AP and HP variabes
//included in this is running a check if it is neg, be 0
//run a function to render the state onto the DOM

//function render will have two steps
//1. update the AP HP variables on the DOM
//2. run a seperate function checkVictoryStatus to check if 0

//function checkVictoryStatus will be conditional to test 0
//if AP 0, run renderUserWon
//if HP 0, run renderFungusWon

// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM
