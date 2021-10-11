import React, { useState } from "react";

export default function Itw1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count is: {count}
      <SomeComponent />
      <button onClick={() => setCount((oldCount => oldCount + 1))}>Increase count</button>
    </div>
  )
}

function SomeComponent() {
  return <div>I'm some component, do i re-render each time?
    (pop up dev tools to check)
  </div>
}
