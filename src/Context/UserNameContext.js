import { createContext } from "react";

const UserNameContext = createContext();

export default UserNameContext;

const UsernameProvider = ({ children }) => {
  return (
  <UserNameContext.Provider>
    {children}
  </UserNameContext.Provider>
  )
};


export default UsernameProvider
