"use client";
import React from "react";
import "swiper/css";
import GitHubProfile from "@/components/github-profile/GitHubProfile";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
    >
      <GitHubProfile/>
    </div>
  );
};

export default Page;
