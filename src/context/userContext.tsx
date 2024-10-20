import { useContext, useState, createContext } from "react";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const UserContext = createContext<any>(null);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  async function login(formData: { username: string; password: string }) {
    const { username, password } = formData;
    // db check

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
  }

  async function logout() {}

  return {
    user,
    setUser,
    login,
    logout,
  };
};

export { useUser, UserContextProvider };
