const education = [
  "BSc in Computer Science, Royal University of Phnom Penh (2019–2023)",
  "Pannasastra University (English – 2019–2020)",
  "ANT Institute (C++/OOP – 2019–2020)",
  "Chea Sim Samaki High School (2013–2019)",
  "Ou Bek Korm Primary School (2008–2013)",
];

const Education = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
    <ul className="list-disc pl-6">
      {education.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Education; 