import DotGrid from "./dot-grid";
import HeroContents from "./hero-contents";

const Hero: React.FC = () => {
  return (
    <section className="overflow-hidden h-screen">
      <div className="relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 items-center h-full items-center">
        <div className="pointer-events-none relative z-5 md:col-span-2">
          <HeroContents />
        </div>
        <DotGrid />
      </div>
    </section>
  );
};
export default Hero;
