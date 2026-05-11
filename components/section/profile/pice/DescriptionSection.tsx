import React from 'react';
import {ProfileDto} from "@/lib/dto/ProfileDto";

const DescriptionSection = ({profile}: { profile?: ProfileDto }) => {
    return <div>
        <p className="text-gray-200  md:block ">
            {profile?.description ?? ""}
        </p>
    </div>
};

export default DescriptionSection;
