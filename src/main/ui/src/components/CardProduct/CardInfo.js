import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styleCard.css";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";

const CardProduct = ({ product }) => {
  return (
    <Card className="custom-card">
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
            display="inline"
            className="title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
          <Typography
            className="status"
            align="right"
            gutterBottom
            variant="h6"
            component="h2"
          >
            {product.productStatus?.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="actions-content">
        <Typography field="price" gutterBottom variant="h5" component="h2">
          {product.price} <EuroSymbolIcon />
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
