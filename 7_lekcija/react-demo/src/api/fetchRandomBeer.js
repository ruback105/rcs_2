async function fetchRandomBeer() {
  const randomApi = "https://api.punkapi.com/v2/beers/random";

  const response = await fetch(randomApi);
  const data = await response.json();

  return data[0];
}

export default fetchRandomBeer;
