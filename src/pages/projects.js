import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/icons";
import project1 from '../../public/images/projects/home-lg-bg.png'


import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollIndicator from '../components/ScrollIndicator'
import ContactForm from '../components/ContactForm'


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const jobbyapp="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl shadow-2xl border border-solid border-dark bg-light p-12 
    relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:rounded-[1.5rem] xs:w-full"
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="font-medium text-xl text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          rget={"_blank"}
          className="hover:underline underline-offset-9"
        >
          <h2 className="my-2 w-full font-bold text-left text-4xl dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 text-dark font-medium dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center dark:text-light">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 bg-dark text-light dark:text-dark dark:bg-light font-semibold p-2 px-6 text-lg rounded-lg
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative 
    dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="font-medium text-xl text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          rget={"_blank"}
          className="hover:underline underline-offset-9"
        >
          <h2 className="my-2 w-full font-bold text-left text-3xl lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="font-semibold text-lg underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Page </title>
        <meta name="description" content="any description" />
      </Head>
      <ScrollIndicator />

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Feature Project"
                title="Tasty Kitchen ( ECommerce Clone)"
                summary="implemented Tasty Kitchen application which is a clone for ECommerce applications like Amazon,
                          Flipkart where users can log in and can see a list of products with search, filters, sort by, etc.
                          Implemented Different pages and routes for Login, Products, Product details using React
                          Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.
                          ° Authenticating and authorizing users by taking username, password and doing login
                          POST HTTP API Call and implement filters by sending them as query parameters to
                          product API calls.
                          Persisted user login state by keeping jwt token in local storage, Sending it in headers of
                          further API calls to authorize the user.
                          Technologies used: React.js, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT
                          Token, Authorization, Authentication"
                img={project1}
                link="https://pavain.ccbp.tech/login"
                github="https://github.com/kpspavan/tastykitchen"
              />
            </div>
           
            

            <div className="col-span-12">
              <FeaturedProject
                type="Feature Project"
                title="Naturos Tourism"
                summary="In Naturos Tourism i build responsive webPage and cool animation effects
Form validation using html and css only
And also i used hover effects on images and navbar effects
Technologies: HTML, CSS, SCSS"
                img={project1}
                link="https://github.com/kpspavan/Naturos"
                github="https://github.com/kpspavan/Naturos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Feature Project"
                title="Jobby App"
                summary="implemented Jobby  App application where users can log in and can see a list of jobs with search, filters, sort by, etc.
                          Implemented Different pages and routes for Login.
                          Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.
                          ° Authenticating and authorizing users by taking username, password and doing login
                          POST HTTP API Call and implement filters by sending them as query parameters to
                          product API calls.
                          Persisted user login state by keeping jwt token in local storage, Sending it in headers of
                          further API calls to authorize the user.
                          Technologies used: React.js, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT
                          Token, Authorization, Authentication"
                img={project1}
                link="https://github.com/kpspavan/jobbyapp1"
                github="https://github.com/kpspavan/jobbyapp1"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Feature Project"
                title="Ports Code"
                summary="It collect the all ports and the data it will displayes in ui.and the implemented the pagination The technologoes we used HTML5,CSS3,Next.js MaterialUI."
                img={project1}
                link="https://frontendtask1-five.vercel.app/"
                github="https://github.com/kpspavan/frontendtask1"
              />
            </div>
          </div>
        </Layout>
        <ContactForm  />
      </main>
      
    </>
  );
};

export default projects;
