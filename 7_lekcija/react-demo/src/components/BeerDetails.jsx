const BeerDetails = ({ beer }) => (
  <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-4 mx-auto max-w-2xl text-gray-900">
    <div className="flex mb-4">
      <div className="w-1/2 mr-4">
        <img
          className="rounded-lg h-64 w-full object-cover"
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">{beer.name}</h2>
        <p className="mb-2">{beer.tagline}</p>
        <p className="mb-2">First Brewed: {beer.first_brewed}</p>
        <p className="mb-2">ABV: {beer.abv}</p>
        <p>IBU: {beer.ibu}</p>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-2xl mb-2 text-indigo-600">Description</h3>
      <p>{beer.description}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-2xl mb-2 text-indigo-600">Ingredients</h3>
      <div className="mb-2">
        <h4 className="font-bold text-lg mb-1">Malts</h4>
        {beer.ingredients.malt.map((malt, index) => (
          <p key={index}>
            {malt.name} - {malt.amount.value} {malt.amount.unit}
          </p>
        ))}
      </div>
      <div className="mb-2">
        <h4 className="font-bold text-lg mb-1">Hops</h4>
        {beer.ingredients.hops.map((hop, index) => (
          <p key={index}>
            {hop.name} - {hop.amount.value} {hop.amount.unit}
          </p>
        ))}
      </div>
      <p>Yeast: {beer.ingredients.yeast}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-2xl mb-2 text-indigo-600">Food Pairing</h3>
      <ul className="list-disc list-inside">
        {beer.food_pairing.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-2xl mb-2 text-indigo-600">Brewers Tips</h3>
      <p>{beer.brewers_tips}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-2xl mb-2 text-indigo-600">Contributor</h3>
      <p>{beer.contributed_by}</p>
    </div>
  </div>
);

export default BeerDetails;
