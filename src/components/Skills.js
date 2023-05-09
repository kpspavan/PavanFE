import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-dark text-light py-3 px-6 rounded-full shadow-dark font-semibold cursor-pointer 
      absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark
      xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.09 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center w-full md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full relative h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:g-circularLightLg lg:dark:bg-circularDarkLg
      md:g-circularLightMd md:dark:bg-circularDarkMd
      sm:g-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center bg-dark text-light p-8 rounded-full shadow-dark font-semibold cursor-pointer 
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-xs"
          whileHover={{ scale: 1.09 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-4vw" y="-9vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="9vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="Tailwind" x="20vw" y="18vw" />
        <Skill name="Web Design" x="33vw" y="-5vw" />
        <Skill name="Java" x="15vw" y="-12vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
