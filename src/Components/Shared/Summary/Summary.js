import React from "react";
import classes from "./Summary.module.css";
import image from "./../../../images/success.png";
const Summary = ({ answers }) => {
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />5 out of {answers.length}
                </p>
            </div>

            <div className={classes.badge}>
                <img src={image} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;
