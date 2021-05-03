import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataComponent from "./components/DataComponent/UserDataComponent";
import GameDataComponent from "./components/DataComponent/GameDataComponent";
import Game from "./components/DataComponent/Game";
import GameConsoleDataComponent from "./components/DataComponent/GameConsoleDataComponent";
import GameConsole from "./components/DataComponent/GameConsole";
import SingIn from "./components/UserAuth/SingIn";
import SingUp from "./components/UserAuth/SingUp";
import { Step1 } from "./components/ProductForm/Step1";
import { Step2 } from "./components/ProductForm/Step2";
import { Step3 } from "./components/ProductForm/Step3";
import Products from "./components/Products/Products";
import { Result } from "./components/ProductForm/Result";
import ProductView from "./components/ProductView/ProductView";
import VinylDataComponent from "./components/DataComponent/VinylDataComponent";
import Vinyl from "./components/DataComponent/Vinyl";
import RecordPlayerDataComponent from "./components/DataComponent/RecordPlayerDataComponent";
import RecordPlayer from "./components/DataComponent/RecordPlayer";
import UserProfile from "./components/User/UserProfile";
import OneUser from "./components/User/OneUser";
import Cart from "./pages/cart";
import Chat from "./components/Chat/Chat";
import { SignUpResult } from "./components/UserAuth/SignUpResult"
import { CartForm } from "./pages/cart/CartForm"
import { CartFormResult } from "./pages/cart/CartFormResult"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
      
        <Route exact path="/users" component={UserDataComponent} />
        <Route path="/login" exact component={SingIn} />
        <Route path="/singup" exact component={SingUp} />
        <Route path="/videogames-admin" exact component={GameDataComponent} />
        <Route path="/videogames" exact component={Game} />

        <Route
          path="/gameconsole-admin"
          exact
          component={GameConsoleDataComponent}
        />
        <Route path="/gameconsole" exact component={GameConsole} />

        <Route
          path="/rplayer-admin"
          exact
          component={RecordPlayerDataComponent}
        />
        <Route path="/rplayer" exact component={RecordPlayer} />
        <Route path="/vinyl-admin" exact component={VinylDataComponent} />
        <Route path="/vinyl" exact component={Vinyl} />
        <Route path="/" exact component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/chat" component={Chat} />
        <Route path="/pr/:id" component={ProductView} />
        <Route path="/user/:id" component={OneUser} />
        <Route path="/step1" exact component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/SignUpResult" component={SignUpResult} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/cartForm" exact component={CartForm} />
        <Route path="/cartFormResult" exact component={CartFormResult} />
      </Switch>
    </Router>
  );
};

export default App;
