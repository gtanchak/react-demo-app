import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import "./index.css";
import Body from "./components/Body";

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
