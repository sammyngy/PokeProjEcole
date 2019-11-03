import React, { Component } from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokemon from "./container/Pokemon";
import PokemonSpecies from "./container/PokemonSpecies";
import PokedexImg from "./assets/img/pokdexelogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav
          className="justify-content-center"
          style={{ backgroundColor: "#dd082e" }}
          defaultActiveKey="/"
          as="ul"
        >
          <Nav.Item as="li">
            <Nav.Link
              style={{ color: "white", textAlign: "center" }}
              href="/"
            >
              <img
                style={{ width: "55%", marginBottom: "0%" }}
                src={PokedexImg}
                alt="nav-logo"
              ></img>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
        
          <Route
            exact
            path="/pokemon/:name"
            component={PokemonSpecies}
          ></Route>
          <Route path="/">
            <Pokemon />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
