import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/HeroReview"
import CTASection from "../components/CTASection"
import AboutSection from "../components/about"
import FeatureWork from "../components/FeatureWork"
export default function Home() {
  return (
   <>
   <Hero/>
   <Services/>
   <AboutSection/>
   <FeatureWork/>
   <Testimonials/>
   <CTASection/>
   </>
  );
}
