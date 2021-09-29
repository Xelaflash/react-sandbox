import React from "react";
import { FilterableProductTable } from "./components/FilterableProductTable";
import Greeting from "./components/Greeting";
import Modal from "./components/Modal";
import logo from "./static/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My React playground </h1>
        <img src={logo} alt="" className="App-logo" />
      </header>
      <main>
        {/* <section className="react">
          <h2>Filterable Products Table</h2>
          <FilterableProductTable />
        </section>
        <hr />
        <section className="react">
          <h2>Manage side-effects with the useEffect hook</h2>
          <Greeting />
        </section>
        <hr /> */}
        <section className="react">
          <h2>Modal component from Scratch</h2>
          <p className="description">
            <em>Saw that as a technical interview exercice</em>
          </p>
          <Modal />
        </section>
      </main>
    </div>
  );
}

export default App;
