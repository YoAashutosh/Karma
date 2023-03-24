import React from "react";
import "./App.css";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/global/nav";
import About from "./component/aboutUs";
import Service from "./component/services";
import Contact from "./component/contact";
import Login from "./component/login";
import Signup from "./component/signup";
import Project from "./component/project";
import Footer from "./component/global/footer";
import News from "./component/news";
import Admin from "./component/admin";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
