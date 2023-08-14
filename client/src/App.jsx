import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost } from './pages'



export const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between itme-center bg-[#FFC600] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={ logo } alt="logo" className='w-48 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter h-12 font-medium bg-black text-white px-4 py-3 rounded-md'>CREATE</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-white min-h-[calc(100vh-78px)]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      </main>
      <footer className='w-full bg-[#FFC600] py-4 text-center text-gray-800'>
  <div className='flex flex-col items-center space-y-2'>
    <p className='text-xl text-white  underline '>Mithlesh Rawte</p>
    <a href="https://mith-dot.onrender.com/">click(primarySite)</a>
    <p className='text-xs'>Email: rawtemithlesh52@gamil.com</p>
    <p className='text-xs'>Phone: (+91) 9770366745</p>
    <p className='text-xs'>Bilaspur Chhattisgarh India</p>
  </div>
</footer>
    </BrowserRouter>
  )
}

export default App