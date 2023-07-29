import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="http://placehold.it" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">footer</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="body-container">body</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <main className="">
      <Header />
      <Body />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
