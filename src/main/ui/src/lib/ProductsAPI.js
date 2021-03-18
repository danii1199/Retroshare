import {useEffect, useState}  from "react";

const ProductsAPI = () => {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/pr-all");
    const products = await data.json();
    setProduct(products);
  };

  return product;
}

export default ProductsAPI;
