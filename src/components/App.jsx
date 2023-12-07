import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "pages/Home/Home";
import Favorites from "pages/Favorites/Favorites";


export const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/favorites" element={<Favorites/>}/>
      </Route>
    </Routes>
  );
};
