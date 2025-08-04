import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
     <div className="about h-full w-full flex flex-col pt-[80px] mt-[85px] justify-start items-center">
        <h1 className='text-center text-[38px]'><b>ABOUT</b></h1>
        <p className='text-center text-[20px] sm:text-[28px] w-[90%] sm:w-[85%]'>A straightforward web app that helps users create clean, professional resumes quickly. Users can input their personal details, work experience, education, and skills, then generate a downloadable resume in PDF format. No complicated features-just a fast, easy way to get your resume ready for job hunting.</p>
        <Link to='/' className='mt-[50px] text-[20px] bg-gray-200 w-[70px] text-center rounded-[10px]'>Home</Link>
    </div>
  )
}

export default About