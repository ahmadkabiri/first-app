import { createContext,useState } from "react";

const UserNameContext = createContext();

export {UserNameContext};

const UsernameProvider = ({ children }) => {
  const [username, setUserName] = useState("Mohammad Amin");

  return (
  <UserNameContext.Provider value={username}>
    {children}
  </UserNameContext.Provider>
  )
};


export default UsernameProvider
