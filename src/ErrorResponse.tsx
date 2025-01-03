import { useJsonFetch } from './hooks/useJsonFetch';

const ErrorResponse = () => {
  const [{ error }] = useJsonFetch(import.meta.env.VITE_DATA_URL + 'error');

  return (
    error && <div>Error: {error}</div>
  );
};

export default ErrorResponse;