import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  name,
  founded,
  seats,
  titles,
  coatOfArms,
  ancestralWeapons,
  words }) => {

  const checkValue = (houseFounded) => {
    return houseFounded === '' ? 'N/A' : houseFounded;
  };

  return (
    <div className="Card">
      <h2>{name}</h2>
      <p>Founded: {checkValue(founded)}</p>
      <p>Seats:
        {
          seats.map((seat, index) => {
            return (
              <span key={index}>
                {seat}
              </span>
            );
          })
        }
      </p>
      <p>Titles:
        {
          titles.map((title, index) => {
            return (
              <span key={index}>
                {title}
              &nbsp;
              </span>
            );
          })
        }
      </p>
      <p>{coatOfArms}</p>
      <p>Weapons:
        {
          ancestralWeapons.map((weapon, index) => {
            return (
              <span key={index}>
                {weapon}
              </span>
            );
          })
        }
      </p>
      <p>{words}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.array,
  words: PropTypes.string
};

export default Card;
