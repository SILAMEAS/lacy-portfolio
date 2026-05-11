import React from 'react';
import {ProfileDto} from "@/lib/dto/ProfileDto";
import Link from "next/link";

const DescriptionSection = ({profile}: { profile?: ProfileDto }) => {
    return <div>
        <p className="text-gray-200  md:block ">
            {profile?.description ?? ""}
        </p>
        <Link href="https://flowcv.com/resume/s9ge49ptke54"
              className="rounded-[20px] group relative bg-trasparent text-sm md:text-lg text-blue-500 max-w-[120px] md:max-w-[200px] lg:max-w-[200px] underline">preview
            cv</Link>
    </div>
};

export default DescriptionSection;
