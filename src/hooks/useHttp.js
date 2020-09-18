import React, {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async () => {
   

    try {
      const response = await fetch(uri, {headers});
      const data = await response.json();
     
      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  });

  const clearError = useCallback(() => {
    setError(null);
  });

  return {loading, error, request, clearError};
};
