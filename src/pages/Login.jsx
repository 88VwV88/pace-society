import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import photo from "../assets/sign in.jpg";
import checkLogin from "../auth";

async function loginUser({ rollno, password }) {
  return await checkLogin({ rollno, password });
}

const Login = ({ isLogin, setLogin }) => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    rollno: "",
    password: "",
  });

  function changeHandler(event) {
    setLoginData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    setLogin(await loginUser(loginData));

    if (isLogin) {
      toast.success("Login successful!");
    } else {
      toast.error("Login failed invalid credentials!");
    }

    navigate("/");
  }

  return (
    <div className="py-20 my-14">
      <div className="flex bg-[#e1d7b7] rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="visible lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            PACE SOCIETY
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <form method="post" onSubmit={e => submitHandler(e)} action="/login">
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Roll Number
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="rollno"
                value={loginData.rollno}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forgot Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={loginData.password}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
