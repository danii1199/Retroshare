import { useContext } from "react";

import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);

  return (
    <Container title="Cart" description="This is the Cart page">
      <Grid>
        <Grid item xs>
            <Typography variant={"h2"}>Cart</Typography>
        </Grid>

        <Grid align="justify-center">
          <Grid item xs>
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <Grid className="p-3 text-center text-muted">
                Your cart is empty
              </Grid>
            )}

            {checkout && (
              <Grid align="justify-center">
                <p>Checkout successfull</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </Grid>
            )}
          </Grid>
          {cartItems.length > 0 && (
            <Grid item xs>
              <Grid item xs={3} align="justify-center">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <Grid className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
