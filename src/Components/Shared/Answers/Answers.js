import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import classes from "./Answers.module.css";

const Answers = ({ options = [], handleChange }) => {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <CheckBox
                    className={classes.answer}
                    text={option?.title}
                    key={index}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                />
            ))}
        </div>
    );
};

export default Answers;
