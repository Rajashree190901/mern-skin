import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Paymentscreen from "./screens/Paymentscreen";
import sucess from "./screens/sucess";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/payment" exact component={Paymentscreen} />
        <Route path="/success" exact component={sucess} />
      </BrowserRouter>
    </div>
  );
}

export default App;
