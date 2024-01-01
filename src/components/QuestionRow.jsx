import { useState } from "react";
import {  ArrowBarDown, ArrowBarUp } from "react-bootstrap-icons";
const QuestionRow = () => {
  const [isAnswerVisible,setIsAnswerVisible] = useState(false);
  const showAnswer =()=>{
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <li className="border border-green-600 w-[60%] text-center">
      <div className="questionCard text-xl item-center border  border-red-600">
        <div className="question">how long does shipping take?</div>
        <button
          id="dropDown"
          className="w-[10%] px-2 hover:bg-blue-300 bg-blue-800 ring ring-blue"
          onClick={showAnswer}
        >
          {isAnswerVisible ? <ArrowBarDown/>: <ArrowBarUp/> }
        </button>
      </div>
      <div className={`answer ${isAnswerVisible ? "block" : "hidden"}`} >3 to 4 weeks in US approved states</div>
    </li>
  );
};

export default QuestionRow;
