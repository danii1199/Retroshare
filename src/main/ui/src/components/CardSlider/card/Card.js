import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import ProductsAPI from "../../../lib/ProductsAPI";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./style.css";
import { Link as RouterLink } from "react-router-dom";

const Cards = (basket, addProduct) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        {ProductsAPI().map((product) => {
          return (
            <Card className="card-design">
              <Link
                underline="none"
                component={RouterLink}
                to={`pr/${product.id}`}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.image}
                    height="260"
                    className="card-image"
                    image={process.env.PUBLIC_URL + "/" + product.image}
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
              </Link>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
};
export default Cards;
