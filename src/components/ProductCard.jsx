import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-slate-300 min-h-72 flex flex-col justify-between p-5 cursor-pointer hover:scale-[1.03]">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <div>
        <h3 className="mt-3 text-sm font-medium text-slate-600 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-slate-900">${product.price}</p>
        <p className="truncate">{product.description}</p>
      </div>
    </div>
  );
};
export default ProductCard;
