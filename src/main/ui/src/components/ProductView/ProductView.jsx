import { Container, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import OneProduct from "./OneProduct";
import RetroshareService from "../../Service/RetroshareService";

const ProductView = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const ruta = window.location.pathname.split("/");
    const id = ruta[ruta.length-1];
    RetroshareService.getOneProduct(id).then((response) => {
      const { data } = response;
      setProduct(data);
    });
  };

  return (
    <>
      <div>
        <Container id="products">
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <OneProduct key={products.id} product={products} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default ProductView;
