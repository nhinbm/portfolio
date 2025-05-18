import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-foreground">
              <span className="bg-primary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              i! I&apos;m Nhi. As a senior Computer Science student at
              University of Science, I am looking for a Software Developer
              position where I can apply my knowledge in programming,
              problem-solving, and software engineering. I aim to contribute to
              real-world projects, collaborate with experienced teams, and
              continue growing in a dynamic tech environment.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-primary">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
