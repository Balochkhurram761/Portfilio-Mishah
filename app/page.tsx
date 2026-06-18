import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/HeroReview"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
import AboutSection from "../components/about"
export default function Home() {
  return (
   <>
   <Hero/>
   <Services/>
   <AboutSection/>
   <Testimonials/>
   <CTASection/>
   <Footer/>
   </>
  );
}
