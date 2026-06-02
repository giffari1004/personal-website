import Navbar from "../src/features/component/Navbar";
import Hero from "../src/features/component/Hero";
import Expertise from "../src/features/component/Expertise";
import TechStack from "../src/features/component/TechStack";
import FeaturedWork from "../src/features/component/FeaturedWork";
import CareerTimeline from "../src/features/component/CareerTimeline";
import Testimonials from "../src/features/component/Testimonials";
import Contact from "../src/features/component/Contact";
import Footer from "../src/features/component/Footer";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <TechStack />
        <FeaturedWork />
        <CareerTimeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
