import React from "react";
import Link from "next/link";
import Logo from '../components/Logo'
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark absolute left-0 bottom-0.5 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light ` } 
      >
        &nbsp;
      </span>
    </Link>
  );
};

function NavBar() {
  const [mode,setMode] = useThemeSwitcher()
  return (
    <header className="w-full dark:text-light px-32 py-8 font-medium flex items-center justify-between ">
      <nav>
        <CustomLink title="Home" className="mr-4" href="/" />
        <CustomLink title="About" className="mx-4" href="/about" />
        <CustomLink title="Projects" className="mx-4" href="/projects" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3 "
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3 "
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          className="w-6 mx-3 "
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          className="w-6 mx-3 "
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          className="w-6 mx-3 "
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <DribbbleIcon />
        </motion.a>
        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `} onClick={() => setMode(mode === 'light' ? "dark" : "light" ) } >
        {mode === "dark" ? <SunIcon className="fill-dark "  /> : <MoonIcon className={"fill-dark"}  />  }

        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
