"use client";
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";

export default function ButtonNavigation({email, onClick}: any) {
  const router = useRouter();

  return (
    <div className="flex items-center h-10 mt-10">
      <button className="flex" onClick={onClick}>
        <ChevronLeftIcon className="w-6 h-6" />
        <p>Back</p>
      </button>
      <p className="flex justify-center flex-grow">{email}</p>
    </div>
  );
}
