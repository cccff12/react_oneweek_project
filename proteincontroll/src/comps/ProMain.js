import React, { useState } from "react";
import "../css/main.css";
import "../css/first.scss";
const ProMain = () => {
  const [nums, setInputValue] = useState({
    num1: "",
    num2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...nums, [name]: value });
  };

  // 첫 번째 입력값을 두 번째 입력값이 넘는지 확인함.
  // 넘으면 빨간색 그래프로 표시

  // 우선 첫번째 입력값(몸무게)을
  //  곱하기 0.8했을 때와 2.2 했을 때 함수를 하나씩 만들고
  // 그 함수를 넘는다면 빨간색으로 불 들어오게 해야할듯

  // 운동용 최대치
  const isFirstInputExceeded = nums.num2 >= nums.num1 * 2.2;
  // 일반용 최대치
  const isFirstInputExceeded2 = nums.num2 >= nums.num1 * 0.8;

  document.querySelectorAll(".inner").forEach((button) => {
    button.onmousemove = (e) => {
      const target = e.target;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
      button.style.setProperty("--height", `${rect.height}px`);
      button.style.setProperty("--width", `${rect.width}px`);
    };
  });

  return (
    <>
      <div className="concontainer">
        <div class="container">
          <div class="inner">
            <button type="button">일반식</button>
            <div class="blob"></div>
          </div>
        </div>
        <div class="container">
          <div class="inner">
            <button type="button">운동식</button>
            <div class="blob"></div>
          </div>
        </div>
      </div>
      <input
        // type="number"
        name="num1"
        placeholder="몸무게를 입력하세요"
        className="input1"
        value={nums.num1}
        onChange={handleInputChange}
      />
      <input
        // type="number"
        placeholder="오늘 먹은 단백질을 입력하세요"
        name="num2"
        className="input2"
        value={nums.num2}
        onChange={handleInputChange}
      />
      <div className="bar-graph">
        <div
          className="bar"
          style={{
            width: `${nums.num1 * 2}px`,
            backgroundColor: isFirstInputExceeded ? "red" : "blue",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProMain;
