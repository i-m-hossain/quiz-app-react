import { useEffect, useState } from "react";

const useFetchApi = (url, method, headers) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);
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
    }, []); //no dependency is used here, because the headers is an object which changes every time and useEffect also rerender the component causing an infinity loop, besides we need to fetch the api only once.  
    return { loading, error, result };
};
export default useFetchApi;
