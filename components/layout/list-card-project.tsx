"use client"
import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import CardProjectCmd from "@/components/card/card-project-cmd";
import {useGetProjectsQuery} from "@/redux/feature/projectSlice";
import {Loading} from "@/components/Loading";

const LayoutCardListProject = () => {
    const getProjects=useGetProjectsQuery({});
    return <div className='h-full w-full'>
         <div className='container my-[100px] flex flex-wrap-reverse overflow-hidden overflow-y-auto h-[80%] gap-4 p-5 mx-auto'>
             {getProjects.isLoading ? <Loading/> :
                getProjects?.currentData?.map((project, index) => (
                  <CardProjectCmd project={project}/>
                ))}
         </div>
    </div>
};

export default LayoutCardListProject;
