import React, { useState } from "react";
import github from "../../public/images/skillimages/th (2).jpg";
import gitlab from "../../public/images/skillimages/gitlab-logo.png";
import jira from "../../public/images/skillimages/th (4).jpg";
import vscode from "../../public/images/skillimages/th (3).jpg";
import Image from "next/image";

const Tools = () => {
  const tech = [
    { id: 1, src: github, title: "GitHub", style: "shadow-orange-300" },
    { id: 2, src: gitlab, title: "GitLab", style: "shadow-blue-300" },
    {
      id: 3,
      src: vscode,
      title: "VisualStudioCode",
      style: "shadow-orange-300",
    },
    { id: 4, src: jira, title: "Jira", style: "shadow-blue-300" },
    // { id: 5, src: tailwindcss, title: "Tailwind", style: "shadow-sky-300" },
    // { id: 6, src: nextjs, title: "Next.js", style: "shadow-red-500" },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (title) => {
    setHoveredSkill(title);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div name="experience" className=" py-8">
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <h1 className="text-4xl text-black font-bold border-b-4 flex justify-center border-gray-500 mb-6  dark:text-light ">
          Tools
        </h1>
        <p className="text-center text-lg mb-12">
          These are the Few Tools I have worked with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {tech.map(({ id, src, title, style }) => {
            const isHovered = hoveredSkill === title;

            return (
              <div
                key={id}
                className={`rounded-lg overflow-hidden shadow-lg ${style} transition-transform duration-300 transform hover:scale-105`}
                onMouseEnter={() => handleSkillHover(title)}
                onMouseLeave={handleSkillLeave}
              >
                <div className="relative w-full h-40">
                  <Image
                    src={src}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                  />
                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity duration-300 opacity-100">
                      <p className="text-white text-xl">{title}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
