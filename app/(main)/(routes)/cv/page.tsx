import Profile from "@/components/cv/Profile";
import Summary from "@/components/cv/Summary";
import Skills from "@/components/cv/Skills";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Training from "@/components/cv/Training";
import Projects from "@/components/cv/Projects";
import Languages from "@/components/cv/Languages";
import Hobbies from "@/components/cv/Hobbies";

const CVPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 text-black">
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
  );
};

export default CVPage;