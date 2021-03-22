import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
  } from "@material-ui/core";
  import { ShoppingCart } from "@material-ui/icons";
  import "./styleCard.css";
  import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';


  
  const CardProduct = ({
    basket,
    product,
    addProduct = () => {},
    updateProduct,
    RemoveItemFromBasket,
  }) => {
    return (
      <Card className="custom-card" >
        <CardActionArea>
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
              
            >{product.productStatus?.status}
            </Typography>
          </CardContent>
        </CardActionArea>
        {basket && (
          <CardActions>
            <Typography
              className="basket-item-price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.price.formatted_with_symbol}
            </Typography>
          </CardActions>
        )}
        <CardActions className="actions-content" >
          {!basket && (
            <>
              <Typography
                field="price"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {product.price} <EuroSymbolIcon />
              </Typography>
              <Button
                size="large"
                className="custom-button"
                onClick={() => {
                  addProduct(product.id, 1);
                }}
              >
                <ShoppingCart /> Add to basket
              </Button>
            </>
          )}
          {basket && (
            <>
              <Button 
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  RemoveItemFromBasket(product.id);
                  
                }}
              >
                Remove
              </Button>
              <>
                <Button
                  size="small"
                  variant="outlined"
                  className="increase-product-quantity"
                  onClick={() => {
                    updateProduct(product.id, product.quantity + 1);
                  }}
                >
                  +
                </Button>
                <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    updateProduct(product.id, product.quantity - 1);
                  }}
                >
                  -
                </Button>
              </>
            </>
          )}
        </CardActions>
      </Card>
    );
  };
  
  export default CardProduct;