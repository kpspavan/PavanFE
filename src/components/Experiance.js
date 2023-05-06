import React,{useRef} from "react";
import {useScroll,motion} from "framer-motion"
import Licon from '../components/Licon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "  >
    <Licon  reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring" }}  >
        <h3 className="capitalize font-bold text-2xl" >
          {position} &nbsp; <a target="_blank" className="text-prmary capitalize" href={companyLink}>@{company}</a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 " >
          {time} | {address}
        </span>
        <p className="font-medium w-full" >{work}</p>
      </motion.div>
    </li>
  );
};

function Experiance() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Experiance
        </h2>
        <div ref={ref} className="w-[75%] m-auto relative ">
        <motion.div style={{scaleY:scrollYProgress}}  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top " />
          <ul className="w-full flex flex-col items-start justify-between ml-4 " >
            <Details
              position="Software Engineer"
              company="Googel"
              companyLink="www.googel.com"
              time="2022-present"
              address="mountain view"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.
"
            />
            <Details
              position="Software Engineer"
              company="Googel"
              companyLink="www.googel.com"
              time="2022-present"
              address="mountain view"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.
"
            />
            <Details
              position="Software Engineer"
              company="Googel"
              companyLink="www.googel.com"
              time="2022-present"
              address="mountain view"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.
"
            />
            <Details
              position="Software Engineer"
              company="Googel"
              companyLink="www.googel.com"
              time="2022-present"
              address="mountain view"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.
"
            />
            <Details
              position="Software Engineer"
              company="Googel"
              companyLink="www.googel.com"
              time="2022-present"
              address="mountain view"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.
"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experiance;
