import { useState, useEffect } from "react";
import axios from "axios";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(urlName: string, pageNo: number, prevData: []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('inside useFetch', prevData)

  //@ts-ignore
  useEffect(() => {
    setLoading(true);
    axios
        .get(`https://swapi.dev/api/${urlName}/?page=${pageNo}`)
        .then(response => {
          if (response.data) return response.data.results;
        })
        .then(data => {
          const newData = [
              ...prevData,
              ...data
          ];
          setData(newData)
        })
        .catch(err => {
          console.error(err);
          setError('An error occured. Please try again later.');
        })
        .finally(() => setLoading(false));
  }, [urlName, pageNo]);

  return [ data, loading, error ];
}