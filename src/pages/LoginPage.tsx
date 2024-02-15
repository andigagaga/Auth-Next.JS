"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { login } from "@/utils/api";
import { useRouter } from "next/navigation";
import ButtonNavigation from "@/components/ButtonNavigation";

const LoginPage = () => {
  const { updateUserData } = useContext(AuthContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const userData = inputValue.includes("@")
        ? { email: inputValue, password: password, username: "" }
        : { username: inputValue, password: password, email: "" };
      const token: string | null = await login(userData);
      const loToken = localStorage.getItem("token");
      if (token != null && token === loToken) {
        const data = JSON.stringify(userData);
        localStorage.setItem("userData", data);
        updateUserData(inputValue, password);
        router.push("/profile");
      } else {
        setError("Login failed");
        setTimeout(() => setError(null), 2000);
      }
    } catch (error) {
      setError("Failed to login");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen flex-col"
      style={{ backgroundColor: "rgba(13, 29, 35, 1)" }}
    >
      <div className="w-full mb-12">
        <ButtonNavigation onClick={() => router.push("/register")}/>
      </div>
      <div className="text-left w-full max-w-xs">
        <h1 className="font-bold text-2xl text-white ml-5">Login</h1>{" "}
      </div>
      <div className="h-8" />
      <p className="mb-2 text-red-700">{error}</p>
      <input
        type="text"
        placeholder="Enter Username/Email"
        className="input input-bordered w-full max-w-xs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="h-3" />
      <input
        type="password"
        placeholder="Enter Password"
        className="input input-bordered w-full max-w-xs"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="h-8" />
      <button
        className="btn btn-info w-full max-w-xs text-white"
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="h-12" />
      <h4>
        No account?{" "}
        <button onClick={() => router.push("/register")}>
          <span style={{ color: "rgba(148, 120, 62, 1)" }}>Register here</span>
        </button>
      </h4>
    </div>
  );
};

export default LoginPage;
