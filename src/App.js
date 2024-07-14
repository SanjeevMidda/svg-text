import { useState } from "react";
import "./index.css";

function App() {
  const [click, setClicked] = useState(true);

  return (
    <div
      className="App"
      onClick={() => {
        setClicked(!click);
      }}
    >
      <svg
        width="892"
        height="281"
        viewBox="0 0 892 281"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="892"
          height="281"
          rx="140.5"
          fill="#D9D9D9"
          id="rectangle"
        />

        <circle
          cx={click ? "130" : "760"}
          cy="140"
          r="117"
          fill={click ? "green" : "red"}
          margin-Left="10px"
          id="circle"
        />

        <text>
          <textPath href="#rectangle" fill={click ? "black" : "orange"}>
            Believe you can and you're halfway there.
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default App;
