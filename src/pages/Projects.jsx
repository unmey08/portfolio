import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import MetaTagComponent from "../components/MetaTagComponent";

const Projects = ({ theme }) => {
  return (
    <div>
      <MetaTagComponent content="Projects of Unmey Mahaddalkar's website. Front-End Developer based in Vancouver, Canada with 5 years of experience building impactful web applications across borders using React, Redux, and JavaScript to create user-centric and efficient UIs." />
      <AnimatedPage>
        <section className="max-container md:h-screen dark:md:h-screen sm:h-[100vh] dark:sm:h-[100vh]">
          <motion.h1
            className="head-text dark:text-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
          >
            My{" "}
            <span className="blue-gradient_text drop-shadow font-semibold">
              Projects
            </span>
          </motion.h1>

          <motion.p
            className="text-slate-500 mt-2 leading-relaxed dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3, ease: "easeIn" },
            }}
          >
            I have worked on a number of personal projects over the years. Few
            of these are open source and are available on my{" "}
            <a
              href="https://github.com/unmey08"
              className="text-blue-500 hover:cursor-pointer hover:text-white/90 hover:underline"
              target="_blank"
            >
              Github
            </a>{" "}
            profile. Feel free to explore the codebase!
          </motion.p>

          <div className="flex flex-wrap my-20 gap-16">
            {projects.map((project) => (
              <div className="lg:w-[400px] w-full" key={project.name}>
                <motion.div
                  className="block-container w-12 h-12"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
                  }}
                >
                  <div
                    className={`btn-back ${
                      theme === "dark" ? "dark-mode-btn-back" : ""
                    } rounded-xl ${project.theme}`}
                  />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="threads"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="mt-5 flex flex-col"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.3, ease: "easeIn" },
                  }}
                >
                  <h4 className="text-2xl font-poppins font-semibold dark:text-blue-400">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-500 dark:text-gray-200">
                    {project.description}
                  </p>
                  <div className="mt-5 flex justify-between items-center gap-2 font-poppins">
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600"
                      >
                        Live Link
                      </Link>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link
                        to={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600"
                      >
                        GitHub Link
                      </Link>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <hr className="border-sky-200 dark:border-slate-400" />

          <CTA />
        </section>
      </AnimatedPage>
    </div>
  );
};

export default Projects;
