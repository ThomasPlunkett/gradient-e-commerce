import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero/index";
import FeaturedCollection from "./components/Featured-Collection/Featured-Collection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedCollection />
      <Footer />
    </div>
  );
}

export default App;
