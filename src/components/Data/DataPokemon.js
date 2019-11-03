import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../App.css";
import Loader from "../../container/Loader";
import { Link } from "react-router-dom";
const DataPokemon = props => {
  const { name, id, isLoading } = props;

  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?raw=true`;
  return (
    <Col lg={3}>
      <Link to={`/pokemon/${name}`}>
        <Card>
          <Card.Header>{id}</Card.Header>

          <Card.Body className="mx-auto">
            <Card.Text>
              {isLoading ? <Loader /> : <img alt={name} src={urlImage} />}
            </Card.Text>

            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default DataPokemon;
