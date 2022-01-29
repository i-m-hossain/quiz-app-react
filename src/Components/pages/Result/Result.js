import React from "react";
import Summary from "../../Shared/Summary/Summary";
import Analysis from "../../Shared/Analysis/Analysis";
import { useLocation, useParams } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const { uid } = useParams();
    console.log(state, uid);
    return (
        <>
            <Summary />
            <Analysis />
        </>
    );
};

export default Result;
