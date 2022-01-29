import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../../hooks/useQuestions";
import Answers from "../../Shared/Answers/Answers";
import MiniPlayer from "../../Shared/MiniPlayer/MiniPlayer";
import ProgressBar from "../../Shared/ProgressBar/ProgressBar";
import _ from "lodash";
import { useAuth } from "../../../Contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case "questions": //adding a new "checked=false" option to question option(currently missing) to control the checkbox later when user tick the checkbox
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state); //lodash is used to copy deeply nested objects, here we are copying our present state(qna) at first

            questions[action.questionId].options[action.optionIndex].checked =
                action.value;

            return questions;

        default:
            return state;
    }
};

const Quiz = () => {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //ENABLE THE QUESTION CHECKBOX: all the questions have multiple options, a user will mark the answer. By default our questions are not marked and there is no property like checked or mark. In order to answer the question we must create a copy of the questions and add a new property i.e. "checked=false" to the question  at first and later, when user will check, make them true.

    //DISPLAY ONE QUESTION:we have to navigate through all the question one by one. So we get all the questions at first using the useQuestions hook. Now in order to navigate through the questions we will use array indexes starting from 0(stored in currentQuestion state). when next button will be clicked the value of index will be increased by one.

    const [qna, dispatch] = useReducer(reducer, initialState); //qna =new copy of questions
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionId: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    };
    //handle when user clicks the next button to get the next question
    const nextQuestion = () => {
        console.log("i got clicked next");
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };
    //handle when user clicks the previous button to get the previous question
    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };
    //calculate perchentage
    const percentage =
        questions.length > 0
            ? ((currentQuestion + 1) / questions.length) * 100
            : 0;
    //save quiz answer to the database or submit quiz to the database
    const handleSubmit = async () => {
        const { uid } = currentUser;
        console.log(uid);
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna,
        });
        navigate(`/result/${id}`, { state: qna }); //result should be corresponding users data thats why route parameter is sent and also qna will be needed to analyze the data
    };
    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div> there is an error</div>}
            {!loading && !error && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        progress={percentage}
                        submit={handleSubmit}
                    />
                    <MiniPlayer />
                </>
            )}
        </>
    );
};

export default Quiz;
