import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";

const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetails = lazy(() => import("./pages/productDetail"));
const Register = lazy(() => import("./pages/Register"));
const Services = lazy(() => import("./pages/Services"));

const withSuspense = (element) => (
  <Suspense
    fallback={
      <div className="min-h-80 grid place-items-center text-gray-500">
        Loading...
      </div>
    }
  >
    {element}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: withSuspense(<Login />),
      },
      {
        path: "register",
        element: withSuspense(<Register />),
      },
      {
        path: "cart",
        element: withSuspense(<Cart />),
      },
      {
        path: "about",
        element: withSuspense(<About />),
      },
      {
        path: "services",
        element: withSuspense(<Services />),
      },
      {
        path: "category/:categoryName",
        element: withSuspense(<CategoryProducts />),
      },
      {
        path: "product/:productId",
        element: withSuspense(<ProductDetails />),
      },
      {
        path: "*",
        element: withSuspense(<NotFound />),
      },
    ],
  },
]);

export default router;
