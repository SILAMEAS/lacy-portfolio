import Image from "next/image";

const Profile = () => (
  <div className="flex items-center space-x-6">
  
    <div>
      <h1 className="text-3xl font-bold">Meas Sila</h1>
      <p className="text-blue-600">Frontend Developer</p>
      <p>Phnom Penh, Cambodia</p>
      <p className="flex flex-col">
        <a href="https://sila-portfolio.vercel.app/" className="text-blue-500 hover:underline">Portfolio : https://sila-portfolio.vercel.app/</a> 
        <a href="https://github.com/SILAMEAS" className="text-blue-500 hover:underline">GitHub : https://github.com/SILAMEAS</a> 
        <a href="https://kh.linkedin.com/in/meas-sila-204b1031b" className="text-blue-500 hover:underline">LinkedIn : https://kh.linkedin.com/in/meas-sila-204b1031b</a>
      </p>
    </div>
  </div>
);

export default Profile; 