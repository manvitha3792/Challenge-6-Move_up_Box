import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [y, setY] = useState(300);

  const handleBox = () => {
    setY(y - 50);
  };
  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={handleBox}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={{ transform: `translateY(${y}px)` }} />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
