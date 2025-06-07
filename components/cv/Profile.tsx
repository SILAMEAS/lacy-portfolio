const Profile = () => (
  <div className="flex items-center space-x-6">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQGpLqWf-a-p1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722511483957?e=2147483647&v=beta&t=_mB_0xBgvLpp8_iVAg0Joz1f8Qhyg5VAXgF-iHwWtVc"
      alt="Meas Sila"
      className="w-28 h-28 rounded-full object-cover"
    />
    <div>
      <h1 className="text-3xl font-bold">Meas Sila</h1>
      <p className="text-blue-600">Frontend Developer | Full Stack Developer</p>
      <p>Phnom Penh, Cambodia</p>
      <p>
        <a href="https://sila-portfolio.vercel.app/" className="text-blue-500 hover:underline">Portfolio</a> |{" "}
        <a href="https://github.com/SILAMEAS" className="text-blue-500 hover:underline">GitHub</a> |{" "}
        <a href="https://kh.linkedin.com/in/meas-sila-204b1031b" className="text-blue-500 hover:underline">LinkedIn</a>
      </p>
    </div>
  </div>
);

export default Profile; 