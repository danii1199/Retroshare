import "./App.css";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataComponent from "./components/UserDataComponent";
import GameDataComponent from "./components/GameDataComponent";
import GameConsoleDataComponent from "./components/GameConsoleDataComponent";
import SingUp from "./components/SingUp";
import GameFormuComponent from "./components/GameFormuComponent";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/users" component={UserDataComponent}></Route>
          <Route path="/singup" exact component={SingUp}></Route>
          <Route path="/videogames" exact component={GameDataComponent}></Route>
          <Route
            path="/gameconsole"
            exact
            component={GameConsoleDataComponent}
          ></Route>
		 <Route
            path="/c-game"
            exact
            component={GameFormuComponent}
          ></Route>
          <Route path="/" exact component={Products}>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
