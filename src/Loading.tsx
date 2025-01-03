import { useJsonFetch } from './hooks/useJsonFetch';

const Loading = () => {
  const [{ loading }] = useJsonFetch(import.meta.env.VITE_DATA_URL + 'loading');


  return (
    loading ? <div>Загрузка...</div> : null
  );
};

export default Loading;