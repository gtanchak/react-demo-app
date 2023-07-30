import React from "react";
import ReactDOM from "react-dom/client";

import Header from './src/components/Header'
import "./index.css";
import Body from "./src/components/Body";







const AppLayout = () => {
  return (
    <main className="">
      <Header />
      <Body />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
