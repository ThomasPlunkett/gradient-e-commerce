import "./App.css";
import Home from "./components/CartIcon/Home";
import Shop from "./components/Pages/shop/index";

// import FeaturedCollection from "./components/Featured-Collection/Featured-Collection";
// imported this in
import SingleProduct from "./components/Single-Product/Single-Product";
import CartPage from './components/Pages/CartPage/cart-page';
import { Switch,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} />
      </Switch>
      {/* added this route but commented it out since we still need to fix the product page */}
      <Route path='/product/:id' component={SingleProduct} />
    </div>
  );
}

export default App;
