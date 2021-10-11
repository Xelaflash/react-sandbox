import React from "react";
import { FilterableProductTable } from "./components/FilterableProductTable";
import Greeting from "./components/Greeting";
import Modal from "./components/Modal";
import Hooks from "./components/Hooks";
import ProgressBar from "./components/ProgressBar";
import FetchData from "./components/FetchData";
import logo from "./static/logo.svg";
import "./styles/App.css";
import Itw1 from './components/Itw1'
import twittImg from './images/Screenshot 2021-10-11 at 08.06.47.png';
import reRender from './images/re-render.png';

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
        <hr />
        <section className="react">
          <h2>Modal component from Scratch</h2>
          <p className="description">
            <em>Saw that as a technical interview exercice</em>
          </p>
          <Modal />
        </section>
        <hr />
        <section className="react">
          <h2>Hooks and dependency array guide</h2>
          <p className="disclaimer">
            <em>Check console to see lifecycle and logs</em>
          </p>
          <Hooks />
        </section>
        <hr />
        <section className="react">
          <h2>Progress Bar</h2>
          <ProgressBar seconds={10}/>
        </section>
        <hr />
        <section className="react">
          <h2>Fetching data (fetch, Axios, Axios async/await)</h2>
          <FetchData />
        </section>
        <hr />*/}
        <section className="react" id="itw1">
          <h2>React Itw Question (re-rendering)</h2>
          <p>
            <strong>
              ❓ React interview question. When incrementing the count,{" "}
              "SomeComponent" :{" "}
            </strong>{" "}
            <br />
            a. Will re-render each time <br />
            b. Won't re-render at all because it doesn't consume the count
            variable
          </p>
          <img
            src={twittImg}
            alt="React code for Itw question"
            className="twittImg"
          />
          <Itw1 />
          <p>
            Answer is :<strong>Yes!!!!</strong>
          </p>
          <blockquote>
            <strong>
              Every time the state of a component changes, that component and
              all of its children are re-rendered.
            </strong>
          </blockquote>
          <img
            src={reRender}
            alt="React re-rendering diagram"
            className="twittImg"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
