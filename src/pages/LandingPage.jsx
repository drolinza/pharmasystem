import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Feature } from "../components/landing/Feature";
import { CTA } from "../components/landing/CTA";
import { About } from "../components/landing/About";
import { Footer } from "../components/landing/Footer";

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
