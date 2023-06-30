async function fetchAllBeers() {
  const apiKey = "https://api.punkapi.com/v2/beers";

  const response = await fetch(apiKey);
  const data = await response.json();

  return data;
}

export default fetchAllBeers;
