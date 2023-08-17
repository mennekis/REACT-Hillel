import { useEffect, useState, useCallback, useMemo } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let abortController = useMemo(() => new AbortController(), []);

  const refetch = useCallback(async () => {
    setIsLoading(true);

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
  }, [url, abortController.signal]);

  useEffect(() => {
    refetch();

    return () => {
      abortController.abort();
    };
  }, [refetch, abortController]);

  return [data, error, isLoading, refetch];
};
export default useFetch;
