import Hero from "~/components/hero/hero";
import AboutSection from "./about-section";

const Home: React.FC = () => {
  return (
    <section className="px-8 md:px-12">
      <Hero />
      <AboutSection />
      <div className="h-screen" />
    </section>
  );
};
export default Home;
