import "./App.css";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataComponent from "./components/DataComponent/UserDataComponent";
import GameDataComponent from "./components/DataComponent/GameDataComponent";
import GameConsoleDataComponent from "./components/DataComponent/GameConsoleDataComponent";
import SingIn from "./components/UserAuth/SingIn";
import SingUp from "./components/UserAuth/SingUp";
import { Step1 } from "./components/ProductForm/Step1";
import { Step2 } from "./components/ProductForm/Step2";
import { Step3 } from "./components/ProductForm/Step3";
import Products from "./components/Products/Products";
import VinylDataComponent from "./components/DataComponent/VinylDataComponent";
import RecordPlayerDataComponent from "./components/DataComponent/RecordPlayerDataComponent";
import { Result } from "./components/ProductForm/Result";

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/users" component={UserDataComponent}></Route>
          <Route path="/singin" exact component={SingIn}></Route>
          <Route path="/singup" exact component={SingUp}></Route>
          <Route path="/videogames" exact component={GameDataComponent}></Route>
          <Route
            path="/gameconsole"
            exact
            component={GameConsoleDataComponent}
          ></Route>
          <Route
            path="/rplayer"
            exact
            component={RecordPlayerDataComponent}
          ></Route>
          <Route path="/vinyl" exact component={VinylDataComponent}></Route>
          <Route path="/" exact component={Products}></Route>
          <Route path="/basket" exact></Route>
          <Route path="/step1" exact component={Step1}></Route>
          <Route path="/step2" component={Step2}></Route>
          <Route path="/step3" component={Step3}></Route>
          <Route path="/result" component={Result}></Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
