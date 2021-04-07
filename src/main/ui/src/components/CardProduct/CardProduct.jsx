import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import "./styleCard.css";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CardProduct = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <Card className="custom-card" >
        <CardActionArea component={Link} to={`pr/${product.id}`}>
          <CardMedia
            component="img"
            alt={product.image}
            height="260"
            className="card-image"
            image={product.image}
            title={product.name}
          />
          <CardContent className="content">
            <Typography
              align="left"
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.name}
            </Typography>
            <Typography
              align="right"
              className="status"
              gutterBottom
              variant="h5"
              component="h2"
              color="secondary"
            >
              {product.productStatus?.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions className="actions-content">
        <Typography field="price" gutterBottom variant="h5" component="h2">
          {product.price} <EuroSymbolIcon />
        </Typography>
        {isInCart && (
          <>
            <Button
              size="large"
              className="custom-button"
              onClick={() => addProduct(product)}
            >
              <ShoppingCart /> Add to Cart
            </Button>
          </>
        )}
        {!isInCart && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                increase(product);
              }}
            >
              Add more
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CardProduct;
