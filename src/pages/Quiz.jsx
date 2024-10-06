import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Wizard} from "react-use-wizard";
import Question from "../components/Question.jsx";
import Data from "../components/Data.js";
import {useSelector} from "react-redux";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");
    const {puntos} = useSelector((state) => state.puntos);

    useEffect(() => {
        setTitle(quizId);
        setQuestions(Data(quizId).filter((question) => !question.resuelta));
    }, []);

    return (
        <div className="mx-auto max-w-md min-h-screen grid place-items-center">
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

                <Wizard>
                    {questions.map((question, index) => (
                        <Question key={index} orden={index} question={question} title={title}/>
                    ))}
                </Wizard>
            </div>
        </div>
    );
}


export default Quiz;