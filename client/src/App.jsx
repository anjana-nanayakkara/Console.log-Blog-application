import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Test from "./pages/test";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>

        <Route path="/projects" element={<Projects></Projects>}></Route>
        {/* <Route path="/" element={<></>}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
