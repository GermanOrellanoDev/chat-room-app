import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserContextType {
  userId: string;
}

const UserContext = createContext<UserContextType>({ userId: "" });

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    let storedUserId = sessionStorage.getItem("userId");

    if (!storedUserId) {
      storedUserId = uuidv4();
      sessionStorage.setItem("userId", storedUserId);
      console.log("Nuevo userId generado:", storedUserId);
    } else {
      console.log("UserId existente encontrado:", storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
