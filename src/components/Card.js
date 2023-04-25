import React from "react";


function Card({onCardClick, card}) {

    function handleCardClick() {
        onCardClick(card);
      } 

    return (
        <li className="element"> 
            <img src={card.link} alt={card.name} className="element__image" onClick={handleCardClick} />
            <button type="button" className="element__delete-button" ></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                  <button type="button" className="element__like-button"></button>
                  <p className="element__like-box">{card.likes.length}</p>
                </div> 
            </div>
        </li>
    )
}

export default Card;