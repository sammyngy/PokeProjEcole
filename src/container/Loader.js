
import React from "react";
import "../assets/css/Loader.css";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  render() {
    return <div className="loader"></div>;
  }
}

export default Loader;
