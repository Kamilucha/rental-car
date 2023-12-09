import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "pages/Home/Home";
import Favorites from "pages/Favorites/Favorites";
import Catalog from "pages/Catalog/Catalog";


export const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
