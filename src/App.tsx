import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { LandingHero} from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LandingHero/>
      <Services />
      <Programs/>
      <Products />
      <Cta />
      <Team />
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <Testimonials /> */}
      {/* <Pricing />
      <Newsletter /> */}
      {/* <FAQ />
      <Footer /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
