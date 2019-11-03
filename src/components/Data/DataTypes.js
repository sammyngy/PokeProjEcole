import React from "react";

import ShowTypes from "../Show/ShowTypes";
const DataType = ({ dataTypes }) => {
  return (
    <>
      {dataTypes.map((info, index) => (
        <ShowTypes key={index} name={info.type.name} />
      ))}
    </>
  );
};

export default DataType;
