import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes";
import AuthContextWrappper from "./context/AuthContextWrappper";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <AuthContextWrappper>
      <RouterProvider router={router} />,
    </AuthContextWrappper>
  </Provider>,
  // </StrictMode>,
);
