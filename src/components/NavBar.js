import React from "react";
import Link from "next/link";
import Logo from "../components/logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from "./icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark absolute left-0 bottom-0.5 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function NavBar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav>
        <CustomLink title="Home" className="mr-4" href="/" />
        <CustomLink title="About" className="mx-4" href="/" />
        <CustomLink title="Projects" className="mx-4" href="/" />
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
