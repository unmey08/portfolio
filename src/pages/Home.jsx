/* eslint-disable react/no-unknown-property */
import { profile } from '../assets/images';
import pdfFile from "../assets/resume/UnmeyMahaddalkarResume.pdf";
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';


const Home = ({theme}) => {
    return (
        <AnimatedPage>
            <section className='relative flex md:flex-row flex-col max-container w-full h-screen dark:h-screen items-center'>
                <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                    <motion.div initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {delay: 1, duration: 0.4, ease: 'easeIn'}
                    }}>
                        <img src={profile} alt="profile-pic" className='object-contain rounded-full absolute md:w-[400px] md:h-[400px] sm:h-[300px] sm:w-[300px]' width={window.innerWidth < 768 ? 300 : 400} height={window.innerWidth < 768 ? 300 : 400}/>
                        <motion.svg className={'md:w-[400px] md:h-[400px] sm:h-[300px] sm:w-[300px]'} fill="transparent" viewBox={"0 0 506 506"} xmlns={"http://www.w3.org/2000/svg"}>
                            <motion.circle 
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#2b77e7"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{strokeDasharray: "24 10 0 0"}}
                                animate={{
                                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate: [120, 360]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            />
                        </motion.svg>
                    </motion.div>
                </div>
                <div className='flex-1 min-w-[50%] flex flex-col'>
                    <motion.h1 className='head-text dark:text-white' initial={{opacity: 0, scaleY: 0}} animate={{
                        opacity: 1,
                        scaleY: 1,
                        transition: {delay: 0.4, duration: 0.4, ease: 'easeOut'}
                    }}>
                        Hello, I'm <span className='blue-gradient_text font-semibold'>Unmey</span>
                    </motion.h1>
                    <motion.div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-gray-200' initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {delay: 0.9, duration: 0.4, ease: 'easeIn'}
                    }}>
                        <p>
                            Full-stack Engineer in Canada with 5+ years of experience building impactful web applications across borders in an Agile framework. Expertise in React, Redux, and TypeScript to create user-centric and efficient UIs.
                        </p>
                    </motion.div>
                    <motion.div className='flex justify-center mt-4' initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {delay: 1.2, duration: 0.4, ease: 'easeIn'}
                    }}>
                        <Link to={pdfFile} target="_blank" className="btn mr-4 hover:opacity-80 transition ease-in duration-200" download>Download CV</Link>
                        <Link to='/contact' className="btn-no-bg dark:btn-dark-bg">Contact</Link>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default Home