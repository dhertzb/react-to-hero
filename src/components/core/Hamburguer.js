import React from "react";
import "../../styles/hambuguer.css";

class Hamburguer extends React.Component {
  render() {
    return (
      <div className="hamburger">
        <div className="hamburger__stick"></div>
        <div className="hamburger__stick"></div>
        <div className="hamburger__stick"></div>
      </div>
    );
  }
}

export default Hamburguer;
