import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavouritesPage from "../pages/FavouritesPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
