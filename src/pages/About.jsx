import React from 'react'

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm <span className='blue-gradient_text font-semibold'>Unmey</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Frontend Software Engineer in Canada with 5+ years of experience building impactful web applications across borders in an Agile framework. Expertise in React, Redux, and JavaScript frameworks to create user-centric and efficient UIs.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>

                </div>
            </div>
        </section>
    )
}

export default About