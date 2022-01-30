import { useEffect, useState } from "react";

const useFetchApi = (url, method, headers) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);
    console.log(url, method, headers);
    useEffect(() => {
        const requestFetch = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: method || "GET",
                    headers: headers,
                });
                const data = await response.json();
                setResult(data);
                setLoading(false);
                setError(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        };
        requestFetch();
    }, []);
    return { loading, error, result };
};
export default useFetchApi;
