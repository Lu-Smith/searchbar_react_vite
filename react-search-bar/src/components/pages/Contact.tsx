import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-4'>
      <h3>To explore more of my art projects or get in touch, please visit my 
        <a 
          className='text-green-800 hover:text-blue-800 transition duration-300 ml-1 mr-1 
          relative font-medium no-underline hover:underline decoration-4 underline-offset-4
          decoration-green-600 hover:animate-pulse' 
          href="https://www.lunasmithart.com/" 
          target='_blank' 
          rel="noreferrer"> 
            portfolio
        </a> 
        or contact me at artistlunasmith@gmail.com.
      </h3>
    </div>
  )
}

export default Contact