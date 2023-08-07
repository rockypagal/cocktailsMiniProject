import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, SharedLayout, Error, SingleCocktail } from "./pages";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>} >
        <Route index element={<Home></Home>} />   
        <Route path="about" element={<About/>} />   
        <Route path="singlecocktail/:id" element={<SingleCocktail/>} />   
        <Route path="*" element={<Error/>} />   
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
