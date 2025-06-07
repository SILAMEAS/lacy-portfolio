"use client"	
import Profile from "@/components/cv/Profile";
import Summary from "@/components/cv/Summary";
import Skills from "@/components/cv/Skills";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Training from "@/components/cv/Training";
import Projects from "@/components/cv/Projects";
import Languages from "@/components/cv/Languages";
import Hobbies from "@/components/cv/Hobbies";
import { Container } from "postcss";
import { Button } from "@/components/ui/button";
import { Margin, usePDF } from "react-to-pdf";

const CVPage = () => {
  const { toPDF, targetRef } = usePDF({
    filename: 'use-pdf-example.pdf',
    page: { margin: Margin.MEDIUM, orientation: 'landscape' },
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
    
      <div ref={targetRef}>
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 text-black scroll-smooth overflow-y-auto h-[calc(100vh-150px)] ">
            <Profile />
            <Summary />
            <Skills />
            <Experience />
            <Education />
            <Training />
            <Projects />
            <Languages />
            <Hobbies />
          </div>
      </div>
      <Button onClick={()=>toPDF()} className="mb-4">Download PDF</Button>
    </div>
   
  );
};

export default CVPage;