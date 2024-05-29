// TODO: 이곳에 커스텀훅 작성하세요.

import { useEffect, useState } from "react";

function useFetch() {
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("response:", response);
        if (!response.ok) {
          //응답 실패시,작동 멈추고 콘솔에 "Network 오류"
          throw new Error("Network 오류");
        }
        const result = await response.json();
        setTitle(result.title);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return { title };
}

export default useFetch;
