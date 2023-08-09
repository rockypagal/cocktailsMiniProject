import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, SharedLayout, Error, SingleCocktail } from "./pages";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector((state) => state.cocktail);
  document.body.style.background = `${darkMode ? "#27374D" : "#e9e0f8"}`;
  return (
    <>
      <div className="app" style={{ color: `${darkMode ? "white" : "black"}` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout></SharedLayout>}>
              <Route index element={<Home></Home>} />
              <Route path="about" element={<About />} />
              <Route path="singlecocktail/:id" element={<SingleCocktail />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
