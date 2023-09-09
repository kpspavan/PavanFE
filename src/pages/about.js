import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../../public/images/profile/pavan.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experiance";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";
import ScrollIndicator from "../components/ScrollIndicator";
import { useRouter } from "next/router";
import ContactForm from "../components/ContactForm";
import Tools from "../components/Tools";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <>
      <span ref={ref}></span>
    </>
  );
};

const About = () => {
  const router = useRouter();

  const text = "It always seems impossible until it's done. ";
  const [displayText, setDisplayText] = useState("");
  const experienceRef = useRef(null);

  


  useEffect(() => {
    if (router.asPath.includes("#experience")) {
      setTimeout(() => {
        const experienceElement = document.getElementById("experience");
        experienceElement.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (router.asPath.includes("#skills")) {
      setTimeout(() => {
        const experienceElement = document.getElementById("skills");
        experienceElement.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [router.asPath]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = text.charAt(displayText.length);
      setDisplayText((prevText) => prevText + nextChar);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [displayText, text]);

  return (
    <>
      <Head>
        <title>About | Page</title>
        <meta name="description" content="any description" />
      </Head>
      <ScrollIndicator />
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <p
            className={`mb-12 md:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8 w-full   text-dark font-bold capitalize text-4xl flex items-center justify-center dark:text-light`}
          >
            {displayText}
          </p>

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8   ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, Im Pavan Srinivas.K, a Front End Developer  with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 1 years of experience in the field, I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty; creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" /> */}
              <Image
                src={profilePic}
                alt="profile_img"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  Features
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={1} />
                </span>
                <h2
                  ref={experienceRef}
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm"
                >
                  Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Tools />
          <div>
            <Experience />
          </div>
          <Education />
        </Layout>
      </main>
      <ContactForm />
    </>
  );
};

export default About;
