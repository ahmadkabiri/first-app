
import { useState, useEffect } from "react";
import axios from "axios";




export default function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
    
        axios
          .get(url)
          .then((res) => {
            setLoading(false);
            setData(res.data)
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message)
          });
      }, [url]);
    


  return {loading,error,data}
}
