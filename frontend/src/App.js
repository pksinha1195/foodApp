import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AddRestaurantPage from "./components/AddRestaurantPage";
import RestaurantList from "./components/RestaurantList";
import DetailsPage from "./components/DetailsPage";
import Layout from "./components/Layout";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/add-restaurant" element={<AddRestaurantPage />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="/restaurantdetails/:name" element={<DetailsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
