import React, { Fragment } from "react";
import CheckBox from "../CheckBox/CheckBox";
import classes from "./Answers.module.css";

const Answers = ({ options = [], handleChange, input }) => {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <CheckBox
                            className={classes.answer}
                            text={option?.title}
                            key={index}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        <CheckBox
                            className={`${classes.answer} ${
                                option.correct
                                    ? classes.correct
                                    : option.checked
                                    ? classes.wrong
                                    : null
                            }`}
                            text={option?.title}
                            key={index}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Answers;
