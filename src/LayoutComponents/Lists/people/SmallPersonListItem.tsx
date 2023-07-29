import type { Person } from "../data";

type SmallPersonType = Pick<Person, "name" | "age">;

const SmallPersonListItem = ({ person }: { person: SmallPersonType }) => {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallPersonListItem;
