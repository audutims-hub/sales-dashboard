import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import RevenueChart from "./components/RevenueChart";
import RecentOrders from "./components/RecentOrders";
import { Routes, Route } from "react-router-dom";
import { Layout } from "lucide-react";
import Overview from "./components/Overview";
import Products from "./components/Products";
import CustomerPage from "./components/CustomerPage";
import SettingsPage from "./components/SettingsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/orders" element={<Products />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
