import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../../hooks/useQuestions";
import Answers from "../../Shared/Answers/Answers";
import MiniPlayer from "../../Shared/MiniPlayer/MiniPlayer";
import ProgressBar from "../../Shared/ProgressBar/ProgressBar";
import _ from "lodash";

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

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);
    console.log(qna);
    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionId: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
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
                    <ProgressBar />
                    <MiniPlayer />
                </>
            )}
        </>
    );
};

export default Quiz;
