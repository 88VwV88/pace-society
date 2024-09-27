import React from "react";

import "./Header.css";
import logo from "../assets/logo_250.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header({ isLogin, setLogin }) {
  return (
    <>
      <div className="nav flex justify-between items-center ">
        <div className="font-bold font pl-5">
          <nav>
            <ul className=" gap-8 flex justify-between items-center">
              <li className="logoNav">PACE</li>
              <li>
                <NavLink to="/">
                  <p
                    className="font-bold font-serif hover:text-yellow-300"
                    onClick={() => {
                      setLogin(false);
                    }}
                  >
                    Home
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <p
                    className="font-bold font-serif hover:text-yellow-300"
                    onClick={() => {
                      setLogin(false);
                    }}
                  >
                    About
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <p
                    className="font-bold font-serif hover:text-yellow-300"
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
        </div>
        <div className=" md:flex gap-3 mr-3">
          {!isLogin && (
            <>
              <Link to="login">
                <button
                  type="button"
                  className="text-black bg-blue-600  border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm p-2 me-2 dark:bg-blue-800 dark:text-white dark:border-gray-600 dark:hover:bg-green-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-20 "
                >
                  Login
                </button>{" "}
              </Link>
              <Link to="signup">
                <button
                  type="button"
                  className="text-black bg-blue-600  border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm p-2 me-2 dark:bg-blue-800 dark:text-white dark:border-gray-600 dark:hover:bg-green-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-20 "
                >
                  Signup
                </button>{" "}
              </Link>
            </>
          )}
          {isLogin && (
            <>
              <Link to="dashboard">
                <button className="border-2 p-1 rounded-md hover:text-yellow-300">
                  Dashboard
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={() => {
                    setLogin(false);
                    toast.success("Logout Successfully");
                  }}
                  className="border-2 p-1 rounded-md hover:text-yellow-300"
                >
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <header className="header pb-6">
        <div className="header-left pt-2">
          <img src={logo} alt="Institute Logo" className="logo" />
          <div className="title">
            <h1>डॉ. बी.आर. अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान, जालंधर</h1>
            <h2>
              Dr. B.R. Ambedkar National Institute of Technology, Jalandhar
            </h2>
          </div>
        </div>
        <nav className="header-right"></nav>
      </header>
    </>
  );
}
