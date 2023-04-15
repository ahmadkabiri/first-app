import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    setUser(null);
    setError(null);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoading(false);
        setUser(res.data)
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message)
      });
  }, []);

  return (
    <div className="App">
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {user && <p>user loaded !</p>}
    </div>
  );
}
