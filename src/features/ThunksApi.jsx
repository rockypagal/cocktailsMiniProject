import axios from "axios";

export const fetchCocktailThunk = async (data, thunkApi) => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
    try {
      const resp = await axios(`${url + data}`);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }


  export const getCocktailsThunk =  async (data, thunkApi) => {
    let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

    try {
      const resp = await axios.get(`${url + data}`);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  } 