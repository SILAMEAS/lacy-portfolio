const training = [
  "2020: C, C++, OOP (RUPP & ANT Institute)",
  "2021: HTML, CSS, JavaScript (Udemy, SoloLearn)",
  "2022: Bootstrap, Tailwind, ReactJS, Express, JSON, PHP, MERN",
  "Currently: Learning Next.js, NestJS, Spring Boot, Django, and Python",
];

const Training = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Training Courses</h2>
    <ul className="list-disc pl-6">
      {training.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Training; 