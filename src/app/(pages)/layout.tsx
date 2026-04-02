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
        {children}
      </div>
    </div>
  );
}

export default layout;
