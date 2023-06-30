import BeerDetails from "../components/BeerDetails";
import useBeer from "../hooks/useBeer";

function Beer() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const { id } = params;

  const beer = useBeer(id);

  return beer ? <BeerDetails beer={beer} /> : "Data loading...";
}

export default Beer;
