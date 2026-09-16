"use client"

import { questions } from "./data/questions";
import { useState } from "react";
import { QuestionItem } from "./componenents/QuestionItem";
import { Results } from "./componenents/results";

function Page() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de culinária'


    const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setcurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer]);
    loadNextQuestion()
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setcurrentQuestion(0);
    setShowResult(false);
  }



  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem 
          question= {questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnswered}
          />
          }
          {showResult &&
            <Results questions={questions} answers={answers}/>
          }
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 rounded-md bg-blue-500 text-white cursor-pointer">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;