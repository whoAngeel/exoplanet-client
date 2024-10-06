import {useWizard} from "react-use-wizard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sumarPuntos} from "../redux/puntos.slice.js";
import {Link} from "react-router-dom";

const Question = ({question, orden}) => {
    const {answers, correctAnswer} = question;
    const {previousStep, nextStep} = useWizard();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const {puntos} = useSelector((state) => state.puntos);
    const dispatch = useDispatch();

    const handleAnswerClick = async (index) => {
        setSelectedAnswer(index);
        if (index === correctAnswer) {
            dispatch(sumarPuntos());
            setTimeout(() => {
                nextStep();
            }, 1000);
        }
    };

    return (
        <div>
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
                                ? selectedAnswer === correctAnswer
                                    ? 'bg-green-500 text-white border-green-500'
                                    : 'bg-red-500 text-white border-red-500'
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
                <button className="bg-orange-400 text-white p-2 rounded-lg flex-1">Puntos: {puntos}/50</button>
                {orden < 4 && (<button className="bg-orange-400 text-white p-2 rounded-lg flex-1"
                                       onClick={() => nextStep()}>Next ⏭
                </button>)}

                {orden === 4 && (
                    <Link to='/' className="bg-green-400 text-white p-2 rounded-lg flex-1">
                        Finalizar 🏁
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Question;