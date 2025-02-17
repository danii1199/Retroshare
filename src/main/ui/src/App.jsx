import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataComponent from "./components/DataComponent/UserDataComponent";
import GameDataComponent from "./components/DataComponent/GameDataComponent";
import GameConsoleDataComponent from "./components/DataComponent/GameConsoleDataComponent";
//import GameConsole from "./components/DataComponent/GameConsole";
import SingIn from "./components/UserAuth/SingIn";
import SingUp from "./components/UserAuth/SingUp";
import { Step1 } from "./components/ProductForm/Step1";
import { Step2 } from "./components/ProductForm/Step2";
import { Step3 } from "./components/ProductForm/Step3";
import Products from "./components/Products/Products";
import { Result } from "./components/ProductForm/Result";
import ProductView from "./components/ProductView/ProductView";
import VinylDataComponent from "./components/DataComponent/VinylDataComponent";
import RecordPlayerDataComponent from "./components/DataComponent/RecordPlayerDataComponent";
import UserProfile from "./components/User/UserProfile";
import CategoriasProductos from "./components/ProductsPage/CategoriasProductos";
import OneUser from "./components/User/OneUser";
import Cart from "./pages/cart";
import Chat from "./components/Chat/Chat";
import ResultSearch from "./components/Search/ResultSearch";
import Verification from "./components/Verification/Verification";
import { SignUpResult } from "./components/UserAuth/SignUpResult";
import { CartForm } from "./pages/cart/CartForm";
import { CartFormResult } from "./pages/cart/CartFormResult";
import { Grid } from "@material-ui/core";
import Main from "./components/CheckOut/Views/Main";
import theme from "./constans/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import NotFound from "./pages/NotFound";
import AuthService from "./Service/Auth/AuthService";
import Disabled from "./components/User/Disabled";
import HomePage from "./components/HomePage/HomePage";


const isAdmin = AuthService.getRoles() === "Admin";
const isDisabled = AuthService.getRoles() === "Disabled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Grid>
            <NavBar />
            <Route exact path="/check" component={Main} />

            {isAdmin ? (
              <Route exact path="/users" component={UserDataComponent} />
            ) : null}

            <Route path="/login" exact component={SingIn} />
            <Route path="/singup" exact component={SingUp} />
            {isAdmin ? (
              <Route
                path="/videogames-admin"
                exact
                component={GameDataComponent}
              />
            ) : null}
            <Route path="/videogames" exact component={CategoriasProductos} />
            {isAdmin ? (
              <Route
                path="/gameconsole-admin"
                exact
                component={GameConsoleDataComponent}
              />
            ) : null}
            <Route path="/gameconsole" exact component={CategoriasProductos} />
            {isAdmin ? (
              <Route
                path="/rplayer-admin"
                exact
                component={RecordPlayerDataComponent}
              />
            ) : null}
            <Route path="/rplayer" exact component={CategoriasProductos} />

            {isAdmin ? (
              <Route path="/vinyl-admin" exact component={VinylDataComponent} />
            ) : null}

            <Route path="/vinyl" exact component={CategoriasProductos} />
            <Route path="/cart" component={Cart} />
            <Route path="/chat" component={Chat} />
            <Route path="/pr/:id" component={ProductView} />
            <Route path="/search/pr/:id" component={ProductView} />
            <Route path="/user/:id" component={OneUser} />
            <Route path="/step1" exact component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/SignUpResult" component={SignUpResult} />
            <Route path="/step3" component={Step3} />
            <Route path="/result" component={Result} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/cartForm" exact component={CartForm} />
            <Route path="/cartFormResult" exact component={CartFormResult} />
            <Route path="/search/:name" exact component={ResultSearch} />
            <Route path="/verification/:name" exact component={Verification} />
            <Route path="/disabled" exact component={Disabled} />
            {!isDisabled ? (
              <Route path="/home" exact component={Products} />
            ) : null}
          </Grid>
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
