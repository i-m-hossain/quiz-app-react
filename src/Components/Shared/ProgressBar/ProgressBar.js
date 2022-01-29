import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ prev, next, progress, submit }) => {
    console.log(progress);
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined">arrow_back</span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{progress}% Complete!</div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <Button
                className={classes.next}
                onClick={progress === 100 ? submit : next}
            >
                {progress !== 100 ? (
                    <>
                        <span>Next Question</span>
                        <span className="material-icons-outlined">
                            arrow_forward
                        </span>
                    </>
                ) : (
                    <span>Submit</span>
                )}
            </Button>
        </div>
    );
};

export default ProgressBar;
