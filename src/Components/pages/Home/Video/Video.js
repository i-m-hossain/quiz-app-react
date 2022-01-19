import React from "react";
import classes from "./Video.module.css";
const Video = ({ title, id, noq }) => {
    return (
        <div className={classes.video}>
            <img
                src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="video thumbnail"
            />
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p>{noq} questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
};

export default Video;
