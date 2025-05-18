import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "University of Science",
    position: "Bachelor's Degree",
    time: "Sep 2021 - Jul 2025",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "I majored in Computer Science and graduated with a GPA of 9.01/10.0.",
    tech: [],
  },
  {
    title: "Bosch Global Software Technologies",
    position: "Wep Developer Intern",
    time: "May 2024 - Nov 2024",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "I worked as a Fullstack Developer on a Counterfeit Detection Website using the MERN stack. I maintained the codebase and implemented a domain crawling feature to collect Bosch-related websites, which helped the internal team identify counterfeit sources more efficiently. This contribution significantly reduced the manual domain searching time for the team and improved the overall reporting process. Throughout the project, I collaborated closely with a team of three members.",
    tech: ["React", "Express", "MongoDB", "MUI", "Redux", "Scrum"],
  },
];
