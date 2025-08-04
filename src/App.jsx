import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Skils from "./component/Skils";
import Project from "./component/Project";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="@container bg-gray-900">
      <Navbar />
      <Hero />
      <div className="my-2.5 md:my-20 border-t border-gray-400 w-3/4 mx-auto" />
      <Skils />
      <div className="my-2.5 md:my-20 border-t border-gray-400 w-3/4 mx-auto" />
      <Project/>
      <Footer/> 
    </div>
  );
}
