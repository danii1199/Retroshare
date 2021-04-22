import { Grid, Container, Typography, ThemeProvider } from "@material-ui/core";
import CardProduct from "../CardProduct/CardProduct";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import "./style.css";
import VideoGameAPI from "../../lib/VideoGameAPI";
import GameConsoleAPI from "../../lib/GameConsoleAPI";
import VinylAPI from "../../lib/VinylAPI";
import RecordPlayerAPI from "../../lib/RecordPlayerAPI";
import AlbumIcon from "@material-ui/icons/Album";
import Image from "../../icons/n64icon.jpg";
import Item from "../Carousel/Item";

const Products = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "sans-serif",
    },
  });

  theme.typography.h3 = {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  theme.Carousel = {};

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
    },
  };

  const { products } = useContext(ProductsContext);
  const games = VideoGameAPI();
  const consoles = GameConsoleAPI();
  const vinyls = VinylAPI();
  const recordPlayers = RecordPlayerAPI();

  return (
    <>
      <Carousel
        
        NextIcon="next" // Change the "inside" of the next button to "next"
        PrevIcon="prev"
        IndicatorIcon={<AlbumIcon />}
        indicatorIconButtonProps={{
          style: {
            padding: "10px", // 1
            color: "#FFFFFF", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#121212", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "50px", // 5
            textAligh: "right", // 4
          },
        }}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && "Next"}
              {prev && "Previous"}
            </Button>
          );
        }}
      >
        {products.map((item) => (
          <Grid key={item.id}>
            <Item item={item} />
          </Grid>
        ))}
      </Carousel>

      <div>
        <Container id="buttons">
          <Grid container spacing={1}>
            <Button
              className="button"
              component={Link}
              to="/videogames"
              style={styles.paperContainer}
            >
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
          <Grid item>
            <ThemeProvider theme={theme}>
              <Typography fontFamily="BlinkMacSystemFont" variant="h3">
                Recently Add
              </Typography>
            </ThemeProvider>
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
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Games</Typography>
              </ThemeProvider>
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
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Videoconsoles</Typography>
              </ThemeProvider>
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
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Vinyls</Typography>
              </ThemeProvider>
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
          {recordPlayers.length > 0 && (
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">RecordPlayers</Typography>
              </ThemeProvider>
            </Grid>
          )}
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
    </>
  );
};

export default Products;
