// fetch("https://dummyjson.com/products/1").then((response) => {
//   response.json().then((data) => {
//     const p = document.createElement("p");
//     p.innerText = data.title;

//     const img = document.createElement("img");
//     img.src = data.thumbnail;
//     img.width = 100;
//     img.height = 100;

//     const root = document.getElementById("root");

//     root.appendChild(img);
//     root.appendChild(p);
//   });
// });

async function getProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products/1");

    try {
      const data = await response.json();

      const p = document.createElement("p");
      p.innerText = data.title;

      const img = document.createElement("img");
      img.src = data.thumbnail;
      img.width = 100;
      img.height = 100;

      const root = document.getElementById("root");

      root.appendChild(img);
      root.appendChild(p);
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}

getProduct();
