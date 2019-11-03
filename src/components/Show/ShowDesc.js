import React from "react";

const ShowAbilities = props => {
  const { desc, version, language } = props;
  var name_language = " ";

  if (language === "fr" && version === "alpha-sapphire") {
    name_language = desc;
  }

  return <span >{name_language}</span>;
};

export default ShowAbilities;
