import React, { useState } from "react";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
//usestate is imported to know what the user have selected.
// we are going to receive the properties as product.
export default function Product({ product }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("100gm");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(product, quantity, varient));
  }

  return (
    <div className="m-3 shadow p-3 mb-5 bg-white rounded">
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} className="img-fluid" />
      </div>
      <div className="flex-container">
        <div className="w-100">
          <p>Varients :</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {product.varients.map((varients) => {
              return <option value={varients}>{varients}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity :</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p className="mt-1">
            Prices :{product.prices[0][varient] * quantity}Rs/-
          </p>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
//use state,set state,state changes?,react life cycle methods.
