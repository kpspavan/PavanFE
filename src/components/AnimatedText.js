import React from "react";
import {animate, motion, stagger} from "framer-motion"

const quote={
    initial:{
        opacity: 1,
        
},
animate:{
    opacity: 1,
    transition: {
        duration: 0.5,
        staggerChildren:0.08
    }
}
}

const singelword={
    initial:{
        opacity: 0,
        y:50
        
},
animate:{
    opacity: 1,
    y:0,
    transition: {
        duration: 1
    }
}
}

function AnimatedText({ text, className = "" }) {
  return (
    <div className="w-full  mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
      variants={quote}
        className={`${className} inline-block dark:text-light w-full text-dark font-bold capitalize text-8xl `}
      >
        {text.split(" ").map((word, index) => {
          return <motion.span variants={singelword} initial="initial" animate="animate" className="inline-block" key={word + "-+index"}>{word}</motion.span>;
        })}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
