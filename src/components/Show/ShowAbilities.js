import React from "react";

const ShowAbilities = props => {
  const { name_ability } = props;

  return (
    <span>
      {name_ability
        .toLowerCase()
        .split(" ")
        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join(" ")}{" "}
    </span>
  );
};

export default ShowAbilities;
