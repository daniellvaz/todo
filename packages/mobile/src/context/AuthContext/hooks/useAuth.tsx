import { AxiosError } from "axios";
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Data } from "../../../data";
import { api } from "../../../services/api";
import setLocalStorage from "../../../services/localStorage";
import { User } from "../../../@types/user";

export default function useAuth() {
  const [user, setUser] = useState<User | null>({} as User);
  const [token, setToken] = useState<string | null>(null);

  async function handleUser() {
    const response = await AsyncStorage.getItem("user");

    if(!response) {
      return;
    }

    const { data } = await JSON.parse(response);
    setUser(data.user);
    setToken(data.token);
  }

  const signIn = async (data: Data) => {
    try {
      const response = await api.post("/authenticate", data);

      await setLocalStorage().setItem(
        "user",
        JSON.stringify(response.data)
      );
      
      await handleUser();
    } catch (error) {
      alert((error as AxiosError).response?.data)
    }
  }
  
  const signOut = () => {
    setUser(null);
  }

  useEffect(() => {
    handleUser();
  }, []);

  return { 
    user,
    token,
    signIn,
    signOut
  }
}