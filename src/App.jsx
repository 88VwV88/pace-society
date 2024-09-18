import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import { useState } from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div>
      <Header isLogin={isLogin} setLogin={setLogin}></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="signup"
          element={<Signup setLogin={setLogin} isLogin={isLogin}></Signup>}
        ></Route>
        <Route
          path="login"
          element={<Login isLogin={isLogin} setLogin={setLogin}></Login>}
        ></Route>
        <Route path="dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
