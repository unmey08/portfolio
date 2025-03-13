/* eslint-disable react/no-unknown-property */
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import { Particle, SocialLinks } from "../components";
import MetaTagComponent from "../components/MetaTagComponent";

const Home = ({ theme }) => {
  return (
    <div>
      <MetaTagComponent content="Home Page of Unmey Mahaddalkar's website. Frontend Developer | Crafting Exceptional User Experiences with React, Next.js, TypeScript & JavaScript | Remote-Ready Innovator Driving Impactful Digital Solutions" />
      <AnimatedPage>
        <Particle />
        <section className="relative flex md:flex-row flex-col max-container w-full h-screen dark:h-screen items-center justify-center content-center">
          <div className="flex-1 min-w-[50%] flex flex-col mt-16 md:mt-0 text-center md:text-center">
            <motion.h1
              className="head-text dark:text-white"
              initial={{ opacity: 0, y: "-10vh" }}
              animate={{
                opacity: 1,
                y: "1vh",
                transition: { delay: 0.4, duration: 0.2, ease: "easeIn" },
              }}
              exit={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.2, ease: "easeIn" },
              }}
            >
              Hello, I'm{" "}
              <span className="blue-gradient_text font-semibold">Unmey</span>
            </motion.h1>
            <motion.div
              className="mt-5 flex flex-col gap-3 text-slate-700 dark:text-gray-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
              }}
            >
              <p className="md:text-4xl blue-gradient_text font-bold">
                Front-End Engineer
              </p>
              <p
                className={`text-lg text-gray-600 dark:text-white/80 space-x-14 font-bold`}
              >
                I transform design concepts into interactive web experiences.
              </p>
            </motion.div>
            <motion.div
              className="md:flex md:mt-8 mt-8 flex-row hidden justify-center"
              initial={{ opacity: 0, y: "10vh" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={pdfFile}
                  target="_blank"
                  className="btn mr-4 hover:opacity-90"
                  download
                >
                  Download CV
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/contact" className="btn-no-bg dark:btn-dark-bg">
                  Contact
                </Link>
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.6, duration: 0.4, ease: "easeOut" },
              }}
            >
              <SocialLinks theme={theme} page={"Home"} />
            </motion.div>
          </div>
        </section>
      </AnimatedPage>
    </div>
  );
};

export default Home;
