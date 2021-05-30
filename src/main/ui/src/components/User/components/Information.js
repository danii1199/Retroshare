import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OneUser from "../../../lib/OneUser";
import AuthService from "../../../Service/Auth/AuthService";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
    width: "160px",
    height: "160px",
    borderRadius: "80px",
  },
  texto: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.common.white,
  },
  titulo: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(5),
  },
  infoUser: {
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-around",
  }
}));

const Information = () => {
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();
  const user = OneUser(currentUser?.id);
  const fechaReg = user.date;

  return (
    <Grid>
      <Grid className={classes.infoUser}>
        <Grid item>
          <img alt={user.avatar} className={classes.avatar} src={user.avatar} />
        </Grid>
        <Grid container>
          <Typography variant="h5" className={classes.texto}>
            UserName: {user.userName}
          </Typography>
          <Grid container>
            <Typography className={classes.texto}>
              Name: {user.firstName} {user.lastName}
            </Typography>
            <Typography className={classes.texto}>
              Email: {user.email}
            </Typography>
            <Typography className={classes.texto}>City: {user.city}</Typography>
            <Typography className={classes.texto}>
              Registrado en: {fechaReg}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.titulo}>
          Productos subidos por {user.userName}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Information;
