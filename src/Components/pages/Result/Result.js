import React from "react";
import Summary from "../../Shared/Summary/Summary";
import Analysis from "../../Shared/Analysis/Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../../hooks/useAnswers";
import _ from "lodash";

const Result = () => {
    const { state: qna } = useLocation(); //qna alias of state
    const { id } = useParams();
    const { answers, error, loading } = useAnswers(id);
    //score calculator
    const calculate = () => {
        //now we got correct answer and submitted answer, what we need to do is to compare the two objects. In order to do that, for every answer we will loop through the options and the correct indexes will be pushed to a new array 'correctIndexes', again as qna also has the same structure like answers we can easily access qna options which are different by using the index of answers. Make  a different array 'checkedIndexes' for the checked indexes. also for the result analysis add checked property to answers. now compare the two array using lodash method 'isEqual' and if it is true increase the value of score by 5.

        let score = 0;
        answers.forEach((question, index1) => {
            let correctIndexes = [], //from answers
                checkedIndexes = []; //from user submission(qna)
            question?.options.forEach((option, index2) => {
                if (option.correct) {
                    correctIndexes.push(index2);
                }
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true; //added a new property to answers array
                }
            });
            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
            }
        });
        return score;
    };

    const userScore = calculate();

    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>there is an error </div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary noq={answers.length} score={userScore} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
};

export default Result;
