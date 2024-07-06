import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { socialLinks } from "../constants";

const Projects = () => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <section className='max-container h-full dark:h-full'>
            <h1 className='head-text dark:text-white'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    Projects
                </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed dark:text-gray-200'>
                I have worked on a number of personal projects over the years. Few of these are open source and are available on my 
                {' '}<a href="https://github.com/unmey08" className="text-blue-500 hover:cursor-pointer hover:text-black-500" target="_blank">
                    Github
                </a> profile. Feel free to explore the codebase!
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back ${darkMode ? 'dark-mode-btn-back' : ''} rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold dark:text-blue-400'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500 dark:text-gray-200'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                {/* <div className="mt-5 flex items-center gap-2 font-poppins">
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-semibold text-blue-600'
                                    >
                                        Live Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt='arrow'
                                        className='w-4 h-4 object-contain'
                                    />
                                </div> */}
                                <div className="mt-5 flex items-center gap-2 font-poppins">
                                    <Link
                                        to={project.githubLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-semibold text-blue-600'
                                    >
                                        GitHub Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt='arrow'
                                        className='w-4 h-4 object-contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Projects;