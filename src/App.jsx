import './App.css'
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
      <main className='h-full w-full'>
        <div className='flex w-full h-full flex-col'>
          <nav className='navbar h-[100px] w-full flex justify-center items-center'>
            <h1 className='text-[28px] font-medium text-white'>BuildMyRes.</h1>
          </nav>
          
          <div className="content flex flex-col sm:flex-row w-full h-full">
              <div className="first h-full w-full flex items-center justify-center relative">
                <img src="bgdesign.png" className='sm:w-[500px] w-[300px]' />
                <img src="resdemo.jpg" className='z-[3] sm:h-[350px] h-[232px] absolute rounded-md' />
              </div>

              <div className="second flex flex-col items-center justify-center h-full w-full sm:gap-[30px] gap-[24px]">
                <Link to="/create"><button className='text-[40px] text-white px-[50px] font-bold cursor-pointer bg-purple-600'>BUILD</button></Link>
                  <div className='flex flex-col gap-[15px]'>
                    <h1 className='sm:text-[30px] text-[28px] font-bold px-[50px]'>Fast and Clean Resume Creation</h1>
                    <p className='text-[22px] font-medium px-[50px] w-[500px]'>Create a resume that matches your skill and experience, in no time.</p>
                  </div>
                  </div>
              </div>
        </div>

        <div className="about h-full w-full flex flex-col mt-[85px] justify-start items-center">
          <h1 className='text-center text-[40px]'>ABOUT</h1>
          <p className='text-center text-[28px] w-[90%] sm:w-[85%]'>A straightforward web app that helps users create clean, professional resumes quickly. Users can input their personal details, work experience, education, and skills, then generate a downloadable resume in PDF format. No complicated features-just a fast, easy way to get your resume ready for job hunting.</p>
        </div>
      </main>
    </>
  )
}

export default App
