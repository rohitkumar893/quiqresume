import './App.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../components/About'

function App() {

  return (
    <>   
        <div className='flex w-full h-full flex-col'>
          <Navbar />   

          <div className="content flex flex-col md:flex-row w-full h-full">
              <div className="first h-full w-full flex items-center justify-center relative">
                <img src="resdemo3.png" className='heroimage object-contain z-[3] md:h-[540px] h-[252px] absolute rounded-md hover:scale-104 transition-transform' />
              </div>

              <div className="second flex flex-col items-center md:items-start justify-center h-full w-full">
                  <div className='flex flex-col items-center md:items-start gap-[50px]'>
                    <p className='p-[38px] mt-[-120px] md:mt-0 md:p-0 text-[32px] md:text-[55px] font-semibold w-[500px] leading-[1.2]'>Create <span className='text-sky-600'>resume</span> that matches your skills and experience, in no time.</p>
                    <Link to="/create" className='text-[30px] mt-[-20px] md:mt-0 text-center text-white px-4 font-bold cursor-pointer hover:scale-104 transition-transform bg-sky-600 w-[180px] h-[65px] flex items-center justify-center rounded-[10px]'>GENERATE</Link>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
