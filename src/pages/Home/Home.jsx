import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards";
import "./Home.css";
import InputForm from "../../components/InputForm";
import Loading from "../../components/Loading/Loading";
import { getCocktails } from "../../features/cocktailsSlice";
const Home = () => {
  const { cocktails,error } = useSelector((store) => store.cocktail);

  let drinks = cocktails.drinks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCocktails("a"));
  }, []);
  const { loading } = useSelector((store) => store.cocktail);
  return (
    <div className="homeSection container">
      <h1>Find Your Next Drink</h1>
      <div className="searchForm">
        <InputForm />
      </div>

       
        <div className="cardSection">
          {loading ? <Loading /> : <Cards></Cards>}
        </div>
      {
        error && <h1 className="error"> Oops It's Like We Are Out Of Stock</h1>
      }
    </div>
  );
};

export default Home;
