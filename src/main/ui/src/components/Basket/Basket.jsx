import { Grid, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";


import "./style.css";

const Basket = ({
  addProduct,
  basketData,
  updateProduct,
  handleEmptyBasket,
  RemoveItemFromBasket,
}) => {
  console.log(basketData)
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basketData.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <CardProduct
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
              <div className="col-2">
             
             <button onClick={() => addProduct(item)} className="add">
               +
             </button>
           </div>
            </Grid>
          );
        })}
      </Grid>
      

      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </Button>

        <Button
          size="small"
          variant="contained"
          component={Link}
          to="/checkout"
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Basket;