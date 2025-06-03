import './App.css'

function App() {

  return (
    <>
      <main h-full w-full>
        

        <div className='flex w-full h-screen flex-col'>
          <nav className='navbar h-[100px] w-full'>
        </nav>
          
          <div className="content flex w-full h-full">
              <div className="first h-full w-full">
                
              </div>

              <div className="second flex flex-col items-start justify-center h-full w-full gap-[20px]">
                  <h1 className='text-[30px] font-bold px-[50px]'>Fast, Clean, and Effective<br />Resume Creation</h1>
                  <p className='text-[20px] font-medium px-[50px]'>Create a resume that matches your skill and experience, in no time.</p>
                  <button className='text-[35px] px-[50px] font-bold'>BUILD MY RESUME</button>
              </div>
              </div>
        </div>
      </main>
    </>
  )
}

export default App
