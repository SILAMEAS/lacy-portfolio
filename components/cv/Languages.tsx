const languages = [
  "Khmer – Native",
  "English – Normal",
];

const Languages = () => (
  <section className="mt-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Languages</h2>
    <ul className="list-disc pl-6">
      {languages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Languages; 