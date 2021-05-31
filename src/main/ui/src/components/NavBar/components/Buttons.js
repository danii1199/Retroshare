import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Person from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import RadioIcon from "@material-ui/icons/Radio";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import AlbumIcon from "@material-ui/icons/Album";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AuthService from "../../../Service/Auth/AuthService";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(6, 8, 6, 6),
    padding: theme.spacing(2, 8),
    boxShadow: "0 4px 10px 0 #D9B504",
  },
  buttonCart: {
    margin: theme.spacing(0, 1, 0, 3),
    boxShadow: "5px 6px 15px 1px #0D0D0D",
    float: "inline-end",
  },
}));

const botonesAdmin = [
  {
    nombre: "Users",
    enlace: "/users",
    icono: <Person />,
  },
  {
    nombre: "Games",
    enlace: "/videogames-admin",
    icono: <SportsEsportsIcon />,
  },
  {
    nombre: "Player",
    enlace: "/rplayer-admin",
    icono: <RadioIcon />,
  },
  {
    nombre: "Consoles",
    enlace: "/gameconsole-admin",
    icono: <VideogameAssetIcon />,
  },
  {
    nombre: "Vinyl",
    enlace: "/vinyl-admin",
    icono: <AlbumIcon />,
  },
];

const botonesUser = [
  {
    nombre: "Nuevo",
    enlace: "/step1",
    icono: <AddIcon />,
  },
];

const panelAdmin = [...botonesAdmin, ...botonesUser];

export const AdminButtonsIcons = (props) => {
  const classes = useStyles();

  const esAdmin = props.isAdmin
    ? panelAdmin
    : !props.isAdmin
    ? botonesUser
    : "";

  return esAdmin.map((boton) => {
    return (
      <MenuItem>
        <Button
          children={boton.icono}
          className={classes.buttonIcon}
          color="secondary"
          variant="contained"
          component={Link}
          to={boton.enlace}
        ></Button>
      </MenuItem>
    );
  });
};

export const AdminButtons = (props) => {
  const classes = useStyles();

  const esAdmin = props.isAdmin
  ? panelAdmin
  : !props.isAdmin
  ? botonesUser
  : "";
  
  return esAdmin.map((boton) => {
    return (
      <MenuItem>
        <Button
          children={boton.nombre}
          className={classes.buttonIcon}
          color="secondary"
          variant="outlined"
          component={Link}
          to={boton.enlace}
        ></Button>
      </MenuItem>
    );
  });
};

export const LogedButtons = (props) => {
  const logOut = () => AuthService.logout;

  if (props.isUser) {
    return (
      <MenuItem>
        <Button color="inherit" onClick={logOut()} href={"/"}>
          <ExitToAppIcon />
        </Button>
      </MenuItem>
    );
  } else {
    return (
      <MenuItem>
        <Button children="Log In" color="inherit" component={Link} to="/logIn">
          <ExitToAppIcon />
        </Button>
      </MenuItem>
    );
  }
};
