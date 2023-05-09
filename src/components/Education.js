import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from './Licon'
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/50 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="mb-32 text-center font-bold text-8xl w-full md:text-6xl xs:text-4xl md:bt-15">
          Education
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full origin-top bg-dark dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
            style={{ scale: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="B.Tech in Computer Science"
              time="2017-2021"
              place="Government Engineering Collage, Bilaspur (CG)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
            <Details
              type="B.Tech in Computer Science"
              time="2017-2021"
              place="Government Engineering Collage, Bilaspur (CG)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
            <Details
              type="B.Tech in Computer Science"
              time="2017-2021"
              place="Government Engineering Collage, Bilaspur (CG)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
