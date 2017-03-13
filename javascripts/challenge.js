"use strict";
//random generator
var bandChoice1 = null;
var bandChoice2 = null;
var bandChoice3 = null;
let $startgame;

$(document).ready(function(){


let PlayerOne;
let PlayerTwo;
let BattleSetup = null;

// var BattleOfTheBands = (function(BattleSetup) {



function Band () {
  this.type = null;
  this.health = Math.floor((Math.random() * 100) + 100);
  this.damage = Math.floor((Math.random() * 10) + 5);
  this.weapon = null;
  console.log(this);
}

function BoyBand () {
  this.type = "Male";
  this.property = "AList";
  this.attackType = "Dance Moves"
  console.log(this);
}
BoyBand.prototype = new Band();

function GirlBand() {
    this.type = "Female";
    this.property = "BList";
    this.attackType = "Fashion Choice";
    console.log(this);
}
GirlBand.prototype = new Band();

function KPopBand(){
    this.type = "Mixed Gender";
    this.property = "DList";
    this.attackType = "Annoyingess";
    console.log(this);
}
KPopBand.prototype = new Band();

function NSync(){
  this.baseDamage += 30;
  this.damage += 10;
}
NSync.prototype = new BoyBand();

function BackStreetBoys(){
  this.baseDamage += 10;
  this.damage += 40;
}
BackStreetBoys.prototype = new BoyBand();

function SpiceGirls(){
  this.baseDamage += 12;
  this.health += 2;
  this.damage += 70;
}
SpiceGirls.prototype = new GirlBand();

function DestinysChild(){
  this.baseDamage += 15;
  this.health += 3;
  this.damage += 80;
}
DestinysChild.prototype = new GirlBand();

function BabyMetal(){
  this.baseDamage += 2;
  this.health += 7;
  this.damage += 67;
}
BabyMetal.prototype = new KPopBand();

function Bulldok(){
  this.baseDamage += 20;
  this.health += 5;
  this.damage += 90;
}
Bulldok.prototype = new KPopBand();

let startgame = $("#submitButton");
console.log("Start Your Battle", startgame);
let microphone = $("#microphone").on("click", function(e){
  console.log("Mic Check 1 and 2");
})

let bandChoice1 = new BoyBand();
let bandChoice2 = new GirlBand();
let bandChoice3 = new KPopBand();
console.log("You Chose: ", bandChoice1);
console.log("You Chose: ", bandChoice2);
console.log("You Chose: ", bandChoice3);

 startgame.on("click", function(e) {
 var bandChoice1 = $('#boy-band').val();
 if (bandChoice1 === "N'Sync") {
   var PlayerOne = new NSync();
 } else if (bandChoice1 === "BackStreet Boys") {
   var PlayerOne = new BackStreetBoys();
 } else {
   console.log("Please choose a BoyBand");
 }


var bandChoice2 = $('#girl-band').val();
if (bandChoice2 === "Spice Girls") {
  var PlayerOne = new SpiceGirls();
} else if (bandChoice2 === "Destiny's Child") {
  var PlayerOne = new DestinysChild();
} else {
  console.log("Please choose a GirlBand");
}

});

$startgame.on("click", function() {
 var userSelection2 = $('#select2').val();
 console.log("userSelection2: ",userSelection2);
 if (userSelection2 === "Ninja") {
   var Fighter2 = new NinjaCat();
 };

 if (userSelection2 === "Flying") {
   var Fighter2 = new FlyingCat();
 };

 if (userSelection2 === "Fat") {
   var Fighter2 = new FatCat();
 };

 if (userSelection2 === "Squishy") {
   var Fighter2 = new SquishyCat();
 };

 if (userSelection2 === "Lazy") {
   var Fighter2 = new LazyCat();
 };

 if (userSelection2 === "Stealthy") {
   var Fighter2 = new StealthyCat();
 }
});

  let showSelection = $("#submitResult");
  let outputDiv = $("#output");
  let submitBtn = $("#submitButton");
  let attackBtn = $("#attack");
  let select1 = $("#select1");
  let select2 = $("#select2");

var newPlayer1 = function newPlayer() {
  event.preventDefault();
  player1.name = $("#robotNameInput1").val();
  player2.name = $("#robotNameInput2").val();
  player1.catBotType = $("#select1").val();
  player2.catBotType = $("#select1").val();
  console.log('robot one', player1);
  console.log('robot two', player2);
let output = `<p>${player1.name} is the ${player1.catBotType} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
  output += `<p>${player2.name} is the ${player2.catBotType} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
  showSelection.append(output);
}

submitBtn.on("click", function(){
     console.log("submit", submitBtn);
  newPlayer1();
});

function attack () {
  player1.health -= player2.damage;
  player2.health -= player1.damage;

if (player1.health > 0 && player2.health > 0){
  let output = `<p>${player1.name}, the ${player1.type} robot, now has ${player1.health} health.</p>`;
    output += `<p>${player2.name}, the ${player2.type} robot, now has ${player2.health} health.</p>`;
    outputDiv.append(output);
} else if (player2.health < 0){
       let output = `<p>${player1.name} won the battle and defeated ${player2.name}.`;
       outputDiv.append(output);
     } else {
       let output = `<p>${player2.name} won the battle and defeated ${player1.name}.`;
       outputDiv.append(output);
       console.log("player2", player2);
     }
}

attackBtn.on("click", function(){
  attack();
  });

  });

// return BattleOfTheBands;

// })(BattleOfTheBands || {});




//
// let Catbot => () {
//   color: green;
//   height: 30;
//   weight: 20;
//   species: "American Shorthair", "Tabby", "Himalayin", "Siamese";
// }
// });
// console.log("Catbot Initialized: ", Catbot);
//
// let calcHealth = [Math.floor(Math.random() * 5)];
// console.log("Health Calculator Initialized: ", calcHealth);
//
// class CatBot {
//
//   constructor (health, calcHealth, healthPoints) {
//     this.health = health;
//     this.healthRange(calcHealth, healthPoints);
//     this.calcHealth = [Math.floor(Math.random() * 5)];
//     console.log(this.calcHealth + " is your health");
//   }
//   healthRange(calcHealth, healthPoints) {
//     this.calcHealth = calcHealth;
//     this.healthpoints = 50;
//   }
//   toString () {
//     return `CatBot(${this.id})`;
//   }
// }
//
// class DroneCat extends CatBot {
//   constructor (health, calcHealth, healthPoints, terrain) {
//     super(health, calcHealth, healthPoints);
//     this.terrain = terrain;
//   }
//   toString () {
//     return "DroneCat > " + CatBot.toString();
//   }
// }
//
// class StealthCat extends CatBot {
//   constructor(health, calcHealth, healthPoints, flyHeight) {
//     super(health, calcHealth, healthPoints);
//     this.flyHeight = flyHeight;
//
//   }
//   toString () {
//     return "StealthCat > " + CatBot.toString();
//
//   }
// }
//


// let catbot => {};
// let health = 50;
//
//
// let new catbot() => {
// this.health = [Math.floor(Math.random() * 5)];
// console.log ("Your health is: ", catbot.health);
// }
//
// });

//ES6 function parameters
// function f (x, y = 7, z = 42) {
//     return x + y + z
// }
// f(1) === 50
