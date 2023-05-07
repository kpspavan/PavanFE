import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeatureProjects = ({ type, title, summary,link, img, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark
      relative
         bg-light
         p-12
        shawdow-3xl rounded-br-2xl "
    >
                  <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl " />

      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg " >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 " >
        <span className="text-primary font-medium text-xl" >{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
          <h2 className="my-2 w-full text-left text-4xl font-bold  " >{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark  " >{summary}</p>
        <div className="mt-2 flex items-center  " >
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} 
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  "
                    target="_blank">
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title,link, img, github }) =>{
    return (
        <article
        className="w-full flex items-center justify-center 
        rounded-2xl border border-solid 
        flex-col border-dark bg-light p-6 relative  "
      >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl " />
        <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg " >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4 " >
          <span className="text-primary font-medium text-xl" >{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
            <h2 className="my-2 w-full text-left text-3xl font-bold  " >{title}</h2>
          </Link>
          
          <div className="mt-2 flex items-center justify-between w-full  " >
          <Link href={link} 
            className="  underline  font-semibold  "
                      target="_blank">
              Visit
            </Link>
            <Link className="w-8" href={github} target="_blank">
              <GithubIcon />
            </Link>
            
          </div>
        </div>
      </article>
        )
}

function projects() {
  return (
    <>
      <Head>
        <title>Projects | Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w--full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText text="Imgination text Knowledge" className="mb-16" />
          <div className="grid grid-col-12 gap-24">
            <div className="col-span-12">
              <FeatureProjects
                title="crypo currency"
                summary="Crypto Screener Application
A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                type="featureproject"
                img={project1}
                github="/"
              />
              <Projects  
                title="crypo currency"
              
                link="/"
                type="featureproject"
                img={project1}
                github="/"

              />
            </div>
            <div className="col-span-6">
            <Projects  
                title="crypo currency"
              
                link="/"
                type="featureproject"
                img={project1}
                github="/"

              />
            </div>
            <div className="col-span-6">
            <Projects  
                title="crypo currency"
              
                link="/"
                type="featureproject"
                img={project1}
                github="/"

              />
            </div>
            <div className="col-span-6">
            <Projects  
                title="crypo currency"
              
                link="/"
                type="featureproject"
                img={project1}
                github="/"

              />
            </div>
            <div className="col-span-6"><Projects  
                title="crypo currency"
              
                link="/"
                type="featureproject"
                img={project1}
                github="/"

              /></div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
