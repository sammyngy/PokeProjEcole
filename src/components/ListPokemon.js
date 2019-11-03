import React from "react";

import DataPokemon from "./Data/DataPokemon";

const ListPokemon = ({ data }) => {
  return (
    <>
      {data.map((info, index) => (
        <DataPokemon
          key={index}
          id={info.entry_number}
          {...info}
          name={info.pokemon_species.name
            .toLowerCase()
            .split(" ")
            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
            .join(" ")}
        />
      ))}
    </>
  );
};

export default ListPokemon;
