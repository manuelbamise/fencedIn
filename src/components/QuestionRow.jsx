// import { useState } from "react";
const showAnswer = () => {
  let answer = document.querySelector(".answer");
  if((answer.classList.contains("cardShow")) == false){
    answer.classList.add("cardShow");
  }else{
    answer.classList.remove("cardShow");
  }
  //console.log(answer.classList.contains("cardShow"));
};
const QuestionRow = () => {
  return (
    <li className="border border-green-600 w-[60%] text-center">
      <div className="questionCard text-xl item-center border  border-red-600">
        <div className="question">how long does shipping take?</div>
        <button
          id="dropDown"
          className="w-[10%] px-2 hover:bg-blue-300 bg-blue-800 ring ring-blue"
          onClick={showAnswer}
        >
          &dArr;
        </button>
      </div>
      <div className="answer hide">3 to 4 weeks in US approved states</div>
    </li>
  );
};

export default QuestionRow;
