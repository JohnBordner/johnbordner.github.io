import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    //element: <App />, // Layout component
    children: [
      { index: true, element: <App /> }, // Default route
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
