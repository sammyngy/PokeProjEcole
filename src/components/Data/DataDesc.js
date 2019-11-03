import React from "react";

import ShowDesc from "../Show/ShowDesc";

const DataDesc = ({ dataDescription }) => {
  return (
    <>
      {dataDescription.map((info, index) => (
        <ShowDesc
          key={index}
          version={info.version.name}
          language={info.language.name}
          desc={info.flavor_text}
        />
      ))}
    </>
  );
};

export default DataDesc;
