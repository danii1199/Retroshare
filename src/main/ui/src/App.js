import "./App.css";

import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDataComponent from "./components/UserDataComponent";
import GameDataComponent from "./components/GameDataComponent";

import SingUp from "./components/SingUp";
function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/users" component={UserDataComponent}></Route>
          <Route path="/singup" exact component={SingUp}></Route>
          <Route path="/videogames" exact component={GameDataComponent}></Route>
          <Route path="/" exact></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
