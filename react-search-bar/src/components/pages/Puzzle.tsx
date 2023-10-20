import React, { useState } from 'react'

const Puzzle = () => {
  const [openBox, setOpenBox] = useState(Array(12).fill(false))
  const initialNumbers = Array(12).fill('').map((_, index) => (index + 1).toString());
  const [boxes, setBoxes] = useState(initialNumbers);
  const [newPainting, setNewPainting] = useState(false);

  const toggleBox = (index:number) => {
    const updatedOpenBoxes = [...openBox];
    updatedOpenBoxes[index] = !updatedOpenBoxes[index];
    setOpenBox(updatedOpenBoxes);

    const updatedBoxes = [...boxes];
    updatedBoxes[index] = '';
    setBoxes(updatedBoxes);
  };

  const handleNewPainting = () => {
    setNewPainting(!newPainting)
    setBoxes(initialNumbers);
    setOpenBox(Array(12).fill(false))
  }

  return (
    <div className='text-center my-8 flex flex-col justify-center items-center'>
    <div className={`grid grid-rows-4 grid-flow-col justify-items-center items-center 
    bg-green-800 sm:w-[450px] sm:h-[600px] ${newPainting ? 'bg-painting2' : 'bg-painting1'} bg-center bg-contain`}>
      {boxes.map((box, index) => {
        return (
          <div
            key={index}
            onClick={() => toggleBox(index)}
            className={` ${openBox[index] ? 'bg-transparent' : 'bg-red-200 border-white border-2'} 
            text-white sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] flex justify-center items-center`}
          >
            <div className='text-xl'>{box}</div>
          </div>
        );
      })}
    </div>
    <button 
    onClick={handleNewPainting} 
    className='hover:text-red-200 transition-all duration-200'>New Puzzle</button>
  </div>
  );
}

export default Puzzle;