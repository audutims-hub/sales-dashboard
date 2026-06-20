import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import RevenueChart from "./components/RevenueChart";
import RecentOrders from "./components/RecentOrders";
import { Routes, Route } from "react-router-dom";

import { useProducts } from "./context/ProductContext";
import ProductPage from "./page/ProductPage";
import Layout from "./components/Layout";
import Overview from "./page/Overview";
import CustomerPage from "./page/CustomerPage";
import SettingsPage from "./page/SettingsPage";

const App = () => {
  const { products } = useProducts();

  console.log(products);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/orders" element={<ProductPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
