import { Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import Product from "./Product";
import "./StyleProductView.css";
import Card from "../CardSlider/card/Card";
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductView = () => {
  
  const { products } = useContext(ProductsContext)
  
 
  return (
    <>
      <div>
        <Container id="products">
          <Grid container spacing={4}>
            <Grid  item xs={12} sm={6} md={4}>
              <Product key={products.id} product={products} />
              <Card />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default ProductView;
