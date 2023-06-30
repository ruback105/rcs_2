import { useEffect, useState } from "react";
import BeerDetails from "../components/BeerDetails";

const randomApi = "https://api.punkapi.com/v2/beers/random";

function Beer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetch(randomApi).then((response) => {
      response.json().then((data) => {
        setTimeout(() => {
          setRandomBeer(data[0]);
        }, 3000);
      });
    });
  }, []);

  console.log(randomBeer);

  // 1. Short if else - randomBeer.name ? randomBeer.name : "Data still loading..."
  // 2. If 1st is undefined, then render 2nd randomBeer.name ?? "Data still loading..."
  // 3. If 1st is falsy, then render 2nd randomBeer.name || "Data still loading..."
  return (
    <>
      {randomBeer.name ? (
        <BeerDetails beer={randomBeer} />
      ) : (
        "Data still loading..."
      )}
    </>
  );
}

export default Beer;
