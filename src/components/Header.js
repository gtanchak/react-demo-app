import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { LOGO_URL } from "../constants/common";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();


  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {!onlineStatus ? "🔴" : "🟢"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            Cart
            {cartItems.length > 0 && (
              <span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {cartItems.length}
              </span>
            )}
          </li>
          <button
            className="login"
            onClick={() =>
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
            }
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
