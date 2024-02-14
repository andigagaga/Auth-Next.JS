"use client"
import { AuthContext } from "@/contexts/AuthContext";
import { createProfile } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Style({ onProfileSaved }: any) {
  const { userData } = useContext(AuthContext);
  const router = useRouter();
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(null);

  const handleCreateProfile = async () => {
    try {
      const userProfile = {
        name: name,
        birthday: birthday,
        height: parseInt(height),
        weight: parseInt(weight),
      };
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");
  
      await createProfile(userProfile, token);
      onProfileSaved(userProfile);
      router.push("/profile");
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center flex-col h-96"
      style={{ backgroundColor: "rgba(13, 29, 35, 1)" }}
    >
      <div className="text-left w-full max-w-xs">
        <h1 className="font-bold text-2xl text-white ml-5">Login</h1>{" "}
      </div>
      <div className="h-8" />
      <input
        type="text"
        placeholder="Enter Username/Email"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="h-3" />
      <input
        type="password"
        placeholder="Enter Password"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="h-8" />
      <button className="btn btn-info w-full max-w-xs text-white">Login</button>
      <div className="h-12" />
      <h4>
        No account?{" "}
        <span style={{ color: "rgba(148, 120, 62, 1)" }}>Register here</span>
      </h4>
    </div>
  );
}