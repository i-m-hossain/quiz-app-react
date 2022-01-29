import React, { Fragment } from "react";
import Answers from "../Answers/Answers";
import classes from "./Question.module.css";
const Question = ({ answers = [] }) => {
    return (
        <>
            {answers.map((answer, index) => (
                <Fragment key={index}>
                    <div className={classes.question}>
                        <div className={classes.qtitle}>
                            <span className="material-icons-outlined">
                                help_outline
                            </span>
                            {answer.title}
                        </div>
                        <Answers input={false} options={answer.options} />
                        {/* input={false},because we dont want the analysis pages answer can be edited/checked . if input is true that will be for question page,else it will be fo result page  */}
                    </div>
                </Fragment>
            ))}
        </>
    );
};

export default Question;
