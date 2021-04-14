import { Grid, Container, Typography, ThemeProvider } from "@material-ui/core";
import Product from "../Product/Product";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";

import "./style.css";
import VideoGameAPI from "../../lib/VideoGameAPI";
import GameConsoleAPI from "../../lib/GameConsoleAPI";
import VinylAPI from "../../lib/VinylAPI";
import RecordPlayerAPI from "../../lib/RecordPlayerAPI";

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

  const { products } = useContext(ProductsContext);
  const games = VideoGameAPI();
  const consoles = GameConsoleAPI();
  const vinyls = VinylAPI();
  const recordPlayers = RecordPlayerAPI();

  return (
    <>
      <div>
        <Container id="buttons">
          <Grid container spacing={1}>
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

      <Container xs id="products">
        <Grid container spacing={8}>
          <Grid item xs={12}>
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
                  <Grid key={product.id} item xs={12} sm={6} md={3}>
                    <Product key={product.id} product={product} />
                  </Grid>
                );
              })}
          </Grid>
          {games.length > 0 && (
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Games</Typography>
              </ThemeProvider>
            </Grid>
          )}
          <Grid container spacing={2}>
            {games.slice(games.length - 4, games.length).map((product) => {
              return (
                <Grid key={games.id} item xs={12} sm={6} md={3}>
                  <Product key={games.id} product={product} />
                </Grid>
              );
            })}
          </Grid>
          {consoles.length > 0 && (
            <Grid item xs={12}>
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
                  <Grid key={consoles.id} item xs={12} sm={6} md={3}>
                    <Product key={consoles.id} product={product} />
                  </Grid>
                );
              })}
          </Grid>
          {vinyls.length > 0 && (
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Vinyls</Typography>
              </ThemeProvider>
            </Grid>
          )}
          <Grid container spacing={2}>
            {vinyls.slice(vinyls.length - 4, vinyls.length).map((product) => {
              return (
                <Grid key={vinyls.id} item xs={12} sm={6} md={3}>
                  <Product key={vinyls.id} product={product} />
                </Grid>
              );
            })}
          </Grid>
          {recordPlayers.length > 0 && (
            <Grid item xs={12}>
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
                  <Grid key={recordPlayers.id} item xs={12} sm={6} md={3}>
                    <Product key={recordPlayers.id} product={product} />
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
