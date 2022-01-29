import React from "react";
import classes from "./Summary.module.css";
import image from "./../../../images/success.png";
const Summary = ({ noq, score }) => {
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            <div className={classes.badge}>
                <img src={image} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;
