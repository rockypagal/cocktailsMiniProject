import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Cards = () => {
  const { cocktails } = useSelector((store) => store.cocktail);

  let drinks = cocktails.drinks;


  return (
    <>
      {drinks?.map((drink, index) => {
        return (
          <div key={index} className="drinkCard">
            <div className="cardHeading">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
            <div className="cardDetails">
              <p><span>name:</span>{drink.strDrink}</p>
              <p><span>Type:</span>{drink.strAlcoholic}</p>
              <button>
                <Link to={`/singlecocktail/${drink.idDrink}`}>More Info</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
