import { Card, Button, Container, Grid, Typography, CardMedia} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./StyleProductView.css";


const createMarkup = (text) => {
  return { __html: text };
};
const OneProduct = ({
  basket,
  product,
  addProduct,
  updateProduct,
  RemoveItemFromBasket,
}) => {
  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
        <Card className="custom-card" >
          <CardMedia
            component="img"
            alt={product.image}
            height="300"
            className="card-image"
            image={process.env.PUBLIC_URL + "/" + product.image}
            title={product.name}
          />
          </Card>
        </Grid>
        <Grid item xs={12} md={4} className="text">
          <Typography variant="h2">{product.name}</Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          ></Typography>
          <Typography variant="h3">Price:{product.price}€</Typography>
          <Button
            size="large"
            className="custom-button"
            onClick={() => {
               addProduct(product.id)
            }}
          >
            <ShoppingCart />
            Add Product
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OneProduct;