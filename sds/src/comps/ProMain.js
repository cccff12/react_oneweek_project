import React, { useState } from "react";
import "../css/main.css";

const ProMain = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  const handleInputChange1 = (e) => {
    const newValue = Number(e.target.value, 10);
    setInputValue1(newValue);
  };

  const handleInputChange2 = (e) => {
    const newValue = Number(e.target.value, 10);
    setInputValue2(newValue);
  };

  // 첫 번째 입력값을 넘는지 확인하는 함수
  const isFirstInputExceeded = inputValue2 > inputValue1;

  return (
    <>
      <input type="number" value={inputValue1} onChange={handleInputChange1} />
      <input type="number" value={inputValue2} onChange={handleInputChange2} />
      <div className="bar-graph">
        <div
          className="bar"
          style={{
            height: `${inputValue2}px`,
            backgroundColor: isFirstInputExceeded ? "red" : "#007bff",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProMain;
