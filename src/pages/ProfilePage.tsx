"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { getProfile } from "@/utils/api";
import { PencilIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import FormAboutPage from "./About";
import calculateAge from "@/utils/calculate";

export default function ProfilePage() {
  const router = useRouter();
  const [showEditAbout, setShowEditAbout] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { userData } = useContext(AuthContext);
  const [profileData, setProfileData] = useState<any>(null);
  const [userAge, setUserAge] = useState<number | string>("")

  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    getProfile(token)
      .then((profileData) => {
        setProfileData(profileData.data);

        const birtday = profileData.data.birthday;
        console.log("lahir", birtday)

        const age = calculateAge(birtday);
        setUserAge(age)
      })
      .catch((error) => {
        console.log(error, " terjadi error saat mendapatkan data profile");
      });
  }, [token]);
  console.log("umur", userAge)

  const toggleEditAbout = () => {
    setShowEditAbout((prev) => !prev);
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white py-10">
      <h3 className="text-center">{userData.email || userData.username}</h3>
      <div className="relative mt-5 w-[359px] h-48 mx-auto rounded-2xl overflow-hidden">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/773/256/desktop-wallpaper-backgrounds-keren-background-keren.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <PencilIcon
            className="w-6 h-6 text-gray-500 absolute top-2 right-2 cursor-pointer"
            onClick={() => router.push("/edit-profile")}
          />
          <div className="px-4 pb-2">
            <h1 className="font-bold text-lg">{profileData?.name}, {userAge}</h1>
            <h3>Male</h3>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[359px] rounded-2xl bg-gray-800 p-4">
        {showEditAbout ? (
          <FormAboutPage onProfileSaved={() => setShowEditAbout(false)} />
        ) : (
          <>
            <div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm">About</p>
                <button onClick={toggleEditAbout}>
                  <PencilIcon className="w-6 h-6 text-gray-500 top-2 right-2 cursor-pointer" />
                </button>
              </div>
              <div className="mt-2">
                <p
                  className="font-medium text-sm mt-2 w-64"
                  style={{ color: "rgba(255, 255, 255, 0.52)" }}
                >
                  Birthday:{" "}
                  <span className="text-white">{profileData?.birthday}</span>
                </p>
                <p
                  className="font-medium text-sm mt-2 w-64"
                  style={{ color: "rgba(255, 255, 255, 0.52)" }}
                >
                  Horoscope:{" "}
                  <span className="text-white">{profileData?.horoscope}</span>
                </p>
                <p
                  className="font-medium text-sm mt-2 w-64"
                  style={{ color: "rgba(255, 255, 255, 0.52)" }}
                >
                  Zodiac:{" "}
                  <span className="text-white">{profileData?.zodiac}</span>
                </p>
                <p
                  className="font-medium text-sm mt-2 w-64"
                  style={{ color: "rgba(255, 255, 255, 0.52)" }}
                >
                  Height:{" "}
                  <span className="text-white">{profileData?.height} cm</span>
                </p>
                <p
                  className="font-medium text-sm mt-2 w-64"
                  style={{ color: "rgba(255, 255, 255, 0.52)" }}
                >
                  Weight:{" "}
                  <span className="text-white">{profileData?.weight} kg</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-5 w-[359px] h-auto rounded-2xl bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">Interest</p>
          <button onClick={() => router.push("/interest")}>
            <PencilIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
          </button>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-4">
          {profileData?.interests?.map((interest: string, index: number) => (
            <p
              key={index}
              className="text-white rounded-full flex justify-center items-center bg-opacity-10 bg-white"
            >
              {interest}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-auto" ref={aboutRef}></div>
    </div>
  );
}
