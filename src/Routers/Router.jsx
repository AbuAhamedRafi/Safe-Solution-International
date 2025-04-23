import { createBrowserRouter } from "react-router";
import Main from "../Layouts/Main";
import HomePage from "../Pages/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
