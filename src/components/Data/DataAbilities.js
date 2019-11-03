import React from "react";

import ShowAbilities from "../Show/ShowAbilities";

const DataAbilities = ({ dataAbilities }) => {
  return (
    <>
      {dataAbilities.map((info, index) => (
        <ShowAbilities key={index} name_ability={info.ability.name} />
      ))}
    </>
  );
};

export default DataAbilities;
