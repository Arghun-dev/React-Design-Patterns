import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

export const products = [
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

export const people = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
    hobbies: ["Reading", "Coding", "Hiking"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    occupation: "Teacher",
    hobbies: ["Painting", "Cooking", "Yoga"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 40,
    occupation: "Doctor",
    hobbies: ["Traveling", "Photography", "Gardening"],
  },
];

app.get("/", (req: Request, res: Response) => {
  res.json({ products });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const foundedUser = people.find((user) => user.id === Number(id));
  res.json(foundedUser);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
