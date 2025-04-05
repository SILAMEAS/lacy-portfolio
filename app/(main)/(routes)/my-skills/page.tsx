"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {Autoplay} from "swiper/modules";
import {useGetSkillQuery} from "@/redux/feature/skillSlice";
import {useAppDispatch} from "@/redux/hooks";
import {SkillData} from "@/constants/constants";
import GitHubProfile from "@/components/github-profile/GitHubProfile";

const Page = () => {
  const skills=useGetSkillQuery({});
  const dispatch=useAppDispatch();
  const RenderSkillSwiper=({reverseDirection=false}:{reverseDirection:boolean})=>{
    return  <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection:reverseDirection
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[100%] "
    >
      {/*skills?.currentData?*/}
      {SkillData.map((skill, index) => (
          <SwiperSlide key={skill.name}>
            <div className={'flex items-center justify-center h-[70px]  w-[70px] lg:h-[100px] lg:w-[100px] border p-[10px]'}
                 // onClick={()=>dispatch(onOpen({ type: 'modify-skill', data: { skill } }))}
            >
              <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={80}
                  height={80}
              />
            </div>
          </SwiperSlide>
      ))}
    </Swiper>
  }
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <GitHubProfile/>
    </div>
  );
};

export default Page;
