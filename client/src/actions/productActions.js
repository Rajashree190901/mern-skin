// in this js only we are going to write all actions like delete products ,add products and get products.
import axios from "axios";
export const getAllProducts = () => async (dispatch) => {
  //getAllPizzas is the action name and dispatch function is the thunk function

  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const response = await axios.get("/api/products/getallproducts");
    console.log(response);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
  }
};
