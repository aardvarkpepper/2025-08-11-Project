import { useEffect, useState } from 'react';
 
export const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
 
  useEffect(() => {
    if (!url) return; // Don't fetch if URL is not provided
 
    const controller = new AbortController(); // For cleanup
    setData(null); // Reset data on new fetch
    setError(null); // Reset error on new fetch
    setLoading(true);
 
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        // const response = await fetch(url, { ...options});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== 'AbortError') { // Don't set error if aborted
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
    // setLoading(false);
 
    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url, options]); // Re-run if url or options change
 
  return { data, loading, error };
}