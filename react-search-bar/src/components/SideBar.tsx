import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-black w-40 py-6 text-center rounded absolute top-0 left-[-10vw]'>
        <ul className='text-6xl'>
            <li className='p-2 animate-pulse'>🌞</li>
            <li className='p-2'>🎨</li>
            <li className='p-2 animate-pulse'>💗</li>
            <li className='p-2'>🍃</li>
            <li className='p-2 animate-pulse'>😃</li>
            <li className='p-2'>🥹</li>
            <li className='p-2 animate-pulse'>❄️</li>
        </ul>
    </div>
  )
}

export default SideBar