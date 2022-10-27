$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!

function onReady() {
  //listen for arcane-scepter click, run arcaneSceptreAttack
  $('.arcane-sceptre').on('click', arcaneSceptreAttack);
  //listen for entangle click, run entangleAttack
  $('.entangle').on('click', entangleAttack);
  //listen for dragon-blade click, run dragonBladeAttack
  $('.dragon-blade').on('click', dragonBladeAttack);
  //listen for star-fire click, run starFireAttack
  $('.star-fire').on('click', starFireAttack);
}

//Going to want global variables for the AP and HP
let attackPoints = 100;
let healthPoints = 100;

function arcaneSceptreAttack() {
  console.log('in arcane sceptre');
  //Attack function will generally...
  //set the attack HP variable for that specific attack
  const healthDamage = 14;
  //set the attack AP variable for that specific attack
  const attackCost = 12;
  //update the state of global AP and HP variabes
  attackPoints -= attackCost;
  healthPoints -= healthDamage;
  //included in this is running a check if it is neg, be 0
  zeroFloorCheck();
  //run a function to render the state onto the DOM
  renderCurrentPoints();
}

//function zeroFloorCheck will double check negative
function zeroFloorCheck() {
  console.log('in zeroFloorCheck');
  if (attackPoints < 0) {
    attackPoints = 0;
  }
  if (healthPoints < 0) {
    healthPoints = 0;
  }
}

function renderCurrentPoints() {
  console.log('in the renderCurrentPoints function');
  console.log(healthPoints);
  //function renderCurrentPoints will have two steps
  //1. update the AP HP variables on the DOM
  $('.hp-text').html(`<div class="hp-text">` + healthPoints + ` HP </div>`);
  $('.ap-text').html(`<div class="ap-text">` + attackPoints + ` AP </div>`);
  //2. run a seperate function checkVictoryStatus to check if 0
  checkVictoryStatus();
}

//function checkVictoryStatus will be conditional to test 0
function checkVictoryStatus() {
  //if AP 0, run renderUserWon
  if (attackPoints === 0) {
    console.log('user won');
    renderUserWon();
  }
  //if HP 0, run renderFungusWon
  if (healthPoints === 0) {
    console.log('fungus won');
    renderFungusWon();
  }
}

//function renderFungusWon changes css class from walk to jump
function renderFungusWon() {
  $('.walk').removeClass();
  $('#i-am-fungus').addClass('freaky-fungus dead');
}
//function renderUserWon changes css class from walk to dead
function renderUserWon() {
  $('.walk').removeClass();
  $('#i-am-fungus').addClass('freaky-fungus jump');
}
// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM
