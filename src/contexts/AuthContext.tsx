import React, { createContext, useState, ReactNode, useEffect } from "react";
import { register } from "@/utils/api";
import { redirect } from "next/navigation";

type PropsT = {
  children: ReactNode;
};

interface UserData {
  email: string;
  username: string;
  name?: string;
  birthday?: string;
  height?: number | string;
  weight?: number | string;
  token?: string | undefined | any;
  horoscope?: string;
  zodiac?: string;
}

interface AuthContextType {
  userData: UserData;
  updateUserData: (email: string, username: string) => void;
  registerUser: (
    email: string,
    username: string,
    password: string
  ) => void;
  updateUserDetails: (
    name: string,
    birthday: string,
    height: number | string,
    weight: number | string,
    horoscope: string,
    zodiac: string
  ) => void;
}

const defaultUserData: UserData = {
  email: "",
  username: "",
  name: "",
  birthday: "",
  height: 0,
  weight: 0,
  horoscope: "",
  zodiac: "",
};

export const AuthContext = createContext<AuthContextType>({
  userData: defaultUserData,
  updateUserData: () => {},
  registerUser: async () => {},
  updateUserDetails: () => {},
});

export const AuthProvider: React.FC<PropsT> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : defaultUserData;
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData((prevUserData) => ({ ...prevUserData, ...parsedUserData }));
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const updateUserData = (email: string, username: string) => {
    setUserData((prevUserData) => ({ ...prevUserData, email, username }));
  };

  const updateUserDetails = (
    name: string,
    birthday: string,
    height: number | string,
    weight: number | string,
    horoscope: string,
    zodiac: string
  ) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      name,
      birthday,
      height,
      weight,
      horoscope,
      zodiac,
    }));
  };

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const success = await register({ email, username, password });
      if (!success.ok) {
        console.log(success)
      } else {
        redirect("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };
  

  return (
    <AuthContext.Provider
      value={{ userData, updateUserData, registerUser, updateUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};