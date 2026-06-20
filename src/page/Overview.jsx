import React from "react";
import { stats } from "../data/data";

import { useProducts } from "../context/ProductContext";
import RecentOrders from "../components/RecentOrders";
import RevenueChart from "../components/RevenueChart";
import StatCard from "../components/StatCard";

const Overview = () => {
  return (
    <>
      {/* <div>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div> */}
      <RevenueChart />
      <RecentOrders />
    </>
  );
};

export default Overview;
