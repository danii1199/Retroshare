import { Grid, Container } from "@material-ui/core";
import Product from "../Product/Product";
import { ProductsContext } from '../../contexts/ProductsContext';
import { useContext } from 'react';


import "./style.css";

const Products = () => {

  const { products } = useContext(ProductsContext)
  
  return (
    <>
      <div>
        <Container id="products">
          <Grid container spacing={3}>
            <Grid container spacing={4}>
              {products.map((product) => {
                return (
                  <Grid  key={product.id} item xs={12} sm={6} md={3}>
                    <Product  key={product.id} product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Products;
