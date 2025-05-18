import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-foreground md:text-8xl">
              Hi, I'm Nhi<span className="text-primary">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-muted md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-primary">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-4 pointer-events-auto">
              <Image
                src="/project-imgs/logo.png"
                alt="Nhi Nguyen"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col text-muted text-sm md:text-base">
                <span className="font-medium text-foreground">nhinbm</span>
                <span className="text-xs md:text-sm">
                  📍 Ho Chi Minh City, Vietnam
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-primary-700 hover:text-white hover:border-primary-700 mt-4 bg-primary-500 text-zinc-100 border-primary-500 md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
