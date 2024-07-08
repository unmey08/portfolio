import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CTA } from '../components'
import AnimatedPage from '../components/AnimatedPage';
import {Tooltip} from '@material-tailwind/react';
import { motion } from 'framer-motion';

const About = ({theme}) => {
    const handleMouseOver = (skill) => {
        skill.hover = true;
        return skill; 
    }

    return (
        <AnimatedPage>
            <section className='w-full h-full dark:h-full max-container'>
                <div className='py-10 flex flex-col'>
                    <motion.h3 className='subhead-text dark:text-white' initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {duration: 0.4, ease: 'easeIn'}
                    }}>My Skills</motion.h3>
                    <div className='mt-16 flex flex-wrap gap-12 justify-center md:justify-start'>
                        {skills.map((skill, index) => {
                            return (
                                <Tooltip content={skill.name} animate={{
                                    mount: {scale: 1, y: 0},
                                    unmount: {scale: 0, y: 25}
                                }} key={skill.name} className="bg-neutral-500 dark:bg-slate-700 px-3 py-1 shadow-xl shadow-black/10">
                                    <motion.div className='block-container w-20 h-20' onMouseOver={() => handleMouseOver(skill)} initial={{opacity: 0}} animate={{
                                        opacity: 1,
                                        transition: {delay: 0.1, duration: 0.4, ease: 'easeIn'}
                                    }}>
                                        <div className={`btn-back rounded-xl ${theme === 'dark' ? 'dark-mode-btn-back' : ''}`} />
                                        <motion.div className='btn-front rounded-xl flex justify-center items-center' initial={{opacity: 0}} animate={{
                                            opacity: 1,
                                            transition: {delay: 0.2, duration: 0.4, ease: 'easeIn'}
                                        }}>
                                            <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'
                                                key={index} />
                                        </motion.div>
                                    </motion.div>
                                </Tooltip>
                            )
                        })}
                    </div>
                </div>
                <div className='py-16 '>
                    <motion.h3 className='subhead-text dark:text-white' initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {duration: 0.1, ease: 'easeIn'}
                    }}>Work Experience</motion.h3>
                    <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-gray-200'>
                        <p>
                            I've worked with cross-functional teams across diverse locations (US and India) to deliver solutions that empower businesses. Here's the rundown:
                        </p>
                    </div>
                    <div className='mt-12 flex'>
                        <VerticalTimeline lineColor={theme === 'dark' ? 'rgb(148 163 184)' : 'white'}>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement key={experience.company_name} date={experience.date}
                                    dateClassName='dark:text-white'
                                    icon={<div className='flex justify-center items-center w-full h-full'>
                                        <img src={experience.icon} alt={experience.company_name} className='w-[90%] h-[90%] object-contain' />
                                    </div>}
                                    iconStyle={{ background: experience.iconBg}}
                                    contentStyle={{
                                        borderBottom: '8px',
                                        borderStyle: 'solid',
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: 'none',
                                        background: theme === 'dark' ? experience.iconDarkBg : ''
                                    }}
                                    contentArrowStyle={{
                                        borderRight: `${theme === 'dark' ? `7px solid ${experience.iconDarkBg}` : ''}`
                                    }}
                                >
                                    <div>
                                        <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                                            {experience.title}
                                        </h3>
                                        <p className='text-black-500 font-medium font-base m-0 dark:text-slate-400'>
                                            {experience.company_name}
                                        </p>
                                    </div>
                                    <ul className='my-5 list-disc ml-5 space-y-2'>
                                        {experience.points.map((point, index) => (
                                            <li className='text-black-500/50 dark:text-slate-400 font-normal ' key={`experience-point-${index}`}>{point}</li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
                <hr className='border-white' />
                <CTA />
            </section>
        </AnimatedPage>
    )
}

export default About