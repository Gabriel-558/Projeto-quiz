import { useState } from "react";
import { Question } from "../types/Questions"

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}


export const QuestionItem = ({question, count, onAnswer}: Props) => {
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

        const checkQuestion = (key:number) => {
            if(selectedAnswer === null) {
                setSelectedAnswer(key);

                setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
                }, 1000)
            }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.questions}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                            
                            ${selectedAnswer !== null ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:opacity-60'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300 opacity-100'}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300 opacity-100'}
                            `}
                        key={key}
                        onClick={() => checkQuestion(key)}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}