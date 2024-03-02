import { Events } from "./components/Events";
import { Products } from "./components/Products";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { LandingHero} from "./components/LandingHero";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <LandingHero/>
      <Services />
      <Products />
      <Programs/>
      <Events />
      <Team />
      <ScrollToTop />
      <Navbar />
    </>
  );
}

export default App;
