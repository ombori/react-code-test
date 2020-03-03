import { useEffect, useState } from "react";

const useFetch = url => {
  const [data, updateData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json);
    }
    setTimeout(fetchData, 3000);
  }, [url]);

  return data;
};

export default useFetch;
