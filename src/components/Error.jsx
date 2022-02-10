import React from "react";
import "../assets/styles/components/Error.scss";

import errorImage from "../assets/static/images/error.png";
const Error = () => {
  return (
    <div className="error">
      <img className="error-img" src={errorImage} alt="Morty" />
      <span className="error-text">Disculpa, encontramos un error</span>
    </div>
  );
};

export default Error;
