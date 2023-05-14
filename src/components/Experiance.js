import React, { useRef,useState,useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./Licon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
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
      
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg flex items-center ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
         {loaded && <span 
          style={{
            display: 'inline-block',
            animation: 'auto-text 4s ease-in-out infinite',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
           >
           @{company}
          </span>}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/50 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
       { <h2 className="mb-32 text-center font-bold text-8xl w-full md:text-6xl xs:text-4xl md:bt-15">
          Experience
        </h2> }
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
              company="NxtWave"
              position="Trainee"
              time="2021"
              address="Guntur"
              companyLink="https://www.ccbp.in/"
              work="As a trainee learning the front end technologies "
            />
            <Details
              company="WIZ FREIGHT"
              position="Front-End Developer"
              time="2022-2023"
              address="Chennai alwarpet menon eternity"
              companyLink="https://wizfreight.com/"
              work="Worked on a team responsible for developing new features for product 
              Built highly functional web applications using
              JavaScript, HTML, CSS,React.js and Next.js.And
              working with multipel frameworks.Communicated with product managers and
              UX designers to translate project requirements
              and business objectives into polished user
              interfaces."
            />
          </ul>
        </div>
        <style>
        {`
        @keyframes auto-text {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
      `}
      </style>
      </div>
    </>
  );
};

export default Experience;
