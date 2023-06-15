// for (let i = 1; i < 11; i += 1) {
//   console.log(i);
// }

// console.log(10 9 8 7 6 5 4 3 2 1)

// for (let i = 0; i < 10; ++i) {
//   console.log(Math.abs(i - 10));
// }

// const array = ["Hello", "world", "I'm", "js", "developer"];

// array.forEach((entry) => console.log(entry));

// console.log(array.join(" "));

const array = [1, 2, 3, 4];

const newArray = array.map((element) => {
  return element ** 2;
});

console.log(newArray);
