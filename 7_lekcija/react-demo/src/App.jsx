import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/index";
import StateDemo from "./pages/state";
import EffectDemo from "./pages/effect";
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
