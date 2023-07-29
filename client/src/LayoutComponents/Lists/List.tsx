import { JSXElementConstructor } from "react";
import type { Person, Product } from "./data";

type ListProps = {
  ItemComponent: JSXElementConstructor<any>;
} & (PersonList | ProductList);

type PersonList = {
  resourceName: "person";
  items: Person[];
};

type ProductList = {
  resourceName: "product";
  items: Product[];
};

const List = ({ items, resourceName, ItemComponent }: ListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default List;
