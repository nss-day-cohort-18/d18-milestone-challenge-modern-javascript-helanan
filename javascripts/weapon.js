"use strict";

var BattleOfTheBands = (function (BattleSetup){

BattleSetup.weaponKit = {};
console.log("Weapons Initialized", BattleSetup)

  BattleSetup.weaponKit = {};

  BattleSetup.weaponKit.Weapon = function() {
    this.name = "microphone";
    this.damage = 1;
    this.microphone = 2;
    console.log(this);
    this.toString = function() {
      return this.name;
    }
  };

  BattleSetup.weaponKit.Byebyebye = function() {
    this.type = "Dance Moves";
    this.name = "Bye-Bye-Bye";
    this.damage = 4;
    this.microphone = 1;
  };

  BattleSetup.weaponKit.Byebyebye.prototype = new BattleSetup.weaponKit.Weapon();


  BattleSetup.weaponKit.ElbowShuffle = function() {
    this.type = "Dance Moves";
    this.name = "The Elbow Shuffle";
    this.damage = 14;
    this.microphone = 2;
    console.log(this);
  };
  BattleSetup.weaponKit.ElbowShuffle.prototype = new BattleSetup.weaponKit.Weapon();

  BattleSetup.weaponKit.StompandThrust = function() {
    this.type = "Dance Moves";
    this.name = "The Stomp and Thrust";
    this.damage = 18;
    this.microphone = 2;
    console.log(this);
  };
  BattleSetup.weaponKit.StompandThrust.prototype = new BattleSetup.weaponKit.Weapon();

  BattleSetup.weaponKit.Bubbles = function() {
    this.type = "Annoying";
    this.name = "Bubbles";
    this.damage = 1;
    this.microphone = 1;
    console.log(this);
  };
  BattleSetup.weaponKit.Bubbles.prototype = new BattleSetup.weaponKit.Weapon();

  BattleSetup.weaponKit.GlitterBomb = function() {
    this.type = "Annoying"
    this.name = "Glitter Bomb";
    this.damage = 15;
    this.micorphone = 2;
    console.log(this);
  };

  BattleSetup.weaponKit.GlitterBomb.prototype = new BattleSetup.weaponKit.Weapon();



// function Weapon() {
// 	this.damage = 5;
// 	this.name = "";
// }

// function CloseRange() {
// 	this.type = "close range";
// }
// CloseRange.prototype = new Weapon();

// function LongRange() {
// 	this.type = "long range";
// }
// LongRange.prototype = new Weapon();

// function Bubbles() {
//   this.damage += 15;
//   this.name = "Bubbles";
// }
// Bubbles.prototype = new LongRange();

// function Glitter() {
//   this.damage += 10;
//   this.name = "Glitter";
// }
// Glitter.prototype = new CloseRange();

// function Fishbreath() {
//   this.damage += 40;
//   this.name = "Fishbreath";
// }
// Fishbreath.prototype = new LongRange();

// function Catspit() {
//   this.damage += 30;
//   this.name = "Catspit";
// }
// Catspit.prototype = new CloseRange();

// let catspit = new Catspit();
// console.log("catspit", catspit);

// let bubbles = new Bubbles();
// console.log("bubbles", bubbles);

// SleeperCat.weapon = new Glitter();
// LandCat.weapon = new Catspit();
// DroneCat.weapon = new Bubbles();


return BattleSetup;
})(BattleOfTheBands|| {});
