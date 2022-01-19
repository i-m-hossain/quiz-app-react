import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../../hooks/useQuestions";
import Answers from "../../Shared/Answers/Answers";
import MiniPlayer from "../../Shared/MiniPlayer/MiniPlayer";
import ProgressBar from "../../Shared/ProgressBar/ProgressBar";

const Quiz = () => {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    console.log(questions);

    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
};

export default Quiz;
