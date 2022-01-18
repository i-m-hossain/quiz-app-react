import React from "react";
import Question from "../Question/Question";
import classes from "./Analysis.module.css";

const Analysis = () => {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answered 5 out of 10 questions correctly</h4>
            <Question />
        </div>
    );
};

export default Analysis;
