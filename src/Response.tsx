import { useJsonFetch } from './hooks/useJsonFetch';

const Response = () => {
  const [{data}] = useJsonFetch(import.meta.env.VITE_DATA_URL + 'data');

  return (
    data && <div>Данные успешно загружены.</div>
  );
};

export default Response;