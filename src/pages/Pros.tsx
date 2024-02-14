"use client"
import { AuthContext } from "@/contexts/AuthContext";
import { getProfile } from "@/utils/api";
import { PencilIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import FormAboutPage from "./About";
import Style from "./Style";

export default function Pros() {
  const router = useRouter();
  const [showEditAbout, setShowEditAbout] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { userData, updateUserDetails } = useContext(AuthContext);
  const [profileData, setProfileData] = useState<any>(null);

  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    getProfile(token)
      .then((profileData) => {
        console.log("ini data profile", profileData);
        setProfileData(profileData.data);
      })
      .catch((error) => {
        console.log(error, " terjadi error saat mendapatkan data profile");
      });
  }, []);

  const toggleEditAbout = () => {
    setShowEditAbout((prev) => !prev);
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProfileSaved = () => {
    setShowEditAbout(false);
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
            className="w-6 h-6 text-gray-500 absolute top-2 right-2"
            onClick={() => router.push("/edit-profile")}
          />
          <div className="px-4 pb-2">
            <h1 className="font-bold text-lg">
              {profileData?.name}, 20
            </h1>
            <h3>Male</h3>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[359px] rounded-2xl bg-gray-800 p-4">
        {showEditAbout ? (
          <FormAboutPage onProfileSaved={handleProfileSaved} />
        ) : (
          <>
            <button
              className="absolute top-2 right-2"
              onClick={toggleEditAbout}
            >
              <PencilIcon
            className="w-6 h-6 text-gray-500 absolute top-2 right-2"  
          />
            </button>
            <div>
              <p className="font-bold text-sm">About</p>
              <div className="mt-2">
                <p>Birthday: {profileData?.birthday}</p>
                <p>Horoscope: {profileData?.horoscope}</p>
                <p>Zodiac: {profileData?.zodiac}</p>
                <p>Height: {profileData?.height} cm</p>
                <p>Weight: {profileData?.weight} kg</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-5 w-[359px] rounded-2xl bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">Interest</p>
          <button onClick={() => router.push("/interest")}>
            <PencilIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="mt-2">
          {profileData?.interests?.map((interest: string) => (
            <p>{interest}</p>
          ))}
        </div>
      </div>
      <div className="mt-auto" ref={aboutRef}></div>
    </div>
  );
}
