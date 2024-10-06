import {useWizard} from "react-use-wizard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sumarPuntos} from "../redux/puntos.slice.js";
import Data from "./Data.js";
import {useNavigate} from "react-router-dom";

const Question = ({question, orden}) => {
    const {answers, correctAnswer} = question;
    const {nextStep} = useWizard();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const {puntos} = useSelector((state) => state.puntos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false)

    const marcarComoResuelta = (index) => {
        question.resuelta = true;
        const preguntas = Data();
    }

    const handleAnswerClick = async (index) => {
        marcarComoResuelta(index);

        setSelectedAnswer(index);
        if (index === correctAnswer) {
            dispatch(sumarPuntos());
        }

        setTimeout(() => {
            nextStep();
        }, 1000);

        if (orden === 4) {
            setShowMessage(true);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    };

    return (
        <div>
            <div className="bg-white text-purple-800 text-xl font-semibold p-4 rounded-lg mb-4 shadow-md">
                {question.question}
            </div>
            {showMessage && (<h2 className="text-lg text-center font-bold">Quiz finalizado con exito 🎉🎉</h2>)}
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
                <p className="bg-orange-400 text-white p-2 rounded-lg flex-1 text-center">Puntos: {puntos}/50</p>
                <p className=" text-white p-2 rounded-lg flex-1 text-center">Pregunta {orden + 1} de 5</p>
            </div>
        </div>
    );
};

export default Question;