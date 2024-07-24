import React from "react";
import Navbar from "../Component/Generic_Components/Navbar";
import PortfolioContainer from "./PortfolioContainer";
import Footer from "../Component/Generic_Components/Footer";

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
