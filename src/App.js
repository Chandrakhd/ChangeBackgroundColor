import React, { useState } from "react";

function App() {
  let color = "orange";
  const [currentBg, setNewBg] = useState(color);
  const [name, setName] = useState("Bg Change");

  const updateBg = () => {
    let red = Math.floor(Math.random() * 255).toString(16);
    let green = Math.floor(Math.random() * 255).toString(16);
    let blue = Math.floor(Math.random() * 255).toString(16);

    let randomColor = `#${red}${green}${blue}`;

    setNewBg(randomColor);
  };
  const backOriginal = () => {
    setNewBg(color);
  };

  return (
    <div className="wrapper" style={{ backgroundColor: currentBg }}>
      <div className="container">
        <p className="bgcolorName">{currentBg.toUpperCase()}</p>
        <button className="bgChangeBtn" onClick={updateBg}>
          {name}
        </button>
      </div>
    </div>
  );
}
export default App;
