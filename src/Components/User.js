import React from "react";
import { useState } from "react";
export default function User() {

    const [users, setUsers] = useState([
        { id: 1, name: "amin", age: 22 },
        { id: 2, name: "qadir", age: 20 },
        { id: 3, name: "sasan", age: 23 },
        { id: 4, name: "ali", age: 32 }
      ]);

      
  return (
    <div>
     {
        users.map(user=> (
            <div key={user.id}>
                <h3>
                    {user.id}-{user.name}
                </h3>
                <hr />
            </div>
        ))
     }


    </div>
  );
}
