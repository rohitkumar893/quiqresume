import './App.css'

function App() {

  return (
    <>
      <main className='h-full w-full'>
        

        <div className='flex w-full h-full flex-col'>
          <nav className='navbar h-[100px] w-full flex justify-center items-center'>
            <h1 className='text-[30px] font-medium'>BuildMyRes.</h1>
          </nav>
          
          <div className="content flex flex-col sm:flex-row w-full h-full">
              <div className="first h-full w-full flex items-center justify-center relative">
                <img src="bgdesign.png" className='sm:w-[600px] w-[350px]' />
                <img src="resdemo.jpg" className='z-[3] sm:h-[350px] h-[232px] absolute rounded-md' />
              </div>

              <div className="second flex flex-col items-start justify-center h-full w-full sm:gap-[30px] gap-[24px]">
                <button className='text-[40px] px-[50px] font-bold'>BUILD<img src="arrow.png" className=' h-[50px]' /></button>
                  <h1 className='sm:text-[30px] text-[28px] font-bold px-[50px]'>Fast and Clean Resume Creation</h1>
                  <p className='text-[22px] font-medium px-[50px] w-[500px]'>Create a resume that matches your skill and experience, in no time.</p>
                  </div>
              </div>
        </div>

        <div className="about h-[100%]">
          <h1></h1>
        </div>
      </main>
    </>
  )
}

export default App
