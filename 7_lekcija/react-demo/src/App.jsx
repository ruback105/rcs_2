import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/index";
import StateDemo from "./pages/state";
import EffectDemo from "./pages/effect";
import RandomBeer from "./pages/randomBeer";
import BeerList from "./pages/beerList";
import Beer from "./pages/beer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/demo/state",
      element: <StateDemo />,
    },
    {
      path: "/demo/effect",
      element: <EffectDemo />,
    },
    {
      path: "/beer/random",
      element: <RandomBeer />,
    },
    {
      path: "/beer/list",
      element: <BeerList />,
    },
    {
      path: "/beer",
      element: <Beer />,
    },
  ]);

  return (
    <div className="p-6">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
