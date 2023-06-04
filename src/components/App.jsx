import React from "react";

function App() {
  const state = useState();

  function increase() {
    count++;
  }

  return (
    (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    ),
    document.getElementById("root")
  );
}

export default App;
