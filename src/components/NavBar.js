import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
  DiscordIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ChatBot from '../components/ChatBot'

// custom link for desktop
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] dark:bg-light ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// custom link for mobile
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      // href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] dark:bg-dark ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenuButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClickMenuButton}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* desktop-view navbar */}
      <motion.div initial={{x:-500,opacity:0,sclae:0.5}} transition={{duration:1.5}} animate={{x:0,opacity:1,scale:1}} className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center" >
          <CustomLink href="/" title="Home" className={"mr-4"} />
          <CustomLink href="/about" title="About" className={"mx-4"} />
          <CustomLink href="/projects" title="Projects" className={"mx-4"} />
          <ChatBot  />
        </nav>
        <motion.div initial={{x:500,opacity:0,sclae:0.5}} transition={{duration:2}} animate={{x:0,opacity:1,scale:1}}  className="flex items-center justify-center flex-wrap">
          <Tooltip arrow title={<h1 className="font-medium "  >Discord</h1>}>
            <motion.a
              href="https://discord.com/channels/@me/758994210941698059"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <DiscordIcon />
            </motion.a>
          </Tooltip>

          <Tooltip title={<h1 className="font-medium ">GitHub</h1>} arrow>
            <motion.a
              href="https://github.com/kpspavan"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
          </Tooltip>
          <Tooltip title={<h1 className="font-medium ">LinkedIn</h1>} arrow>
            <motion.a
              href="https://www.linkedin.com/in/kpspavan"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
           
              <LinkedInIcon />
            </motion.a>
          </Tooltip>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "text-dark bg-light"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </motion.div>
      </motion.div>

      {/* mobile-view navbar */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav
            className="flex flex-col items-center justify-center"
            toggle={handleClickMenuButton}
          >
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClickMenuButton}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClickMenuButton}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClickMenuButton}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.twitter.com"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.github.com"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.pinterest.com"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://www.dribbble.com"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "text-dark bg-light"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
