import React, {useState, useCallback} from 'react';
import {HEADERS, URI} from '../../constants';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async () => {
    try {
      const response = await fetch(URI, {headers: HEADERS});
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
