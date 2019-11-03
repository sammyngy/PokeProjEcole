import React from "react";

const ShowStat = props => {
  const { name } = props;
  const TYPE_COLORS = {
    bug: "B1C12E",
    dark: "4F3A2D",
    dragon: "755EDF",
    electric: "FCBC17",
    fairy: "F4B1F4",
    fighting: "823551D",
    fire: "E73B0C",
    flying: "A3B3F7",
    ghost: "6060B2",
    grass: "74C236",
    ground: "D3B357",
    ice: "A3E7FD",
    normal: "C8C4BC",
    poison: "934594",
    psychic: "ED4882",
    rock: "B9A156",
    steel: "B5B5C3",
    water: "3295F6"
  };

  return (
    <h5 style={{ display: "inline-block", paddingRight: "1%", float: "right" }}>
      <span
        style={{ backgroundColor: `#${TYPE_COLORS[name]}` }}
        className="badge badge-pill badge-primary"
      >
        {name
          .toLowerCase()
          .split(" ")
          .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" ")}
      </span>
    </h5>
  );
};

export default ShowStat;
