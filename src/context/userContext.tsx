import React, { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const userContext = () => {
  const { user, setUser } = useContext(UserContext);

  return {
    user,
    setUser,
  };
};

export { userContext, UserContextProvider };
