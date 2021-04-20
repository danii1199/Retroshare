import { useState, useContext } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "./Search/SearchBar";
import AuthService from "../Service/Auth/AuthService";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { CartContext } from "../contexts/CartContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  background:{
    background: "#121212"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { itemCount } = useContext(CartContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logOut = () => AuthService.logout;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to="/singin">
        Sing In
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Chat</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  if (AuthService.getRoles() === "Admin") {
    //BARRA DE ADMINISTRADOR
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.background}>
          <Toolbar>
            <IconButton
              src="../public/discoVinilo.png"
              color="inherit"
              component={Link}
              to="/"
            >
              <img
                alt={"pokeball"}
                width={"50"}
                src={
                  "https://www.pikpng.com/pngl/b/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png"
                }
              />{" "}
              RetroShare
            </IconButton>
            <SearchBar />
            <Button color="inherit" component={Link} to="/users">
              Usuarios
            </Button>
            <Button color="inherit" component={Link} to="/videogames">
              Games
            </Button>
            <Button color="inherit" component={Link} to="/gameconsole">
              G.Console
            </Button>
            <Button color="inherit" component={Link} to="/rplayer">
              R.Player
            </Button>
            <Button color="inherit" component={Link} to="/vinyl">
              Vinyl
            </Button>
            <Button color="inherit" component={Link} to="/step1">
              New Product
            </Button>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton 
              aria-label="chat" 
              color="inherit"
              component={Link}
              to ="/chat">
                <Badge badgeContent={1} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="cart"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="exit app"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={logOut()}
                href={"/"}
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
  if (AuthService.getRoles() === "User") {
    //BARRA DE USER
    return (
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              src="../public/discoVinilo.png"
              color="inherit"
              component={Link}
              to="/"
            >
              <img
                alt={"pokeball"}
                width={"50"}
                src={
                  "https://www.pikpng.com/pngl/b/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png"
                }
              />{" "}
              RetroShare
            </IconButton>
            <SearchBar />
            <Button color="inherit" component={Link} to="/step1">
              New Product
            </Button>

            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton 
              aria-label="chat" 
              color="inherit"
              component={Link}
              to ="/chat">
                <Badge badgeContent={1} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="cart"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="exit app"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={logOut()}
                href={"/"}
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  } else {
    //BARRA DE ANON
    return (
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              src="../public/discoVinilo.png"
              color="inherit"
              component={Link}
              to="/"
            >
              <img
                alt={"pokeball"}
                width={"50"}
                src={
                  "https://www.pikpng.com/pngl/b/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png"
                }
              />{" "}
              RetroShare
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                component={Link}
                to="/singin"
              >
                LogIn
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
};

export default NavBar;
