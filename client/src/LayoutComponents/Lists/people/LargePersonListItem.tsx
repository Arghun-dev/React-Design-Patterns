import type { Person } from "../data";

const LargePersonListItem = ({ person }: { person: Person }) => {
  const { name, age, occupation, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
