import React from "react";
import useFetch from "./hooks/useFetch";

export default function App() {

  const {error , loading , data} = useFetch('https://jsonplaceholder.typicode.com/users')
 
  return (
    <div className="App">
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data.map(user => <li key={user.id}>{user.name}</li> )}</p>}
    </div>
  );
}
