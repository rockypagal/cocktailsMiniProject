import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards";
import "./Home.css";
import InputForm from "../../components/InputForm";
import Loading from "../../components/Loading/Loading";
import { getCocktails } from "../../features/cocktailsSlice";
const Home = () => {
  const { cocktails,error,cocktailName } = useSelector((store) => store.cocktail);

  let drinks = cocktails.drinks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCocktails(cocktailName));
  }, []);
  const { loading,darkMode } = useSelector((store) => store.cocktail);
  return (
    <div className="homeSection container">
      <h1  style={{color:`${darkMode?'white':'darkslateblue'}`}}>Find Your Next Drink</h1>
      <div className="searchForm">
        <InputForm />
      </div>

       
        <div className="cardSection">
          {loading ? <Loading /> : <Cards></Cards>}
        </div>
      {
        error && <h1 className="error"  style={{color:`${darkMode?'white':'darkslateblue'}`}}> Oops It's Like You Are Out Of Luck</h1>
      }
    </div>
  );
};

export default Home;
