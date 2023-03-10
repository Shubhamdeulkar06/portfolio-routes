import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import PortfolioSection from "./PortfolioSection";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/PortfolioSection",
        element: <PortfolioSection />,
      },
      {
        path: "/AboutSection",
        element: <AboutSection />,
      },
      {
        path: "/ContactSection",
        element: <ContactSection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
