import React from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/WhatsApp Image 2024-09-10 at 02.49.37_516af16e.jpg";
import { toast } from "react-toastify";
import "./Navbar.css";

export default function Navbar({ isLogin, setLogin }) {
  return (
    <div className=" nav flex justify-around items-center">
      <Link to="">
        <img src={Logo} className="logo m-1 " />
      </Link>
      <nav>
        <ul className="flex gap-10 ">
          <li>
            <NavLink to="">
              <p
                className=" font-bold font-serif hover:text-yellow-300"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Events
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <p
                className=" font-bold font-serif hover:text-yellow-300"
                onClick={() => {
                  setLogin(false);
                }}
              >
                About
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <p
                className=" font-bold font-serif hover:text-yellow-300"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Contact
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-10">
        {!isLogin && (
          <Link to="login">
            <button className=" border-2 p-1 rounded-md  hover:text-yellow-300">
              Login
            </button>
          </Link>
        )}
        {!isLogin && (
          <Link to="signup">
            <button className="border-2 p-1 rounded-md hover:text-yellow-300 ">
              Signup
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="dashboard">
            <button className="border-2 p-1 rounded-md hover:text-yellow-300">
              Dashboard
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="/">
            <button
              onClick={() => {
                setLogin(false);
                toast.success("Logout Successfully");
              }}
              className="border-2 p-1 rounded-md hover:bg-yellow-"
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
