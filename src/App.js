import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [boxes, setBoxes] = useState(["A", "B", "C"]);

  const handleBoxAddition = (index) => {
    setBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes.splice(index, 0, "");
      return updatedBoxes;
    });
  };

  const handleInputChange = (index, value) => {
    setBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes[index] = value;
      return updatedBoxes;
    });
  };

  const handleNewBoxClick = (index) => {
    handleBoxAddition(index + 1);
  };

  return (
    <div className="container">
      {boxes.map((value, index) => (
        <div key={index} className="box">
          <input
            className="input-field"
            type="text"
            placeholder="Enter text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          {index !== boxes.length - 1 && (
            <div
              className="new-box"
              onClick={() => handleNewBoxClick(index)}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
