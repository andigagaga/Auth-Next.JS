import React from "react";
import Spacing from "./Spacing";
import { CiEdit } from "react-icons/ci";

export default function ProfileComponents() {
  return (
    <div className="flex p-4 h-screen bg-slate-900 flex-col rounded-xl h-56">
      <div className="container flex justify-between items-center w-full">
        <h1 className="font-bold text-sm text-white">About</h1>
        <CiEdit className="w-5 h-5"/>
      </div>
      <Spacing />
      <p className="text-gray-600 font-medium text-xs">
        Birthday :{" "}
        <span className="text-white font-medium">28 / 08 / 1995 (Age 28)</span>
      </p>
      <p className="text-gray-600 my-4 font-medium text-xs">
        Horoscope : <span className="text-white font-medium">Virgo</span>
      </p>
      <p className="text-gray-600 font-medium">
        Zodiac : <span className="text-white font-medium">Pig</span>
      </p>
      <p className="text-gray-600 my-4 font-medium text-xs">
        Height : <span className="text-white font-medium">175 cm</span>
      </p>
      <p className="text-gray-600 font-medium text-xs">
        Weight : <span className="text-white font-medium">69 kg</span>
      </p>
    </div>
  );
}
