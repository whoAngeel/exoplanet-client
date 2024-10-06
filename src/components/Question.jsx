import {useWizard} from "react-use-wizard";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Countdown from "react-countdown";

const Question = ({question, title, orden}) => {
    const {answers, correctAnswer} = question;
    const {handleStep, previousStep, nextStep} = useWizard();
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        console.log(Date.now() + 100000)
    }, []);

    handleStep(() => {
        console.log("Question", question);
    });

    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);
    };

    return (
        <div
            className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-4 rounded-xl shadow-lg text-white max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <Link
                    to={'..'}
                    className="text-white text-lg">
                    ←
                </Link>
                <span className="text-lg font-semibold">{title}</span>
                <button className="text-white text-lg">
                    ⚙️
                </button>
            </div>

            <div className="bg-white text-purple-800 text-xl font-semibold p-4 rounded-lg mb-4 shadow-md">
                {question.question}
            </div>
            <br/>
            <div className="space-y-2">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className={`w-full text-left p-3 rounded-lg text-lg border transition ${
                            selectedAnswer === index
                                ? 'bg-green-200 text-green-800 border-green-300'
                                : 'bg-white text-gray-800 border-gray-300'
                        }`}
                    >
                        <span className="font-bold mr-2">{String.fromCharCode(65 + index)}</span>
                        {answer}
                    </button>
                ))}
            </div>

            <div className="flex justify-between mt-6 space-x-2">
                {orden > 0 && <button className="bg-orange-400 text-white p-2 rounded-lg flex-1"
                                      onClick={() => previousStep()}>Previous ⏮️
                </button>}
                <button className="bg-orange-400 text-white p-2 rounded-lg flex-1">Puntos: 50/50</button>
                {orden < 4 && (<button className="bg-orange-400 text-white p-2 rounded-lg flex-1"
                                       onClick={() => nextStep()}>Next ⏭
                </button>)}
            </div>
        </div>
    );
};

export default Question;