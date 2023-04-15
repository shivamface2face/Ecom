import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";

import Hero from "./components/hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/slider/Slider";
import Virtual from "./components/Virtual/module";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Footer />
    
    </div>
  );
}

export default App;
