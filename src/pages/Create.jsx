import React from 'react'

const Create = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='h-[600px] w-[640px] flex-col gap-[30px] flex items-center justify-center border'>
        <h1 className='text-[30px]'>FILL YOUR DETAILS</h1>
          <form className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label htmlFor="name" className="w-32">Name</label>
                <input type="text" id="name" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="contact" className="w-32">Contact</label>
                <input type="number" id="contact" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="email" className="w-32">Email</label>
                <input type="text" id="email" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="occupation" className="w-32">Occupation</label>
                <input type="text" id="occupation" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="university" className="w-32">University</label>
                <input type="text" id="university" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="qualification" className="w-32">Qualification</label>
                <input type="text" id="qualification" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="skills" className="w-32">Skills</label>
                <input type="text" id="skills" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="experience" className="w-32">Experience</label>
                <input type="text" id="experience" className="border flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <label htmlFor="address" className="w-32">Address</label>
                <input type="text" id="address" className="border flex-1" />
              </div>
            </form>
    </div>
    </div>
  )
}


export default Create