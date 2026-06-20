import { createContext, useContext, useEffect, useState } from "react";

// First initialize the createContext method
const ProductContext = createContext();

// Secondly, create the context function (business logic)
export function ProductProvider({ children }) {
  // create states, 1 to store the products data when they come, one to store the loading state and the last to store the error state (note that all this will come from the BE data)
  const [products, setProducts] = useState([]); // [empty array]
  const [loading, setLoading] = useState(true); // loader has to showing
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data); // products = data

        console.log(data);
      } catch (err) {
        setError(err, "Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

// custom hook
export function useProducts() {
  return useContext(ProductContext);
}
