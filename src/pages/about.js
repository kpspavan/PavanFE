import React, { useEffect,useRef } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duraion:3000})
    const isInview = useInView(ref)
    useEffect(() => {
        if(isInview) {
            motionValue.set(value)
        }

    },[isInview,value,motionValue])
    useEffect(() => {
    springValue.on("change",(latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0)
        }

    } )

    },[springValue,value,])
    return(
        <>
            <span ref={ref} ></span>
        </>
    )
};

function about() {
  return (
    <>
      <Head>
        <title>About | Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fulls Purposal  " className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, Im CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty it s about solving problems and creating intuitive,
                enjoyable experiences for users
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
              <Image
                src={profilePic}
                alt="codebucks"
                className="w-full h-auto rounded-2xl "
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center" >
                <span className="inline-block text-7xl font-bold " ><AnimatedNumber value={50}  /></span>
                <h2 className="text-xl font-medium capitalize text-dark/75" >satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center" >
                <span className="inline-block text-7xl font-bold " ><AnimatedNumber value={10} /></span>
                <h2 className="text-xl font-medium capitalize text-dark/75" >Projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center" >
                <span className="inline-block text-7xl font-bold " ><AnimatedNumber value={1} /></span>
                <h2 className="text-xl font-medium capitalize text-dark/75" >Experance </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default about;
