import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

import { useSelector } from "react-redux";

import Logo from "../assets/images/logo.svg";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex items-center justify-between py-3 px-3 shadow-2xl">
      <div>
        <img className="w-32" src={Logo} />
      </div>
      <div>
        <ul className="flex gap-5 items-center">
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
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <button
            className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm"
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
