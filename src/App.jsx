import React from "react";
import useFetch from "./hooks/useFetch";

// TODO: useFetch 라는 커스텀훅을 사용해서 리팩터링 해보세요

const App = () => {
  const { title } = useFetch();

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{title}</p>
    </div>
  );
};

export default App;
