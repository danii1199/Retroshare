import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Product from "./Product";
import RetroshareService from "../../Service/RetroshareService";
import "./StyleProductView.css";
import Card from "../CardSlider/card/Card";
const ProductView = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const id = window.location.pathname.split("/")[2];
    RetroshareService.getOneProduct(id).then((response) => {
      const { data } = response;
      setProduct(data);
    });
  };
  return (
    <>
      <div>
        <Container id="products">
          <Grid container spacing={4}>
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} />
              <Card />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default ProductView;
