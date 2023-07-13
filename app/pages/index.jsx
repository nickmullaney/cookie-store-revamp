import Carousel from '../components/Carousel';
import ContactInfo from '../components/ContactInfo';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <ContactInfo />
    </div>
  );
}
