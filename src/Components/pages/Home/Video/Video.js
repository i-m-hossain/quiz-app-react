import React from "react";
import classes from "./Video.module.css";
import image from "../../../../images/3.jpg";
const Video = () => {
    return (
        <a href="quiz.html">
            <div className={classes.video}>
                <img src={image} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
};

export default Video;
