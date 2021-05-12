import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import CardProduct from "../CardProduct/CardProduct";
import { ProductsContext } from "../../contexts/ProductsContext";
import { lazy, useContext, Suspense } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
//import Carousel from "react-material-ui-carousel";
import "./style.css";
import VideoGameAPI from "../../lib/VideoGameAPI";
import GameConsoleAPI from "../../lib/GameConsoleAPI";
import VinylAPI from "../../lib/VinylAPI";
import RecordPlayerAPI from "../../lib/RecordPlayerAPI";
import AlbumIcon from "@material-ui/icons/Album";
import Item from "../Carousel/Item";
import Caru1 from "../Carousel/Caru1";

const CardProduct = lazy(() => import("../CardProduct/CardProduct"));
const Carousel = lazy(() => import("react-material-ui-carousel"));

const useStyles = makeStyles(() => ({
  carousel: {
    height: "auto",
  },
  imagenes: {
    margin: "auto",
    width: "auto",
    height: "auto",
    position: "absolute",
  },
  buttons: {
    marginBottom: "30px",
  },

  tittleH3: {
    margin: "30px",
  },
}));

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const games = VideoGameAPI();
  const consoles = GameConsoleAPI();
  const vinyls = VinylAPI();
  const recordPlayers = RecordPlayerAPI();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.carousel}>
        <Container maxWidth="lg">
          <Caru1 />
        </Container>
      </div>
      <div>
        <Container id="buttons" className={classes.buttons}>
          <Grid item>
            <Button className="button" component={Link} to="/videogames">
              Games
            </Button>
            <Button className="button" component={Link} to="/gameconsole">
              Consoles
            </Button>
            <Button className="button" component={Link} to="/rplayer">
              R.Player
            </Button>
            <Button className="button" component={Link} to="/vinyl">
              Vinyl
            </Button>
          </Grid>
        </Container>
      </div>

      <Container id="products">
        <Grid container spacing={8}>
          <Grid container>
            <Typography variant="h3" className={classes.tittleH3}>
              Ultimas Subidas
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {products
              .slice(products.length - 4, products.length)
              .map((product) => {
                return (
                  <Grid key={product.id} item sm={6} md={3}>
                    <CardProduct product={product} />
                  </Grid>
                );
              })}
          </Grid>
          {games.length > 0 && (
            <Grid container>
              <Typography variant="h3" className={classes.tittleH3}>
                Games
              </Typography>
            </Grid>
          )}
          <Grid container spacing={2}>
            {games.slice(games.length - 4, games.length).map((product) => {
              return (
                <Grid key={games.id} item sm={6} md={3}>
                  <CardProduct product={product} />
                </Grid>
              );
            })}
          </Grid>
          {consoles.length > 0 && (
            <Grid container>
              <Typography variant="h3" className={classes.tittleH3}>
                Videoconsoles
              </Typography>
            </Grid>
          )}
          <Grid container spacing={2}>
            {consoles
              .slice(consoles.length - 4, consoles.length)
              .map((product) => {
                return (
                  <Grid key={consoles.id} item sm={6} md={3}>
                    <CardProduct product={product} />
                  </Grid>
                );
              })}
          </Grid>
          {vinyls.length > 0 && (
            <Grid container>
              <Typography variant="h3" className={classes.tittleH3}>
                Vinyls
              </Typography>
            </Grid>
          )}
          <Grid container spacing={2}>
            {vinyls.slice(vinyls.length - 4, vinyls.length).map((product) => {
              return (
                <Grid key={vinyls.id} item sm={6} md={3}>
                  <CardProduct product={product} />
                </Grid>
              );
            })}
          </Grid>
          {recordPlayers.length > 0 && <Grid item></Grid>}
          <Grid container spacing={2}>
            {recordPlayers
              .slice(recordPlayers.length - 4, recordPlayers.length)
              .map((product) => {
                return (
                  <Grid key={recordPlayers.id} item sm={6} md={3}>
                    <CardProduct product={product} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </Suspense>
  );
};

export default Products;
