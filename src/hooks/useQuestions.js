import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoId) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // database related works
            const db = getDatabase();
            console.log(db);
            const quizRef = ref(db, "quiz/" + videoId + "/questions");
            const quizQuery = query(quizRef, orderByKey());

            try {
                setError(false);
                setLoading(true);
                // request firebase database
                const snapshot = await get(quizQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [
                            ...prevQuestions,
                            ...Object.values(snapshot.val()), //object to array conversion
                        ];
                    });
                } else {
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuestions();
    }, [videoId]);

    return {
        loading,
        error,
        questions,
    };
};
export default useQuestions;
