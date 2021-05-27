import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero/index";
import FeaturedCollection from "./components/Featured-Collection/Featured-Collection";
// imported this in
import SingleProduct from "./components/Single-Product/Single-Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedCollection />
      {/* added this route but commented it out since we still need to fix the product page */}
      {/* <Route path='/product/:id' component={SingleProduct} /> */}
      <Footer />
    </div>
  );
}

export default App;
