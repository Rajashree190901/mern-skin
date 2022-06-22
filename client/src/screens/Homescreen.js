import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Product from "../components/Product";
import Error from "../components/Error";

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
          <Loading />
        ) : error ? (
          <Error error="something went wrong" />
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-4 p-11" key={product._id}>
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
