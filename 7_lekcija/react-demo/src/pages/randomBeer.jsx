import BeerDetails from "../components/BeerDetails";
import useRandomBeer from "../hooks/useRandomBeer";

function RandomBeer() {
  const { randomBeer, fetchNewBeer } = useRandomBeer();

  // 1. Short if else - randomBeer.name ? randomBeer.name : "Data still loading..."
  // 2. If 1st is undefined, then render 2nd randomBeer.name ?? "Data still loading..."
  // 3. If 1st is falsy, then render 2nd randomBeer.name || "Data still loading..."
  return (
    <div className="flex flex-col justify-center items-center">
      {randomBeer.name ? (
        <BeerDetails beer={randomBeer} />
      ) : (
        "Data still loading..."
      )}
      <button
        onClick={fetchNewBeer}
        className="border-2 border-black bg-black text-white py-2 px-2"
      >
        Generate new beer
      </button>
    </div>
  );
}

export default RandomBeer;
