import { useState, useEffect } from "react";
import fetchRandomBeer from "../api/fetchRandomBeer";

function useRandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetchRandomBeer().then((data) => {
      setRandomBeer(data);
    });
  }, []);

  function fetchNewBeer() {
    fetchRandomBeer().then((data) => {
      setRandomBeer(data);
    });
  }

  return {
    randomBeer,
    fetchNewBeer,
  };
}

export default useRandomBeer;
