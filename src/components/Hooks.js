import { useEffect, useState } from "react";

const Hooks = ({ props }) => {
  // useEffect 1 with empty dependency array (UseEffect on Initial Render)
  useEffect(() => {
    console.log("%c 1. Runs once after initial render", "color: crimson");
  }, []);

  // Use Effect 2 on Update (no dep array)
  useEffect(() => {
    console.log(
      "%c 2. Runs whenever the component receives new state or props.",
      "color: darkCyan"
    );
  });
  // Use Effect 2.a on Update (with dep array) => will run only if props or state changed
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(
      "%c 2.a Runs once after initial rendering and after every rendering if prop or state changes",
      "color: darkGreen"
    );
  }, [props, state]);

  // 3. returning a func will act as effect cleanup
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("%c Runs each second", "color: LightCoral");
  //   }, 1000);

  //   return () => {
  //     console.log("%c 3. Cleanup is done here", "color: purple");
  //     clearInterval(timer);
  //   };
  // }, [props]);

  return (
    <div className="hooks">
      <ul>
        <li>
          <p>
            1. Initial render /Mounting: In Class based components we have
            componentDidMount, which runs after the initial render. To replace
            this in Hooks we have: useEffect without any dependencies ([])
          </p>
        </li>
        <li>
          <p>
            2. Updating: In updating phase as a replacement for
            componentDidUpdate, we have the same hook, useEffect but this the we
            won’t be passing any 2nd arguments to it. <br /> But problem with
            this code is that it will run every time, even on the initial
            render, if you want your code to run only when a specific dependency
            has changed then you need to pass it as its 2nd argument.
          </p>
        </li>
        <li>
          <p>
            3. Unmounting: In unmounting we have only one lifecycle method
            componentWillUnmount and we can achieve that in Hooks by returning a
            function from useEffect, it will act as an effect cleanup.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
