import useAllBeers from "../hooks/useAllBeers";
import BeerDetails from "../components/BeerDetails";

function BeerList() {
  const beers = useAllBeers();

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {beers.length === 0
        ? "Data loading..."
        : beers.map((beer) => (
            <a className="block" href={`/beer?id=${beer.id}`}>
              <BeerDetails key={beer.name} beer={beer} />
            </a>
          ))}
    </div>
  );
}

export default BeerList;
