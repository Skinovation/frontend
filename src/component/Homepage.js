import React from "react";
import Footer from "./Footer";
import Forum from "./Forum";
import IngredientsChecker from "./IngredientsChecker";
import Intro from "./intro";
import Navbar from "./navbar";

function HomePage() {
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
