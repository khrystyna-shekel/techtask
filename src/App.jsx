import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
