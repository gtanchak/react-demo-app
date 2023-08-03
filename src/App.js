import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import "./index.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const AppLayout = () => {
  return (
    <main className="">
      <Header />
      <Body />
    </main>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />
  }, {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
