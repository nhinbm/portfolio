import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Future Furniture Ecommerce",
    imgSrc: "project-imgs/future-furniture.png",
    code: "https://github.com/hoadang0305/Furniture-store-User-Site?tab=readme-ov-file",
    projectLink: "https://www.youtube.com/watch?v=sMVUEMvhJkc",
    tech: ["ReactJS", "styled-components", "MUI", "Redux"],
    description:
      "Led the frontend development of an e-commerce website for furniture products, focusing on UI/UX and client-side performance.",
    modalContent: (
      <>
        <p>
          Led the frontend development of an e-commerce website for furniture
          products, focusing on UI/UX and client-side performance.
        </p>
        <p>
          Developed the frontend using ReactJS, styled-components, Material UI,
          and Redux; also contributed to backend setup with ExpressJS and
          MongoDB.
        </p>
        <p>Collaborated with a team of 5 members.</p>
        <p>
          Applied modern technologies and followed a structured development
          workflow, gaining hands-on experience in fullstack project execution.
        </p>
      </>
    ),
  },
  {
    title: "CV Seeker",
    imgSrc: "project-imgs/cv-seeker.png",
    code: "https://github.com/tunghng/CVSeeker?tab=readme-ov-file",
    projectLink:
      "https://drive.google.com/file/d/15TPptfknm8cgT41iiPr0pFmYVqaIHeXr/view",
    tech: ["Google Colab", "LlamaIndex", "Python"],
    description:
      "Took on the role of Data/AI specialist, focusing on building a smart candidate search system.",
    modalContent: (
      <>
        <p>
          Took on the role of Data/AI specialist, focusing on building a smart
          candidate search system.
        </p>
        <p>
          Trained embedding models using Google Colab and integrated LlamaIndex
          to enhance semantic search capabilities.
        </p>
        <p>Collaborated with a 4-member team.</p>
        <p>
          Developed a web platform that enables recruiters to efficiently search
          for suitable candidates based on skills, experience, and profile
          relevance.
        </p>
      </>
    ),
  },
  {
    title: "Skill Swap (Lite)",
    imgSrc: "project-imgs/skill-swap-lite.png",
    code: "https://github.com/nhinbm/skill-swap-lite",
    projectLink: "https://skillswaplite.netlify.app/landing",
    tech: ["ReactTS", "Tanstack Query", "Firebase", "TailwindCSS"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Developed a responsive single-page application where users can list
          skills to teach and to learn, then browse other users for potential
          matches.
        </p>
        <p>
          Built user list and profile cards using React, ShadCN UI, and
          TailwindCSS, with data management via TanStack Query. Integrated
          Firebase for app configuration and basic hosting.
        </p>
        <p>Collaborated with a 6-member team.</p>
        <p>
          Focused on clean UI/UX, scalability, and modular component design.
        </p>
      </>
    ),
  },
];
