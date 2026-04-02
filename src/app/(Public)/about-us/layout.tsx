"use client";
import Navbar from "@/component/Navbar";
import ContainerBox from "@/modules/signin/component/ContainerBox";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full min-h-screen bg-hero relative">
      <div className=" absolute  z-53 w-full top-5">
        <Navbar />
      </div>
      <div className="h-full  pt-24">
        <div className="flex items-center flex-col">
          <h1 className="font-passion-one py-8 max-w-64 md:max-w-full font-bold text-center  text-[#C77F90] text-5xl  lg:text-8xl uppercase">
            The story of Vicky-akku
          </h1>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default layout;
