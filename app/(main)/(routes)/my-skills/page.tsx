import React from "react";
import "swiper/css";
import SkillComponent from "@/components/card/skillComponent";

const Page = () => {

    return (
        <div
            style={{backgroundImage: "url(/bg-2.jpg)"}}
            className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
        >
            <SkillComponent/>
        </div>
    );
};

export default Page;
