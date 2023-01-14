import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Home from "./pages/home";
import Produit from "./pages/produit";
import Hero from "./pages/hero";
import Login from "./pages/login";
import './App.css';
import Wishlist from "./pages/wishlist";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/produit" element={<Produit/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/userdetail" element={<UserDetail/>}/>
              </Route>
      <Route path="/login"element={<Login/>}/>
    </Routes>
  );
}

export default App;
