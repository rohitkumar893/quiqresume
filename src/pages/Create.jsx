import React from 'react'
import Navbar from '../../components/Navbar'

const Create = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col mt-[-50px] justify-center items-center h-full w-full'>
      <div className='h-[490px] sm:h-[520px] w-[390px] sm:w-[440px] flex-col gap-[30px] flex items-center justify-center rounded-[10px] shadow-xl bg-white'>
          <form className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="w-32">Name</label>
                <input type="text" id="name" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="contact" className="w-32">Contact</label>
                <input type="number" id="contact" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="email" className="w-32">Email</label>
                <input type="text" id="email" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="occupation" className="w-32">Occupation</label>
                <input type="text" id="occupation" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="university" className="w-32">University</label>
                <input type="text" id="university" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="qualification" className="w-32">Qualification</label>
                <input type="text" id="qualification" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="skills" className="w-32">Skills</label>
                <input type="text" id="skills" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="experience" className="w-32">Experience</label>
                <input type="text" id="experience" className="border w-48 px-[5px]" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="address" className="w-32">Address</label>
                <input type="text" id="address" className="border w-48 px-[5px]" />
              </div>

              <button className='bg-sky-500 h-[40px] text-white mt-[10px] font-medium cursor-pointer'>GENERATE</button>
            </form>
    </div>
    </div>
    </>
  )
}


export default Create