import React from "react";
import Summary from "../../Shared/Summary/Summary";
import Analysis from "../../Shared/Analysis/Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../../hooks/useAnswers";

const Result = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const { answers, error, loading } = useAnswers(id);
    // const calculator = ()=>{

    // }
    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>there is an error </div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary answers={answers} />
                    <Analysis qna={state} />
                </>
            )}
        </>
    );
};

export default Result;
