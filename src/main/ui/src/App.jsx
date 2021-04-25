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
import ProductById from "./components/ProductView/ProductView";
import VinylDataComponent from "./components/DataComponent/VinylDataComponent";
import Vinyl from "./components/DataComponent/Vinyl";
import RecordPlayerDataComponent from "./components/DataComponent/RecordPlayerDataComponent";
import RecordPlayer from "./components/DataComponent/RecordPlayer";
import UserProfile from "./components/User/UserProfile";
import Cart from "./pages/cart";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/users" component={UserDataComponent}></Route>
          <Route path="/singin" exact component={SingIn}></Route>
          <Route path="/singup" exact component={SingUp}></Route>

          <Route path="/videogames-admin" exact component={GameDataComponent}></Route>
          <Route path="/videogames" exact component={Game}></Route>

          <Route path="/gameconsole-admin" exact component={GameConsoleDataComponent}></Route>
          <Route path="/gameconsole" exact component={GameConsole}></Route>

          <Route path="/rplayer-admin" exact component={RecordPlayerDataComponent}></Route>
          <Route path="/rplayer" exact component={RecordPlayer}></Route>

          <Route path="/vinyl-admin" exact component={VinylDataComponent}></Route>
          <Route path="/vinyl" exact component={Vinyl}></Route>

          <Route path="/" exact component={Products}></Route>
          <Route path="/cart" component={Cart} />
          <Route path="/chat" component={Chat} />
          <Route path="/pr/:id">
            <ProductView />
          </Route>
          <Route path="/pr/:id">
            <ProductById />
          </Route>
          <Route path="/step1" exact component={Step1}></Route>
          <Route path="/step2" component={Step2}></Route>
          <Route path="/step3" component={Step3}></Route>
          <Route path="/result" component={Result}></Route>
          <Route path="/profile" exact component={UserProfile}></Route>
        </Switch>
    </Router>
  );
};

export default App;
