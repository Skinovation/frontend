import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Forum from "./Forum";
import IngredientsChecker from "./IngredientsChecker";
import Intro from "./intro";
import Navbar from "./navbar";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Silakan login terlebih dahulu.");
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Intro />
      <IngredientsChecker />
      <Forum />
      <Footer />
    </div>
  );
}

export default HomePage;
