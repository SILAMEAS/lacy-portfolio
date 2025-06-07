const hobbies = [
  "Exploring new programming technologies",
  "Cloning and researching modern apps",
  "Open-source contribution and continuous learning",
];

const Hobbies = () => (
  <section className="mt-6 mb-10">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Hobbies</h2>
    <ul className="list-disc pl-6">
      {hobbies.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Hobbies; 