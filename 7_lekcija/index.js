async function getProduct() {
  const response = await fetch("https://dummyjson.com/products/1");
  const product = await response.json();

  console.log(product);
}

async function createProduct() {
  const apiKey = "https://dummyjson.com/products/add";

  const testProduct = {
    name: "Test product",
  };

  const response = await fetch(apiKey, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: testProduct,
  }).catch((err) => {
    console.log(err);
  });

  if (response.status !== 200) {
    const test = await response.json();
    console.error(test.message);
  }

  const payload = JSON.stringify(testProduct);

  fetch(apiKey, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
  });
}

async function patchProduct(id) {
  const apiKey = `https://dummyjson.com/products/${id}`;

  const testProduct = {
    title: "Test product",
    price: 200,
  };

  const payload = JSON.stringify(testProduct);

  fetch(apiKey, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: payload,
  });
}

async function putProduct(id) {
  const apiKey = `https://dummyjson.com/products/${id}`;

  const testProduct = {
    title: "Test product",
    price: 200,
  };

  const payload = JSON.stringify(testProduct);

  fetch(apiKey, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: payload,
  });
}

// createProduct();

// patchProduct(1);
// putProduct(2);

async function deleteProduct(id) {
  const apiKey = `https://dummyjson.com/products/${id}`;

  fetch(apiKey, {
    method: "DELETE",
  });
}

deleteProduct(1);
