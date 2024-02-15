"use client"
import { AuthContext } from "@/contexts/AuthContext";
import { createProfile } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function FormAboutPage({ onProfileSaved }: any) {
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
        interests:[]

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
      className="flex justify-center items-center min-h-screen bg-slate-800"
    >
      <div className="w-full max-w-md px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">About</h1>
          <button 
            style={{ color: "rgba(148, 120, 62, 1)" }}
            onClick={handleCreateProfile}
          >
            Save & Update
          </button>
        </div>
        <div className="mt-10">
          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Display name:
            </p>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered w-full text-right pr-10"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Birthday:
            </p>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full text-right pr-10"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Horoscope:
            </p>
            <input
              type="text"
              placeholder="Horoscope (auto-generated)"
              className="input input-bordered w-full text-right pr-10"
              name="horoscope"
              readOnly // Tambahkan properti readOnly agar input tidak dapat diedit
            />
          </div>
          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Zodiac:
            </p>
            <input
              type="text"
              placeholder="Zodiac (auto-generated)"
              className="input input-bordered w-full text-right pr-10"
              name="zodiac"
              readOnly // Tambahkan properti readOnly agar input tidak dapat diedit
            />
          </div>

          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Height:
            </p>
            <input
              type="number"
              placeholder="Add height"
              className="input input-bordered w-full text-right pr-10"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <p
              className="font-medium text-xs text-white mr-2s w-40"
              style={{ color: "rgba(255, 255, 255, 0.33)" }}
            >
              Weight:
            </p>
            <input
              type="number"
              placeholder="Add weight"
              className="input input-bordered w-full text-right pr-10"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
