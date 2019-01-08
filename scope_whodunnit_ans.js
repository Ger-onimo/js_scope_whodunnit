

// MVP

//EPISODE 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

  // VERDICT: Miss Scarlet
  // the function declareMurderer is being called which is returning the property
  // of the murderer Miss Scarlet. There is no reassignment of variables

// EPISODE 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

  // VERDICT: error
  // Murderer has been declared as a constant at top level, so can't be reassigned.
  // changeMurderer throws an error when called.

// EPISODE 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

  // VERDICT 1: Mrs. Peacock
  // calling function declareMurderer and returning let murderer declared
  // inside function block.
  // VERDICT 2: Prof. Plum
  // directly calling let murderer outside the function before it's been reassigned
  // to declareMurderer

// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

  // VERDICT: there is no verdict only suspects
  // SUSPECT THREE: The final 'Suspect (three)' is Mrs Peacock the call is directly accessing the
  // let variable outside the function block.
  // SUSPECTS: Miss Scarlet, Professor Plum and Colonel Mustard.
  // suspectThree has been reassigned within the function declareAllSuspects whichis
  // being called at suspects.

//EPISODE 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

   // VERDICT: Revolver
   // the log on verdict calls declareWeapon. The scenario weapon property has between
   // changed at changeWeapon to 'revolver' - this has been called before declareWeapon, so
   // revolver is returned.

// EPISODE 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function()
// {
//   murderer = 'Mr. Green';
//
  //   const plotTwist = function()
  //  {
  //     murderer = 'Mrs. White';
  //   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

   // VERDICT: Mrs White
   // the first call is to changeMurderer where Mr Green has been reassigned  as murderer.
   // then verdict calls declareMurderer which reassigns murderer to Mrs. White in the plotTwist
   // called inside the changeMurderer block.

// EPISODE 7 - TODO

// let murderer = 'Professor Plum';
//
// const changeMurderer = function()
// {
//   murderer = 'Mr. Green';
//
//     const plotTwist = function()
//     {
//       let murderer = 'Colonel Mustard';
//
//         const unexpectedOutcome = function()
//         {
//           murderer = 'Miss Scarlet';
//         }
//
//       unexpectedOutcome();
//     }
//
//   plotTwist();
// }
//
// const declareMurderer = function()
// {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

   // TODO
   // VERDICT:
   // got a bit lost in this one

// EPISODE 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function()
// {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//     const plotTwist = function(room)
//       {
//           if (scenario.room === room)
//           {
//             scenario.murderer = 'Colonel Mustard';
//           }
//
//         const unexpectedOutcome = function(murderer)
//          {
//           if (scenario.murderer === murderer)
//           {
//             scenario.weapon = 'Candle Stick';
//           }
//       }
//
//       unexpectedOutcome('Colonel Mustard');
//     }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

   // VERDICT: Candle Stick
   // call on changeScenario reassigns murderer to Mrs Peacock.
    //  the verdict calls declareWeapon. The first if questios if the murderer is
    // Colonel Mustard as it is not the next if asks if the murderer equals murderer
    // the murderer is Mrs Peacock so the weapon is now reassigned as 'candle stick'

// #### Episode 9

// let murderer = 'Professor Plum';
//
//   if (murderer === 'Professor Plum')
//     {
//       let murderer = 'Mrs. Peacock';
//     }
//
// const declareMurderer = function()
//   {
//     return `The murderer is ${murderer}.`;
//   }
//
// const verdict = declareMurderer();
// console.log(verdict);

   // VERDICT: Professor Plum
   // declare murdere is being called outside the if statement block
   // so calls the let outside the block - the global variable

// ### Extensions
//
// Make up your own episode!

let weaponOne = 'rope';
let weaponTwo = 'banana skin';
let weaponThree = 'piano';

const declareAllWeapons = function() {
  let weaponOne = 'anvil';
  return `The suspects are ${weaponOne}, ${weaponTwo}, ${weaponThree}.`;
};

const weapons = declareAllWeapons();
console.log(weapons);

///////
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const revealMurder = function() {
  return `The murderer is ${scenario.murderer}, in the ${scenario.room}, with a ${scenario.weapon}`;
}

changeWeapon('banana skin');
const verdict = revealMurder();
console.log(verdict);
