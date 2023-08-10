import React, { useState } from "react";
import "../css/main.css";
import "../css/first.scss";
import "../css/MyComponent.css";
import { CSSTransition } from "react-transition-group";

const ProMain = () => {
  const [nums, setInputValue] = useState({
    num1: "",
    num2: "",
  });

  const [nums2, setInputValue2] = useState({
    num1: "",
    num2: "",
  });

  const [showInput, setShowInput] = useState(false);
  const [showInput2, setShowInput2] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...nums, [name]: value });
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setInputValue2({ ...nums2, [name]: value });
  };

  const handleButtonClick = () => {
    setShowInput(true);
    setShowInput2(false);
  };

  const handleButtonClick2 = () => {
    setShowInput2(true);
    setShowInput(false);
  };

  // 첫 번째 입력값을 두 번째 입력값이 넘는지 확인함.
  // 넘으면 빨간색 그래프로 표시

  // 우선 첫번째 입력값(몸무게)을
  //  곱하기 0.8했을 때와 2.2 했을 때 함수를 하나씩 만들고
  // 그 함수를 넘는다면 빨간색으로 불 들어오게 해야할듯

  // 운동용 최대치
  const isFirstInputExceeded = nums2.num2 >= nums2.num1 * 2.2;
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
    <div className="super">
      <div className="marquee1">
        닭가슴살은 100g당 23g의 단백질이 들어있어요(편의점에서 파는 팩이 100g){" "}
      </div>
      <div className="marquee2">
        삼겹살은 100g당 17g의 단백질이 들어있어요(1인분 : 200g){" "}
      </div>
      <div className="marquee3">
        돼지목살은 100g당 23g의 단백질이 들어있어요{" "}
      </div>
      <div className="marquee4">소곱창은 100g당 9g의 단백질이 들어있어요 </div>
      {/* 일반식과 운동식버튼 */}
      <div className="concontainer">
        <div class="container">
          <div class="inner">
            {!showInput && (
              <button
                className="buttonordinary"
                type="button"
                onClick={handleButtonClick}
              >
                일반식
              </button>
            )}
            <div class="blob"></div>
          </div>
        </div>

        <div class="container">
          <div class="inner">
            {!showInput2 && (
              <button
                type="button"
                className="extrabuttonordinary"
                onClick={handleButtonClick2}
              >
                운동식
              </button>
            )}

            <div class="blob"></div>
          </div>
        </div>
      </div>

      {showInput2 && (
        <div className="input-container">
          {/* 헬창식 몸무게, 먹은량 입력칸 */}
          <input
            // type="number"
            name="num1"
            placeholder="몸무게를 입력하세요"
            className="input1"
            value={nums2.num1}
            onChange={handleInputChange2}
          />
          <input
            // type="number"
            placeholder="오늘 먹은 단백질을 입력하세요"
            name="num2"
            className="input2"
            value={nums2.num2}
            onChange={handleInputChange2}
          />
          {/* 막대그래프로 나타나는 곳 */}
          <div className="bar-graph">
            <div
              className="bar"
              style={{
                width: `${nums2.num1 * 15}px`,
                backgroundColor: isFirstInputExceeded ? "red" : "#4F98FF",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* 일반인 몸무게, 먹은량 입력칸 */}
      {showInput && (
        <div className="input-container">
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
          {/* 막대그래프로 나타나는 곳 */}
          <div className="bar-graph">
            <div
              className="bar"
              style={{
                width: `${nums.num1 * 15}px`,
                backgroundColor: isFirstInputExceeded2 ? "red" : "blue",
              }}
            ></div>
          </div>
        </div>
      )}
      <div className="barblank"></div>
      <div className="marquee5">
        마라탕은 100g당 10g의 단백질이 들어있어요(1인분 250g & 한 접시 500g){" "}
      </div>
      <div className="marquee6">
        떡볶이는 100g당 7g의 단백질이 들어있어요(1인분 200g){" "}
      </div>
      <div className="marquee7">단백질은 한 끼에 20 ~ 40g만 드세요 </div>
      <div className="marquee8">물은 100g당 0g의 단백질이 들어있어요 </div>
    </div>
  );
};

export default ProMain;
