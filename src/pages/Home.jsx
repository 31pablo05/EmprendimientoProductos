import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = ({ onAddToCart, onCTAClick }) => (
  <>
    <Hero onCTAClick={onCTAClick} />
    <Categories />
    <Products onAddToCart={onAddToCart} />
    <About />
    <Contact />
  </>
);

export default Home;
