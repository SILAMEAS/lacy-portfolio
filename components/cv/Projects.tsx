const projects = [
  "WOWNOW – Full stack delivery system (Spring Boot + Next.js)",
  "Portfolio Website – Built with NestJS and Next.js",
  "Discord Clone – Built with Next.js and Prisma",
  "Trello Board Clone – Built with Next.js",
  "Farmskin Website – Real business site (Next.js + Spring Boot)",
  "AI Email Template Generator – Next.js + Convex + AI",
  "Signature Project - https://certigna.io"
];

const Projects = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Notable Projects</h2>
    <ul className="list-disc pl-6">
      {projects.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Projects; 