import React from "react";
import { Link } from "react-router-dom";
import Video from "../Video/Video";
import classes from "./Videos.module.css";

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
        </div>
    );
};

export default Videos;
