/* eslint-disable react/no-unknown-property */
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import { SocialLinks } from "../components";
import MetaTagComponent from "../components/MetaTagComponent";

const Home = ({ theme }) => {
  return (
    <div>
      <MetaTagComponent content="Home Page of Unmey Mahaddalkar's website. Frontend Developer | Crafting Exceptional User Experiences with React, Next.js, TypeScript & JavaScript | Remote-Ready Innovator Driving Impactful Digital Solutions" />
      <AnimatedPage>

        <section className="relative flex w-full min-h-screen items-center justify-center px-8 sm:px-16">
          <div className="flex flex-col text-center items-center max-w-2xl w-full">
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
              <p className="text-3xl blue-gradient_text font-bold">
                Full-Stack Engineer
              </p>
              <p
                className={`text-lg text-gray-600 dark:text-white/80 md:font-semibold sm:font-normal`}
              >
                React · TypeScript · Next.js · Node.js · Vancouver, BC
              </p>
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold">
                🟢 Available July 1st · Canadian PR — no sponsorship needed
              </p>
            </motion.div>
            <motion.div
              className="flex mt-8 flex-row justify-center"
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
                aria-label="Button to Download CV"
              >
                <Link
                  to={pdfFile}
                  target="_blank"
                  className="btn mr-6 hover:opacity-95"
                  download
                  aria-label="Download CV"
                >
                  Download CV
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="Contact"
              >
                <Link
                  to="/contact"
                  className="btn-no-bg dark:btn-dark-bg"
                  aria-label="Navigate to Contact"
                >
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
