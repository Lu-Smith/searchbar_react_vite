import React, { useState } from 'react'

const Puzzle = () => {
  const [openBox, setOpenBox] = useState(new Array(12).fill(false))
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const toggleBox = (index:number) => {
    const updatedOpenBoxes = [...openBox];
    updatedOpenBoxes[index] = !updatedOpenBoxes[index];
    setOpenBox(updatedOpenBoxes);
  };

  return (
    <div className='text-center my-4 flex justify-center items-center'>
    <div className='grid grid-rows-4 grid-flow-col justify-items-center items-center 
    bg-green-800 w-[450px] h-[600px] bg-painting1 bg-center bg-contain'>
      {boxes.map((box, index) => {
        return (
          <div
            key={index}
            onClick={() => toggleBox(index)}
            className={` ${openBox[index] ? 'bg-transparent' : 'bg-red-200'} text-white w-[150px] h-[150px] flex justify-center items-center`}
          >
            <div >{box}</div>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default Puzzle;