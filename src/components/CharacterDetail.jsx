import React from "react";
import "../assets/styles/components/CharacterDetail.scss";
const CharacterDetail = (props) => {

  const {data} =props;
  const {image, origin, name, status, species, gender, location, episode }= data;


  return (
    <div className="characterDetail">
        <img className="characterDetail-img" src={image} alt="Character"/>
        <div className="characterDetail__container">
          <h2 className="characterDetail-name">{name}</h2>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Status: </span>
            {" "}
            {status}
          </p>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Specie: </span>
            {" "}
            {species}
          </p>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Gender: </span>
            {" "}
            {gender}
          </p>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Origin: </span>
            {" "}
            {origin.name}
          </p>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Location: </span>
            {" "}
            {location.name}
          </p>
          <p className="characterDetail__item">
            <span className="characterDetail__item-type">Episode: </span>
            {" "}
            {episode}
          </p>
        </div>

    </div>
  );
};

export default CharacterDetail;
