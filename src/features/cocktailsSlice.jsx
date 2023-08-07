import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { getCocktailsThunk,fetchCocktailThunk} from "./ThunksApi";

export const getCocktails = createAsyncThunk(
  "get/getCocktails",
  getCocktailsThunk
);

export const fetchSingleCocktail = createAsyncThunk(
  "fetch/singleCocktail",
fetchCocktailThunk
  );

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktails: [],
    singleCocktail: [{}],
    loading: false,
    error: false,
  },
  reducers: {
    getCocktails(state, action) {
      state.loading = true;
      state.error = null;
    },
    getCocktailsSuccess(state, action) {
      state.loading = false;
      state.cocktails = action.payload;
    },
    getCocktailsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builds) => {
    builds.addCase(getCocktails.pending, (state) => {
      state.loading = true;
    });
    builds.addCase(getCocktails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.cocktails = payload;
      state.error = false;
      payload.drinks == null && toast.error("no data found");
      payload.drinks == null ? (state.error = true) : null;
    });
    builds.addCase(getCocktails.rejected, (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    });
    builds.addCase(fetchSingleCocktail.pending, (state) => {
      state.loading = true;
    });
    builds.addCase(fetchSingleCocktail.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.singleCocktail = payload.drinks;
    });
    builds.addCase(fetchSingleCocktail.rejected, (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    });
  },
});

export default cocktailSlice.reducer;
