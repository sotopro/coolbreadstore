import { useEffect, useState } from "react";

import { ErrorFactory, errorData, errorType } from "../utils/errors";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const status = response.status;
        const statusText = response.statusText || "Something went wrong";
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } else if (errorData.hasOwnProperty(status)) {
          const { type, message } = errorData[status];
          const error = ErrorFactory.createError(type, message, status);
          setError(error);
        } else {
          const error = ErrorFactory.createError(errorType.unknown, statusText, status);
          setError(error);
        }
      } catch (error) {
        const customError = ErrorFactory.createError(errorType.connection, error);
        setError(customError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, isLoading };
};

export default useFetch;
