import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ prev, next, progress, submit }) => {
    const [tooltip, setTooltip] = useState(false);
    const tooltipRef = useRef();
    const toggleTooltip = () => {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = "none";
        } else {
            setTooltip(true);
            tooltipRef.current.style.display = "block";
            tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
        }
    };

    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined">arrow_back</span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={tooltipRef}>
                    {progress}% Complete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${progress}%` }}
                        onMouseOut={toggleTooltip}
                        onMouseOver={toggleTooltip}
                    ></div>
                </div>
            </div>

            <Button
                className={classes.next}
                onClick={progress === 100 ? submit : next}
            >
                {progress !== 100 ? (
                    <span>Next Question</span>
                ) : (
                    <span>Submit</span>
                )}
                <span className="material-icons-outlined">arrow_forward</span>
            </Button>
        </div>
    );
};

export default ProgressBar;
