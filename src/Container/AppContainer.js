import React from "react";
import Navbar from "../Component/Navbar";
import PortfolioContainer from "./PortfolioContainer";
import Footer from "../Component/Footer";

function AppContainer() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main className="pd-app">
        <PortfolioContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppContainer;
