const experiences = [
  {
    title: "Frontend Developer - ALLWEB Company IT (2022–Present)",
    details: [
      "Developed frontend UI for business and e-commerce websites",
      "Integrated REST APIs and managed UI state using Redux Toolkit",
    ],
  },
  {
    title: "Frontend Intern - ANT School (2021 - 7 months)",
    details: [
      "Learned basic web development and contributed to internal tools",
      "Built small projects with HTML, CSS, and JavaScript",
    ],
  },
  {
    title: "Freelance Projects (6 months)",
    details: [
      "Delivered responsive websites using React and Tailwind CSS",
      "Worked on RESTful API integration and mobile responsiveness",
    ],
  },
];

const Experience = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
    <ul className="space-y-3">
      {experiences.map((exp) => (
        <li key={exp.title}>
          <strong>{exp.title}</strong>
          <ul className="list-disc pl-6">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience; 