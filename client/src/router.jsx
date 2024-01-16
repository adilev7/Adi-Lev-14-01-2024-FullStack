import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavoritesView from "./views/FavoritesView";
import HomeView from "./views/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/favorites",
        element: <FavoritesView />,
      },
    ],
  },
]);

export default router;
