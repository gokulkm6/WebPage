import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/navbar/Hero';
import Two from './components/home/Two';
import HeroContent from './components/home/HeroContent';
import ReverseHeroContent from './components/home/ReverseHeroContent';
import Next from './components/home/Next';
import Notice from './components/home/Notice';
import New from './components/home/New';
import FreeTrialSection from './components/home/FreeTrialSection';
import BestInClassSection from './components/home/Best';
import SuitOrGeekSection from './components/home/Suiti';
import ContactSection from './components/home/ContactSection';
import FooterMenu from './components/footer/Footer';






function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Two/>
   <HeroContent/>
   <ReverseHeroContent/>
   <Next/>
   <Notice/>
   <New/>
   <FreeTrialSection/>
   <BestInClassSection/>
   <SuitOrGeekSection/>
   <ContactSection/>
   <FooterMenu/>
   </>
  );
}

export default App;
