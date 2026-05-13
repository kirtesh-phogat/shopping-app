import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import LearnUseEffect from "./components/LearnUseEffect";
import Wrapping from "./components/Wrapping";
import Cart from "./pages/Cart";
import LearnRef from "./components/LearnRef";
import Memoization from "./components/Memoization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "useeffect",
        element: <LearnUseEffect />,
      },
      {
        path: "learnref",
        element: <LearnRef />,
      },
      {
        path: "memo",
        element: <Memoization />,
      },
      {
        path: "wrapping",
        element: <Wrapping />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
