import React from 'react';

const Card = (props) => {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <h3>{props.founded}</h3>
      <p>Seats:
        {
          props.seats.map((seat, index) => {
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
          props.titles.map((title, index) => {
            return (
              <span key={index}>
                {title}
              &nbsp;
              </span>
            );
          })
        }
      </p>
      <h3>Weapons</h3>
      {
        props.ancestralWeapons.map((weapon, index) => {
          return (
            <div key={index}>
              {weapon}
            </div>
          );
        })
      }
    </div>
  );
};

export default Card;
