import React from "react";
import "./App.css";
import { Navbar, Layout, BackgroundAbstract, Container } from "./Components";
import { Home } from "./Pages";

function App() {
  return (
    <>
      <BackgroundAbstract />
      <Layout>
        <Home />
      </Layout>
      <Navbar />
    </>
  );
}

export default App;
