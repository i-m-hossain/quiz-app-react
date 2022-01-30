import React, { useRef, useState } from "react";
import classes from "./MiniPlayer.module.css";
import ReactPlayer from "react-player";
const MiniPlayer = ({ vid, title }) => {
    const [status, setStatus] = useState(false);
    const btnRef = useRef();
    const youtubeUrl = `https://www.youtube.com/watch?v=${vid}`;
    const toggleMiniPlayer = () => {
        if (!status) {
            //if miniplayer status is false show floating button
            btnRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        } else {
            //else remove floating button
            btnRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        }
    };
    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={btnRef}
            onClick={toggleMiniPlayer}
        >
            <span className={`material-icons-outlined ${classes.open}`}>
                play_circle_filled
            </span>
            <span
                className={`material-icons-outlined ${classes.close}`}
                onClick={toggleMiniPlayer}
            >
                close
            </span>
            <ReactPlayer
                // className={classes.player} //this class doesn't work
                url={youtubeUrl}
                width="300px"
                height="168px"
                playing={status}
                controls
            />
            <p>{title}</p>
        </div>
    );
};

export default MiniPlayer;
