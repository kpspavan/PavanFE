import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from './Licon'
const Details = ({ type, time, place, info,college }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
      <h2 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg" >
        {college}
      </h2>
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
            college="bhashyam public school"
              type="10TH"
              time="2014-2015"
              place="Vijayawada"
              info=""
            />
            <Details
            college="sri chaitanya junior college"
              type="Intermediate"
              time="2015-2017"
              place="Vijayawada"
              info=""
            />
            <Details
            college="Vel Tech Rangarajan Dr. Sagunthala R and D Institute of Science and Technology"
              type="B.Tech in Computer Science"
              time="2017-2021"
              place="Chennai"
              info="Computer Systems Engineering,"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
