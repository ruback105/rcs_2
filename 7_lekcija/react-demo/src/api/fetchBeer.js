async function fetchBeer(id) {
  const apiKey = `https://api.punkapi.com/v2/beers/${id}`;

  const response = await fetch(apiKey);
  const data = await response.json();

  return data;
}

export default fetchBeer;
