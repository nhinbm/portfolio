import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "NodeJS",
  "Express",
  "Postgres",
  "MongoDB",
  "GitHub",
  "Jira",
];

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-primary text-2xl" />
            <span className="font-bold ml-2">I Can Use</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
