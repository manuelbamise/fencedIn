import { useState } from "react";
import { ArrowBarDown, ArrowBarUp } from "react-bootstrap-icons";


const QuestionRow = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const showAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };


  return (
    <li className="border border-green-600 w-[60%] text-center">
      <div className="questionCard text-xl items-center border  border-red-600">
        <div className="question">how long does shipping take?</div>
        <button
          id="dropDown"
          className=" w-14 h-10 text- hover:bg-hoverStaple bg-stapleGreen ring ring-black"
          onClick={showAnswer}
        >
          {isAnswerVisible ? <ArrowBarUp className="te"/> : <ArrowBarDown className="text-right"/>}
        </button>
      </div>
      <div className={`answer ${isAnswerVisible ? "block" : "hidden"}`}>
        3 to 4 weeks in US approved states
      </div>
    </li>
  );
};

export default QuestionRow;
