import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CTA } from '../components'

const About = () => {
    const handleMouseOver = (skill) => {
        skill.hover = true;
        return skill; 
    }

    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <section className='max-container'>
            <h1 className='head-text dark:text-white'>
                Hello, I'm <span className='blue-gradient_text font-semibold'>Unmey</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-gray-200'>
                <p>
                    Full-stack Engineer in Canada with 5+ years of experience building impactful web applications across borders in an Agile framework. Expertise in React, Redux, and TypeScript to create user-centric and efficient UIs.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text dark:text-white'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill, index) => {
                        return (
                            <div className='block-container w-20 h-20' onMouseOver={() => handleMouseOver(skill)} key={skill.name}>
                                <div className={`btn-back rounded-xl ${darkMode ? 'dark-mode-btn-back' : ''}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'
                                        key={index} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='py-16 '>
                <h3 className='subhead-text dark:text-white'>Work Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-gray-200'>
                    <p>
                        I've worked with cross-functional teams across diverse locations (US and India) to deliver solutions that empower businesses. Here's the rundown:
                    </p>
                </div>
                <div className='mt-12 flex'>
                    <VerticalTimeline lineColor={darkMode ? 'rgb(148 163 184)' : 'white'}>
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
                                    background: darkMode ? experience.iconDarkBg : experience.iconBg
                                }}
                                contentArrowStyle={{
                                    borderRight: `7px solid ${darkMode ? experience.iconDarkBg : experience.iconBg}`
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
            <hr className='border-slate-200' />
            <CTA />
        </section>
    )
}

export default About