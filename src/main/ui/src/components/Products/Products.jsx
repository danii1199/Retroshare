import { Grid, Container } from "@material-ui/core";
import Product from "../Product/Product";
//import Spinner from "../Spinner/Spinner";
import Banner from "../Banner/Banner";
import ProductAPI from "../../lib/ProductsAPI";
import "./style.css";

const Products = () => {
  return (
    <>
      <div></div>

      <div>
        <Container id="products">
          <Grid container spacing={4}>
            {ProductAPI().map((product) => {
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
