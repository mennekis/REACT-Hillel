import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    const getData = async () => {
      setIsLoading(true);
      setRefetch([]);
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw Error(" Something wrong with fetching");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        SetError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return [data, error, isLoading, refetch];
};
export default useFetch;
