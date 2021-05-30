import "./App.scss";
import Home from "./components/CartIcon/Home";
import Checkout from "./components/Checkout/checkout";
import Shop from "./components/Pages/shop/index";
import Canceled from "./components/Checkout/Stripe-Checkout/canceled";
// import FeaturedCollection from "./components/Featured-Collection/Featured-Collection";
// imported this in
import SingleProduct from "./components/Single-Product/Single-Product";
import CartPage from "./components/Pages/CartPage/cart-page";
import { Switch, Route } from "react-router-dom";
import Success from "./components/Checkout/Stripe-Checkout/success";
import Signup from "./components/signup/signup";
import SignIn from "./components/sign-in/sign-in";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/sign-in" component={SignIn} />

        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/success" component={Success} />
        <Route path="/canceled" component={Canceled} />

        <Route path="/checkout" component={Checkout} />
      </Switch>
      {/* added this route but commented it out since we still need to fix the product page */}
    </div>
  );
}

export default App;
