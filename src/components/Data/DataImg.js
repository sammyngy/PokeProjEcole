import React from "react";

import ShowImg from "../Show/ShowImg";

const DataImg = ({ dataSprites }) => {
  return <>{<ShowImg imgUrl={dataSprites.front_default} />}</>;
};

export default DataImg;
