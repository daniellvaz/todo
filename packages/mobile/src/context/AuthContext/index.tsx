import { createContext, ReactNode, useContext } from "react";

import { User } from "../../@types/user";
import useAuth from "./hooks/useAuth";

interface Data {
  email: string;
  password: string;
}

interface Props {
  children: ReactNode;
}

interface AuthProps {
  user: User | null;
  token: string | null;
  signIn: (data: Data) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthProps);

export default function AuthProvider({ children }: Props) {
  const { user, token, signIn, signOut } = useAuth()

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuthentication = () => {
  return useContext(AuthContext);
}