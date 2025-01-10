import { useState, useEffect } from "react";

const useHttp = (fn, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fn(params);
        setData(result);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [fn, params]);

  return [data, loading, isError];
};

export default useHttp;
