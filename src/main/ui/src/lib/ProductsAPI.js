import { useEffect, useState } from "react";
import axios from "axios";

const ProductsAPI = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/pr-all").then((response) => {
      const { data } = response;
      setProduct(data);
    });
  };
  return product;
};

export default ProductsAPI;
