import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorites } from "../actions";
import "../assets/styles/components/Character.scss";
import CharacterDetail from "../components/CharacterDetail";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import Modal from "./Modal";

const Character = (props) => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleSetFavorite = () => {
    props.setFavorite({data});
    setFavorite(true);
  };

  const isFavorite = () => {
    const result= favoriteCharacters.filter(
      (favoriteCharacter) =>favoriteCharacter.data.id ===id,
    );
    if(result.length){
      setFavorite(true);
    }
  };

  const handleDeleteFavorite = itemId => {
    props.deteleFavorite(itemId);
    setFavorite(false);
  };

  useEffect(() => {
    isFavorite();
  }, []);

  return (
    <div className="character">
      <img className="character__img" src={image} alt="character" />
      <div className="character__details">
        <h2 className="character__details-name">
          {name}
        </h2>
        {favorite
          ? <SVGStar
              onClick={() => handleDeleteFavorite(id)}
              className="character__details-star favorite"
            />
          : <SVGStar
              onClick={handleSetFavorite}
              className="character__details-star noFavorite"
            />}
        <p className="character__details__item">
          <span className="character__details__item-type"> Status: </span>{" "}
          {status}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type"> Gender: </span>
          {" "}
          {gender}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type"> Species: </span>
          {" "}
          {species}
        </p>
        <p onClick={handleOpenModal} className="character__details__item-more">
            More details...
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
          <CharacterDetail data={data} />
      </Modal>
    </div>
  );
};

//DOCUMENTACION prop-type
Character.propTypes = {
  data: propTypes.object,
  modal: propTypes.bool,
  favorite: propTypes.bool
};

//Definiciones de Native redux
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
