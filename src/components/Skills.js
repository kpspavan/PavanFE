import React, { useState } from "react";
import html from "../../public/images/skillimages/icons8-html-5-144.png";
import css from "../../public/images/skillimages/css-3.png";
import javascript from "../../public/images/skillimages/js.png";
import reactjs from "../../public/images/skillimages/physics.png";
import nextjs from "../../public/images/skillimages/next-js_1.svg";
import tailwindcss from "../../public/images/skillimages/th.jpg";
import chakra from "../../public/images/skillimages/icons8-chakra-ui-144.png";
import materailui from "../../public/images/skillimages/icons8-material-ui-144.png";
import Docker from "../../public/images/skillimages/icons8-docker-144.png";
import RactHookForm from "../../public/images/skillimages/react-hook-form.jpeg";




import Image from "next/image";

const Skills = () => {
  const tech = [
    { id: 1, src: html, title: "HTML5", style: "shadow-orange-300" },
    { id: 2, src: css, title: "CSS3", style: "shadow-blue-300" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-orange-300" },
    { id: 4, src: reactjs, title: "React", style: "shadow-blue-300" },
    { id: 5, src: tailwindcss, title: "Tailwind", style: "shadow-sky-300" },
    { id: 6, src: nextjs, title: "Next.js", style: "shadow-red-500" },
    { id: 7, src: chakra, title: "ChakraUI", style: "shadow-blue-500" },
    { id: 8, src: materailui, title: "MaterailUI", style: "shadow-blue-500" },
    { id: 9, src: Docker, title: "Docker", style: "shadow-blue-500" },
    { id: 10, src: RactHookForm, title: "ReactHookForm", style: "shadow-blue-500" },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (title) => {
    setHoveredSkill(title);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div name="experience" className=" py-8"  >
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <h1 className="text-4xl text-black font-bold border-b-4 flex justify-center border-gray-500 mb-6 dark:text-light ">Skills</h1>
        <p className="text-center text-2xl text-black font-bold flex justify-center border-gray-500  dark:text-light  mb-12">These are the technologies I have worked with</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8" id="skills"  >
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
                  <Image src={src} alt={title} layout="fill" objectFit="contain" />
                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity duration-300 opacity-100">
                      <p className="text-white sm:text-xs	 md:text-sm text-xl">{title}</p>
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

export default Skills;
