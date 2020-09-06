import { useState, useCallback, useEffect } from "react";

export default (request) => {
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = useCallback(async () => {
    setFetching(true);
    setData(null);

    try {
      const data = await request();
      setData(data);
      setFetched(true);
      setFetching(false);
    } catch (error) {
      setError(error);
      setFetching(false);
    }
  }, [request])

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return {
    fetching,
    fetched,
    data,
    error,
    doFetch,
  }
}
