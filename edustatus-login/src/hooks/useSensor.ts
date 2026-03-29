import { useState, useEffect } from 'react';

export type SensorStatus = 'AVAILABLE' | 'BUSY' | 'NOT_PRESENT';

export function useSensor() {
  const [status, setStatus] = useState<SensorStatus>('NOT_PRESENT');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Connect to the local Node.js Express server running on port 5000
    const eventSource = new EventSource('http://localhost:5000/stream');

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data && data.status) {
          setStatus(data.status);
        }
      } catch (err) {
        console.error('Failed to parse SSE data', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('SSE Error:', err);
      setError('Connection to sensor server lost.');
      eventSource.close();
      
      // Attempt to automatically reconnect after a 5 second delay
      setTimeout(() => {
        setError(null);
        // React component will unmount/remount on fast refresh or the user can reload.
        // A more robust app might manually recreate EventSource here.
      }, 5000);
    };

    // Cleanup when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);

  return { status, error };
}
