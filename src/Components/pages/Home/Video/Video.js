import React from "react";
import classes from "./Video.module.css";
import image from "../../../../images/3.jpg";
import { Link } from "react-router-dom";
const Video = () => {
    return (
        <div className={classes.video}>
            <img src={image} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
};

export default Video;
