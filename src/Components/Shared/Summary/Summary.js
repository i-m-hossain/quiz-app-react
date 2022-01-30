import React from "react";
import classes from "./Summary.module.css";
import successImage from "./../../../images/success.png";
import useFetchApi from "../../../hooks/useFetchApi";
const Summary = ({ noq, score }) => {
    const getQuery = () => {
        if ((score / (noq * 5)) * 100 < 50) {
            return "failed";
        } else if ((score / (noq * 5)) * 100 < 75) {
            return "good";
        } else if ((score / (noq * 5)) * 100 < 99) {
            return "very good";
        } else {
            return "excellent";
        }
    };
    const { loading, error, result } = useFetchApi(
        `https://api.pexels.com/v1/search?query=${getQuery()}&per_page=1`,
        "GET",
        {
            Authorization: process.env.REACT_APP_PEXEL_API_KEY,
        }
    );
    const image = result ? result?.photos[0].src.medium : successImage;
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div>Loading... </div>}
            {error && <div>error occured</div>}
            {!loading && !error && result && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
};

export default Summary;
