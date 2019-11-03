import React from "react";


const ShowImg = props => {
  const { imgUrl } = props;

  return <img style={{ width: "35%" }} src={imgUrl} alt='img pokemon'></img>;
};

export default ShowImg;
