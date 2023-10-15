import React from 'react'

interface SideBarProps {
  openSideBar: boolean;
}

const SideBar = ({openSideBar}: SideBarProps) => {

  return (
    <div className={`bg-black w-40 py-6 text-center rounded absolute top-0 
    ${openSideBar ? 'left-0' : 'left-[-30vw]'}
    ${openSideBar ? 'animate-appearFromLeft' : 'animate-disappearFromLeft'}`}>
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