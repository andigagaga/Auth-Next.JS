import axios from "axios";

interface LoginData {
  email?: string;
  username?: string;
  password: string;
}

interface RegisterData {
  email: string;
  username: string;
  password: string;
}

interface DataProfile {
  name?: string;
  birthday?: string;
  height?: number;
  weight?: number;
  interests? : string[];
}

export const login = async (userData: LoginData): Promise<string | null> => {
  try {
    const response = await axios.post(
      "https://techtest.youapp.ai/api/login",
      userData
    );
    console.log("ini data login", response);

    // Simpan token di lokal storage
    localStorage.setItem("token", response.data.access_token);
    return response.data?.access_token;
  } catch (error) {
    console.log("login error", error);
    return null;
  }
};

export const register = async (
  userData: RegisterData
): Promise<boolean | any> => {
  try {
    const response = await axios.post(
      "https://techtest.youapp.ai/api/register",
      userData
    );
    return response.data.message === "User has been created successfully";
  } catch (error) {
    console.log("register error", error);
  }
};

export const createProfile = async (
  userProfile: DataProfile,
  token: string
): Promise<any> => {
  try {
    const response = await axios.post(
      "https://techtest.youapp.ai/api/createProfile",
      userProfile,
      {
        headers: {
          "x-access-token": `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("create profile error", error);
    throw error;
  }
};

export const updateProfile = async(interests: string[] | undefined, token: string): Promise<any> => {
  try {
    const response = await axios.put("https://techtest.youapp.ai/api/updateProfile", {interests}, {
      headers: {
        "x-access-token": `${token}`,
      }
    })
    console.log("data put", response.data)
  } catch (error) {
    console.log(error)
  }
}

export const getProfile = async (token?: string | null): Promise<any> => {
  try {
    const response = await axios.get(
      "https://techtest.youapp.ai/api/getProfile",
      {
        headers: {
          "x-access-token": `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
