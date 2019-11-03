/*
Copyright's Sammy NGUYEN
*/
import React from "react";
import Loader from "./Loader";
import ListPokemon from "../components/ListPokemon";
import Search from "../components/Search";
import { Container, Row, Col } from "react-bootstrap";

class Pokemon extends React.Component {
  state = {
    value: "",
    isLoading: false,
    data: []
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`);
      const json = await response.json();
      this.setState({
        data: json.pokemon_entries,

        isLoading: false
      });
      console.log({ json });
    } catch (err) {
      console.log(err.msg);
      this.setState({ isLoading: false });
      throw err;
    }
  }

  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      value: new FormData(ev.currentTarget).get("filter")
    });
  }
  render() {
    const { isLoading } = this.state;

    const filteredPokemon = this.state.data.filter(pokemons =>
      pokemons.pokemon_species.name
        .toLowerCase()
        .includes(this.state.value.toLowerCase())
    );
    return (
      <div className="Pokemon">
        <title>Pokédex</title>
        <Container>
          <Row>
            <Col lg="4"></Col>
            <Col lg="4">
              <Search
                handleSubmit={this.handleSubmit}
                value={this.state.value}
              />
            </Col>
            <Col lg="4"></Col>
          </Row>

          <Row>
            {isLoading ? <Loader /> : <ListPokemon data={filteredPokemon} />}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Pokemon;
