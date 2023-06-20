// Atrast visus telefonus
const allPhones = document.querySelectorAll("#root > div");
// console.log(allPhones);

// Atrast Apple Iphone 14 pro max
const iphone14 = document.querySelector("#root > div:nth-child(2)");
// console.log(iphone14);
// console.log(allPhones[1]);

// Apple Iphone 13 pie specifikācijas pievienot jaunu specifikāciju
const firstEntry = document.querySelector("#root > div div.specification ul");

const newElement = document.createElement("li");
newElement.innerText = "Camera: 12MP";

firstEntry.appendChild(newElement);
