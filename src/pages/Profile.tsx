import React from "react";
import { ProfileComponents, Spacing } from "../components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

export default function Profile() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <image className="flex p-4 bg-slate-900 flex-col rounded-xl h-48" style={{backgroundImage: `url('https://berita.99.co/wp-content/uploads/2022/07/foto-profil-anime.jpg')`}}>
          <div className="container flex justify-between items-center w-full">
            <h1 className="font-bold text-sm text-white">About</h1>
            <CiEdit className="w-5 h-5" />
          </div>
          <Spacing />
          <p className="text-gray-600 font-medium text-xs">
            Birthday :{" "}
            <span className="text-white font-medium">
              28 / 08 / 1995 (Age 28)
            </span>
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
        </image>
        <Spacing />
        <div className="flex p-4 bg-slate-900 flex-col rounded-xl h-56">
          <div className="container flex justify-between items-center w-full">
            <h1 className="font-bold text-sm text-white">About</h1>
            <CiEdit className="w-5 h-5" />
          </div>
          <Spacing />
          <p className="text-gray-600 font-medium text-xs">
            Birthday :{" "}
            <span className="text-white font-medium">
              28 / 08 / 1995 (Age 28)
            </span>
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
        <Spacing />
        <div className="flex p-4 bg-slate-900 flex-col rounded-xl h-40">
          <div className="container flex justify-between items-center w-full">
            <h1 className="font-bold text-sm text-white">About</h1>
            <CiEdit className="w-5 h-5" />
          </div>
          <Spacing />
          <div className="flex flex-wrap justify-between w-full">
            <p className="text-white font-semibold text-sm text-center flex-1 bg-gray-800 rounded-full px-4 py-2 mr-2">
              Birthday
            </p>
            <p className="text-white font-semibold text-sm text-center flex-1 bg-gray-800 rounded-full px-4 py-2 mr-2">
              Horoscope
            </p>
            <p className="text-white font-semibold text-sme text-center flex-1 bg-gray-800 rounded-full px-4 py-1">
              Zodiac
            </p>
          </div>
          <Spacing />
          <div className="flex flex-wrap justify-between w-full">
            <p className="text-white font-semibold text-sm text-center flex-1 bg-gray-800 rounded-full px-4 py-2 mr-2">
              Height
            </p>
            <p className="text-white font-semibold text-sm text-center flex-1 bg-gray-800 rounded-full px-4 py-2 mr-2">
              Weight
            </p>
            <p className="text-white font-semibold text-sm text-center flex-1 bg-gray-800 rounded-full px-4 py-2">
              lower
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
