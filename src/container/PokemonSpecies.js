
/*
Copyright's Sammy NGUYEN
*/
import React from "react";
import Loader from "./Loader";
import { Card, Col } from "react-bootstrap";

import { Container, Row } from "react-bootstrap";
import DataAbilities from "../components/Data/DataAbilities";
import DataStat from "../components/Data/DataStat";
import DataTypes from "../components/Data/DataTypes";
import DataDesc from "../components/Data/DataDesc";
import DataImg from "../components/Data/DataImg";

class PokemonSpecies extends React.Component {
  state = {
    data: [],
    dataStats: [],
    dataTypes: [],
    dataAbilities: [],
    dataSprites: [],
    dataDescription: [],
    isLoading: false
  };

  async componentDidMount() {
    const name = this.props.match.params.name.toLowerCase();

    this.setState({ isLoading: true });
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );

      const json = await response.json();
      const json2 = await response2.json();

      this.setState({
        data: json,
        dataStats: json.stats,
        dataTypes: json.types,
        dataAbilities: json.abilities,
        dataSprites: json.sprites,
        dataDescription: json2.flavor_text_entries,

        isLoading: false
      });
      console.log({ json });
      console.log({ json2 });

      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err.msg);

      throw err;
    }
  }

  render() {
    const {
      data,
      dataStats,
      dataTypes,
      dataAbilities,
      dataDescription,
      dataSprites
    } = this.state;
    const { isLoading } = this.state;

    return (
      <div className="Pokemon">
        <title>{data.name}</title>
        <Container>
          <Row>
            <Col lg="3"></Col>
            <Col lg="6">
              {isLoading ? (
                <Loader />
              ) : (
                <Card>
                  <Card.Header>
                    {data.id} <DataTypes dataTypes={dataTypes} />
                  </Card.Header>

                  <Card.Body>
                  <Card.Title className="text-center">{data.name}</Card.Title>
                  <Card.Text >
                   
                    <DataImg dataSprites={dataSprites} />
                    <br></br>
                    <strong>Capacités :</strong>{" "}
                    <DataAbilities dataAbilities={dataAbilities} />
                    <br></br>
                    <strong>Taille :</strong> {data.height}
                    <br></br>
                    <strong>Poid :</strong> {data.weight}
                    <br></br>
                    <DataDesc  dataDescription={dataDescription} />
                  </Card.Text>
                  <DataStat dataStats={dataStats} />
                  </Card.Body>
                </Card>
              )}
            </Col>

            <Col lg="3"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PokemonSpecies;
