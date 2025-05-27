import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Feature } from "../components/Feature";
import { CTA } from "../components/CTA";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Feature/>
      <CTA/>
      <About/>
      <Footer/>
    </div>
  );
};
