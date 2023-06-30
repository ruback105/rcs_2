import { useEffect, useState } from "react";
import fetchBeer from "../api/fetchBeer";

function useBeer(id) {
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetchBeer(id).then((data) => setBeer(data[0]));
  }, []);

  return beer;
}

export default useBeer;
