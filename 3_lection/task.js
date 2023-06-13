const x = 30;
const y = -10;
const z = 100;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// new variable minValue
const minValue = Math.min(x, y, z);
// new variable maxValue
const maxValue = Math.max(x, y, z);

const minText = "Minimal value:";
const maxText = "Maximal value:";

// Minimal value: -10
console.log(`Minimal value: ${minValue}`);
// Maximal value: 100
console.log(`Maximal value: ${maxValue}`);
