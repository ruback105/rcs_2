import { useEffect, useState } from "react";
import fetchAllBeers from "../api/fetchAllBeers";

function useAllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchAllBeers().then((data) => setBeers(data));
  }, []);

  return beers;
}

export default useAllBeers;
