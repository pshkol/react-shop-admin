import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response?.data);
  }

  useEffect(() => {
    fetchData().catch((e) => console.log(e));
  }, []);

  return data;
};

export default useFetch;
