import React from 'react'
import Navbar from '../../components/Navbar'

const Create = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col mt-[-50px] justify-center items-center h-full w-full'>
      <div className='h-[490px] sm:h-[520px] w-[390px] sm:w-[430px] flex-col gap-[30px] flex items-center justify-center rounded-[10px] shadow-xl bg-white'>
          <h1 className='text-[24px] font-medium'>Fill your details</h1>
          <form className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="w-32">Name</label>
                <input type="text" id="name" className="border w-48 px-[5px]" placeholder='Full Name' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="contact" className="w-32">Contact</label>
                <input type="number" id="contact" className="border w-48 px-[5px]" placeholder='Contact Number' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="email" className="w-32">Email</label>
                <input type="text" id="email" className="border w-48 px-[5px]" placeholder='E-mail' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="education" className="w-32">Education</label>
                <input type="text" id="education" className="border w-48 px-[5px]" placeholder='Course, University, Year' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="skills" className="w-32">Skills</label>
                <input type="text" id="skills" className="border w-48 px-[5px]" placeholder='Separate by commas' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="experience" className="w-32">Experience</label>
                <input type="text" id="experience" className="border w-48 px-[5px]" placeholder='Roles, duration' />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="address" className="w-32">Address</label>
                <input type="text" id="address" className="border w-48 px-[5px]" placeholder='City, State' />
              </div>

              <button className='bg-sky-500 h-[40px] text-white mt-[8px] font-medium cursor-pointer'>GENERATE</button>
            </form>
    </div>
    </div>
    </>
  )
}


export default Create