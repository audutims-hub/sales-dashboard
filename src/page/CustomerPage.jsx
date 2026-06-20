import React from "react";
import { useProducts } from "../context/ProductContext";

const CustomerPage = () => {
  const { products, error, loading } = useProducts();
  return (
    <div className="text-2xl text-slate-600">
      {products.map((product) => (
        <div key={product.id}>
          <div className="grid grid-cols-4 justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-full"
            />
            <span>{product.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerPage;
