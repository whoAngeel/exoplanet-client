import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Wizard} from "react-use-wizard";
import Question from "../components/Question.jsx";
import Data from "../components/Data.js";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(quizId);
        setQuestions(Data(quizId));
    }, []);

    return (
        <div className="mx-auto max-w-md min-h-screen grid place-items-center">
            <Wizard>
                {questions.map((question, index) => (
                    <Question key={index} orden={index} question={question} title={title}/>
                ))}
            </Wizard>
        </div>
    );
}


export default Quiz;