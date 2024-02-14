"use client";
import { updateProfile } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function InterestPage() {
  const [selected, setSelected] = useState<string[] | undefined>([]);
  const router = useRouter();

  const handleCreateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const response = await updateProfile(selected, token);
      router.push("/profile");
      console.log(response)
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">About</h1>
          <button
            style={{
              color: "rgba(171, 255, 253, 1)",
              fontWeight: "400px",
              fontSize: "14px",
            }}
            onClick={handleCreateProfile}
          >
            Save
          </button>
        </div>
        <div>
          <h2
            className="font-bold text-sm"
            style={{ color: "rgba(148, 120, 62, 1)" }}
          >
            Tell everyone about yourself
          </h2>
          <h1
            className="font-bold text-xl mt-3 mb-10"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            What interest you?
          </h1>
        </div>
        <div>
          <TagsInput
            value={selected}
            onChange={setSelected}
            placeHolder="interests"
            classNames={{
              tag: "text-slate-950",
            }}  
          />
        </div>
      </div>
    </div>
  );
}
