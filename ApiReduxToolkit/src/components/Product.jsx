import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./ProductSlice";
import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    // async function banani hogi useEffect ke andar
    const fetchData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(">>>>>>>>>axiosData>>>>>>>>>", res.data);

        dispatch(setProducts(res.data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((p) => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.price} $</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
