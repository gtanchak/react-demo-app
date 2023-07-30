import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo-1999.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturatnCard = () => {
  return (
    <div className="res-card">
      <img src="" />
      <h3></h3>
      <h4></h4>
      <h4></h4>
      <h4></h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturatnCard />
      </div>
    </div>
  );
};

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
