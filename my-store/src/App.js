import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";
import { Route, Switch } from "react-router-dom";
import Product from "./component/Product";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/produkts/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
