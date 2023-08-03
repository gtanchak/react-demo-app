import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import "./index.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

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
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
