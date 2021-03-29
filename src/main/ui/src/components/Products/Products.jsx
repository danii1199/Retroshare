import { Grid, Container } from "@material-ui/core";
import Product from "../Product/Product";
//import Spinner from "../Spinner/Spinner";
import ProductsAPI from "../../lib/ProductsAPI";
import "./style.css";

const Products = () => {
  return (
    <>
      <div>
        <Container id="products">
          <Grid container spacing={4}>
            {ProductsAPI().map((product) => {
              return (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product product={product}  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Products;
