import React from 'react'

const Puzzle = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='text-center my-4 flex justify-center items-center'>
    <div className='grid grid-rows-4 grid-flow-col justify-items-center items-center bg-green-800  w-[450px] h-[600px] '>
      {boxes.map((box, index) => {
        return (
          <div
            key={index}
            className='bg-red-200 text-white w-[150px] h-[150px] flex justify-center items-center'
          >
            <div>{box}</div>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default Puzzle;