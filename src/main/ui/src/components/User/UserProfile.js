import OneUser from "../../lib/OneUser";
import AuthService from "../../Service/Auth/AuthService";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardInfo from "../CardProduct/CardInfo";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";


const useStyles = makeStyles({
  avatar: {
    marginTop:"20px",
    width: "160px",
    height: "160px",
    borderRadius: "80px",
  },
  texto: {
    marginTop:"20px",
    paddingLeft: "30px",
  },
  titulo: {
    marginBottom: "30px",
  },
  infoUser: {
    display: "flex",
    justifyContent: "space-around",
  },
  messageArea: {
    height: "65vh",
    overflowY: "auto",
  },
  background: {
    marginTop: "90px",
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();
  const user = OneUser(currentUser.id);
  const { products } = useContext(ProductsContext);
  return (
    <Container>
      <Grid>
        <Grid
          className={classes.infoUser}
        >
          <Grid item>
            <img
              alt={user.avatar}
              className={classes.avatar}
              src={user.avatar}
            />
          </Grid>
          <Grid container>
            <Typography variant="h5" className={classes.texto}>
              UserName: {user.userName}
            </Typography>
            <Typography className={classes.texto}>
              First Name: {user.firstName}
            </Typography>
            <Typography className={classes.texto}>
              Last Name: {user.lastName}
            </Typography>
            <Grid container>
              <Typography className={classes.texto}>
                Email: {user.email}
              </Typography>
              <Typography className={classes.texto}>
                Last Name: {currentUser.name}
              </Typography>
              <Typography className={classes.texto}>
                Phone Number: {currentUser.phoneNumer}
              </Typography>
              <Typography className={classes.texto}>
                City: {currentUser.city}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          className="file-field input-field"
          style={{ margin: "10px" }}
        ></Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.titulo}>
          Productos Subidos:
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {products.map((product) => {
          if(product.userOwner.id === user.id)
            return(
              <Grid key={product.id} item sm={6} md={3}>
                <CardInfo product={product} />
              </Grid>
            )
          return(<></>)
        })}
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.titulo}>
          Tus Compras:
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {products.map((product) => {
          console.log(product.userBuyer)
          if(product.userBuyer!==null)
          if(product.userBuyer.id === user.id)
            return(
              <Grid key={product.id} item sm={6} md={3}>
                <CardInfo product={product} />
              </Grid>
            )
            
          return(<></>)
        })}
      </Grid>
    </Container>
  );
};

export default UserProfile;
