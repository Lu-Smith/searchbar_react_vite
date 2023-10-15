import React from 'react'

const Footer = () => {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen'>
        <h4 className='position: fixed bottom-20'>Coded by 
            <a 
            className='text-green-800 hover:text-blue-800 transition duration-300 ml-1 mr-1 
            relative font-medium no-underline hover:underline decoration-4 underline-offset-4
            decoration-green-600 hover:animate-pulse' 
            href="https://www.lunasmithart.com/" 
            target='_blank' 
            rel="noreferrer"> 
              Luna Smith
            </a> 
            - 
            <a 
            className='text-green-800 hover:text-blue-800 transition duration-300 ml-1 
            no-underline hover:underline decoration-2 underline-offset-4 hover:animate-pulse' 
            href="https://github.com/Lu-Smith/searchbar_react_vite" 
            target='_blank' 
            rel="noreferrer"> 
              OPEN SOURCE
            </a>
            .
        </h4>
        <button 
        className='ring-1 ring-offset-4
        ring-green-800 rounded-md
         bg-green-600 px-5 py-1 
         text-white hover:bg-sky-800 
         hover:text-zinc-200 
         sm:px-7 sm:py-2
         hover:ring-blue-300
         position: fixed bottom-5
        '
         >Click me</button>
    </div>
  )
}

export default Footer