import React from "react";

import ShowStat from "../Show/ShowStat";
import { ListGroup } from "react-bootstrap";
const DataStat = ({ dataStats }) => {
  return (
    <ListGroup>
      {dataStats.map((info, index) => (
        <ShowStat
          key={index}
          base_stat={info.base_stat}
          name_stat={info.stat.name}
        />
      ))}
    </ListGroup>
  );
};

export default DataStat;
