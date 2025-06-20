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
import { Button } from "@/components/ui/button";
import { Margin, usePDF } from "react-to-pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";

const CVPage = () => {
  const { toPDF, targetRef } = usePDF({
    filename: 'cv.pdf',
    page: { margin: Margin.MEDIUM, orientation: 'landscape' },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-5">
      {/* Preview Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 text-black max-h-[calc(100vh-100px)] overflow-y-auto">
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

      {/* Off-screen PDF Section */}
      <div ref={targetRef} className="absolute left-[-9999px] top-0">
        <div className="max-w-4xl bg-white p-8 text-black">
          <Profile />
          <Summary />
          <br/>
          <br/>
          <Skills />
          <Experience />
          <Education />
          <Training />
          <Projects />
          <Languages />
          <Hobbies />
        </div>
      </div>

  
      <Button onClick={()=>toPDF()} className="mb-4 fixed bottom-4 right-4">
        Download PDF
      </Button>

        {/* PDF Download Button */}
        {/* <PDFDownloadLink document={<PdfDocument />} fileName="cv.pdf" style={{ textDecoration: "none" }}>
        {({ loading }) =>
          loading ? (
            <Button disabled>Preparing document...</Button>
          ) : (
            <Button>Download PDF</Button>
          )
        }
      </PDFDownloadLink> */}
    </div>
  );
};

export default CVPage;
