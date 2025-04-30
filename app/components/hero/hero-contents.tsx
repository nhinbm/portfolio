import { FaGlobe } from "react-icons/fa";

const HeroContents: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Avatar and Greeting */}
      <div className="flex items-center mb-2">
        <div className="rounded-full mr-2 sm:mr-3">
          <img
            src="/logo.png"
            alt="Avatar"
            className="rounded-full w-10 h-10 sm:w-[100px] sm:h-[100px]"
          />
        </div>
        <h1 className="pointer-events-auto text-3xl sm:text-4xl lg:text-7xl font-black">
          Hi, I'm nhinbm<span className="text-primary">.</span>
        </h1>
      </div>
      <h2 className="pointer-events-auto my-2 text-2xl md:my-4 md:text-4xl">
        I'm a{" "}
        <span className="font-semibold text-primary">Full Stack Developer</span>
      </h2>
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <FaGlobe className="w-4 h-4 text-primary" />
        <span>
          Based in{" "}
          <span className="text-primary font-medium">HCM, Vietnam</span>
        </span>
      </div>
    </div>
  );
};
export default HeroContents;
