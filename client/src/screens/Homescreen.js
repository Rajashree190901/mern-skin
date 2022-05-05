import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Product from "../components/Product";

export default function Homescreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const productsstate = useSelector((state) => state.getAllProductsReducer);

  const { products, error, loading } = productsstate;

  console.log(products);
  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <h1>something went wrong</h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-4 p-11">
                <div>
                  <Product product={product} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
