import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../../features/cocktailsSlice";
import "./SingleCocktail.css";
import Loading from "../../../components/Loading/Loading";
const SingleCocktail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleCocktail, loading,darkMode } = useSelector((store) => store.cocktail);
  const { strDrinkThumb,strCategory , strDrink, strGlass, strAlcoholic } = singleCocktail[0];

  console.log(singleCocktail);
  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, []);
  return (
    <section className="container cocktailSection">
      <button className="pre">
        <Link to="/"  style={{color:`${darkMode?'white':'darkslateblue'}`}}>Back</Link>
      </button>
      {loading ? (
        <Loading />
      ) : (
        <div className="singleCocktailPage ">
          <div className="img">
            <img src={strDrinkThumb} alt="" />
          </div>
          <div className="info">
            <p>
              <span>Name: </span>
              {strDrink}
            </p>
            <p>
              <span>Category: </span>
              {strCategory}
            </p>
            <p>
              <span>Glass Type: </span>
              {strGlass}
            </p>
            <p>
              <span>Drink Type: </span>
              {strAlcoholic}
            </p>

          </div>
        </div>
      )}
    </section>
  );
};

export default SingleCocktail;
