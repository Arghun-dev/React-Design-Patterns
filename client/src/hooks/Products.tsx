import { useDataSource } from "./useDataSource";

const getProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();
  return data;
};

const Products = () => {
  const products = useDataSource(getProducts);

  console.log(products);

  return <div>This is products component</div>;
};

export default Products;
