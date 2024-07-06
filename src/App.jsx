import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";
function App() {
  function method() {
    console.log("Aman: Button clicked");
  }
  const throttledBtn = useThrottle(method, 1000);

  return (
    <div className="">
      <button onClick={throttledBtn}>Click me!</button>
    </div>
  );
}

export default App;
