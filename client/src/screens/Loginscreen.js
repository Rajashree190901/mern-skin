import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-3 shadow p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {error && <Error error="invalid login credentials" />}
          <h1 className="text-center m-3" style={{ fontsize: "100px" }}>
            LOGIN
          </h1>

          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a href="/register">click here to register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
