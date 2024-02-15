"use client"
import { PencilIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import FormAboutPage from "./About";

export default function Style() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-slate-900 h-screen py-2">
      <div
        className="bg-slate-800 h-48 rounded-lg mx-2 p-3"
        style={{
          backgroundColor: "rgba(22, 35, 41, 1)",
          backgroundImage:
            "url('https://e1.pxfuel.com/desktop-wallpaper/773/256/desktop-wallpaper-backgrounds-keren-background-keren.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>hello</p>
      </div>
      <div className="bg-slate-800 h-56 rounded-lg mx-2 my-8 p-3 relative mt-5">
        <div>
          <p>About</p>
          <button>
            <PencilIcon className="absolute top-0 right-0 w-6 h-6 text-gray-500 mr-2 mt-2" />
          </button>
        </div>
        {/* <div className="mt-5">
          <p
            className="font-medium text-sm mt-2 w-64"
            style={{ color: "rgba(255, 255, 255, 0.52)" }}
          >
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </p>
          <p
            className="font-medium text-sm mt-2 w-64"
            style={{ color: "rgba(255, 255, 255, 0.52)" }}
          >
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </p>
          <p
            className="font-medium text-sm mt-2 w-64"
            style={{ color: "rgba(255, 255, 255, 0.52)" }}
          >
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </p>
          <p
            className="font-medium text-sm mt-2 w-64"
            style={{ color: "rgba(255, 255, 255, 0.52)" }}
          >
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </p>
          <p
            className="font-medium text-sm mt-2 w-64"
            style={{ color: "rgba(255, 255, 255, 0.52)" }}
          >
            Birthday:{" "}
            <span className="text-white">28 / 08 / 1995 (Age 28)</span>
          </p>
        </div> */}
      </div>
      <div className="bg-slate-800 h-28 rounded-lg mx-2 p-3">
        <div>
          <p>Interest</p>
          <PencilIcon className="absolute top-0 right-0 w-6 h-6 text-gray-500 mr-2 mt-2" />
        </div>
        <div>
          <p>Add in your interest to find a better match</p>
        </div>
      </div>
    </div>
  );
}