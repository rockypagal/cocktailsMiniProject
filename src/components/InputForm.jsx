import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { getCocktails } from "../features/cocktailsSlice";

const InputForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      dispatch(getCocktails(values.name));
    },
  });
  return  <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    onChange={handleChange}
    value={values.name}
  />
  <button type="submit">search</button>
</form>;
};

export default InputForm;
