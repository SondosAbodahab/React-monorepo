import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const Base_URL = "http://localhost:3000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${Base_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data.");
      } finally{
        setIsLoading(false)
      }
    }
    fetchCities()
  
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="countries" element={<p>Countries</p>}></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
