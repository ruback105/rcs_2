const arrayVariable = [1, 0, 3, null, 5]; // 5

const indexOfNumber = arrayVariable.indexOf(10);

console.log(indexOfNumber);

if (indexOfNumber > -1) {
  arrayVariable[indexOfNumber] = "ha-ha I changed you";
}

console.log(arrayVariable);
