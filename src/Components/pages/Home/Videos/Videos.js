import React from "react";
import Video from "../Video/Video";
import classes from "./Videos.module.css";

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
};

export default Videos;
