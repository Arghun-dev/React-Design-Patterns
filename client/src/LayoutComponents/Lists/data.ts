export interface Person {
  name: string;
  age: number;
  occupation: string;
  hobbies: string[];
}

export interface Product {
  name: string;
  price: number;
  category: string;
}

export const people: Person[] = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
    hobbies: ["Reading", "Coding", "Hiking"],
  },
  {
    name: "Jane Smith",
    age: 25,
    occupation: "Teacher",
    hobbies: ["Painting", "Cooking", "Yoga"],
  },
  {
    name: "Bob Johnson",
    age: 40,
    occupation: "Doctor",
    hobbies: ["Traveling", "Photography", "Gardening"],
  },
];

export const products: Product[] = [
  {
    name: "Laptop",
    price: 1000,
    category: "Electronics",
  },
  {
    name: "T-shirt",
    price: 20,
    category: "Clothing",
  },
  {
    name: "Headphones",
    price: 50,
    category: "Electronics",
  },
];
