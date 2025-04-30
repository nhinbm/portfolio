import { Link } from "react-router";
import SectionHeader from "~/components/util/section-header";

const AboutSection: React.FC = () => {
  return (
    <section>
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight">
            From concept to deployment — I build end-to-end digital experiences.
          </h1>
        </div>

        <div className="lg:pl-12">
          <p className="text-lg md:text-xl max-w-md">
            I help brands create impactful web solutions, blending striking
            visuals with solid, scalable tech. No buzzwords — just clean code,
            thoughtful design, and forward-thinking development.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
