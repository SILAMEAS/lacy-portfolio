const skills = [
  { label: "Frontend", value: "JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, MUI, ShadCN, NativeBase" },
  { label: "Backend", value: "Django REST Framework, Spring Boot, Node.js, NestJS, Express.js" },
  { label: "Full Stack", value: "Next.js, MERN Stack" },
  { label: "Mobile Development", value: "React Native, Flutter" },
  { label: "API & CMS", value: "Strapi, Convex" },
  { label: "Databases", value: "PostgreSQL (Neon, Aiven), MongoDB, MySQL" },
  { label: "Tools", value: "Git, GitHub, Figma, Trello, Jira, Vercel, Render, Railway, UptimeRobot, Clerk, Swagger, Kinde, Cloudinary" },
  { label: "ORM", value: "Prisma, TypeORM" },
];

const Skills = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
    <ul className="list-disc pl-6 space-y-1">
      {skills.map((skill) => (
        <li key={skill.label}>
          <strong>{skill.label}:</strong> {skill.value}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills; 