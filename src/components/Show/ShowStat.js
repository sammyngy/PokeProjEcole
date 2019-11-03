import React from "react";
import { ListGroup, ProgressBar } from "react-bootstrap";

const ShowStat = props => {
  const { name_stat, base_stat } = props;
  return (
    <ListGroup.Item>
      {name_stat
        .replace("-", " ")
        .toLowerCase()
        .split(" ")
        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join(" ")}
      :
      <ProgressBar variant="success" now={base_stat} label={`${base_stat}%`} />
    </ListGroup.Item>
  );
};

export default ShowStat;
