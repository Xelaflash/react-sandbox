import React, { useEffect, useState } from 'react';


export default function Greeting() {
  // initial state is either the value of name key in local storage or empty string
  // const [name, setName] = useState(window.localStorage.getItem("name") || "");
  //!! Use useEffect's lazy initialization feature by providing a function as the initial value. We do this so that the value is only ran on initialization and not on each rerender which could cause performance problems.
  //!! i.e When you use a function callback to set the initial state in a useState hook, it is only called when initially rendered.
  const [name, setName] = useState(
    () => {
      console.log('initial render');
      return window.localStorage.getItem("name") || "";
    });

  const [count, setCount] = useState(0);

  useEffect(() => {
    //!! Runs every time Greeting Component is rendered
    console.log("greeting useEffect");
    //!! Similar to componentDidMount and componentDidUpdate
    // first arg is the key second the value (here value of name given by the state)
    window.localStorage.setItem("name", name);
    //!! The purpose of the useEffect dependency array is to sync the state of the world with the state of our application
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }

  console.log('gretting rendrered')
  return (
    <div className="container">
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <div>
        <form action="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={handleChange} value={name} />
        </form>{" "}
        {name ? <strong>Hello {name}</strong> : "Please type your name"}
      </div>
    </div>
  );
}
