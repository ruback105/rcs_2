// const requiredAge = 21;
// const myAge = 16;

// if (myAge >= requiredAge) {
//   console.log("You are allowed to smoke");
// } else {
//   console.log("You are not allowed to smoke");
// }

const requiredEntryAge = 18;
const requiredDrinkAge = 21;

const isVipClient = true;

const myAge = 17;

if (myAge >= requiredEntryAge && myAge >= requiredDrinkAge) {
  console.log("3");
} else if (myAge >= requiredEntryAge) {
  console.log("2");
} else {
  console.log("1");
}
