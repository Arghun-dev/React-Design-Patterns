import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

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

app.get("/", (req: Request, res: Response) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
