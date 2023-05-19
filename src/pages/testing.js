import React, { useState } from "react";
import html from "../../public/images/skillimages/html-5 (1).png";
import css from "../../public/images/skillimages/css-3.png";
import javascript from "../../public/images/skillimages/js.png";
import reactjs from "../../public/images/skillimages/physics.png";
import nextjs from "../../public/images/skillimages/th.jpg";
import tailwindcss from "../../public/images/skillimages/wind.png";
import Image from "next/image";

const Testing = () => {
  const tech = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-300" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-300" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-orange-300" },
    { id: 4, src: reactjs, title: "React", style: "shadow-blue-300" },
    { id: 5, src: tailwindcss, title: "Tailwind", style: "shadow-sky-300" },
    { id: 6, src: nextjs, title: "Next.js", style: "shadow-red-500" },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (title) => {
    setHoveredSkill(title);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black min-h-screen py-8">
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <h1 className="text-4xl font-bold border-b-4 border-gray-500 mb-6">Skills</h1>
        <p className="text-center text-lg mb-12">These are the technologies I have worked with</p>
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
                  <Image src={src} alt={title} layout="fill" objectFit="contain" />
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

export default Testing;
