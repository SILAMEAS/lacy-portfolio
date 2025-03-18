"use client";
import React from "react";
import "swiper/css";
import GitHubProfile from "@/components/git-repository/GitHubProfile";

const Page = () => {
    return  <div
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
        <div className="flex justify-center items-center min-h-screen bg-inherit">
            <GitHubProfile/>
        </div></div>
        };

        export default Page;
