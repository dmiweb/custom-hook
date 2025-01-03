import { useState, useEffect } from "react";

type FetchResult = {
  data: { status: string } | null;
  loading: boolean;
  error: string | null;
};

export const useJsonFetch = (url: string, opts = {}): [FetchResult] => {

  const [data, setData] = useState<{ status: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          switch (response.status) {
            case 404:
              setError(response.status + ' - ' + 'Ошибка сети');
              break;
            case 500:
              setError(response.status + ' - ' + 'Ошибка ответа сервера');
              break;
          }
        }

        const resData = await response.json();

        setData(resData);
      } catch (err) {
        if (err instanceof SyntaxError) { setError('Ошибка парсинга') }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [{ data, loading, error }];
};