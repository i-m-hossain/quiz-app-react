import React from "react";
import classes from "./Summary.module.css";
import image from "./../../../images/success.png";
const Summary = () => {
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />5 out of 10
                </p>
            </div>

            <div className={classes.badge}>
                <img src={image} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;
