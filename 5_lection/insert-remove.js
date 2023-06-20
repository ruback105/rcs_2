const newPhone = document.createElement("h1");
newPhone.innerText = "Apple Iphone 13";

const newPhone2 = document.createElement("h1");
newPhone2.innerText = "Samsung s21 ultra";

const root = document.getElementById("root");

root.appendChild(newPhone);
root.prepend(newPhone2);

newPhone.remove();
newPhone2.remove();
