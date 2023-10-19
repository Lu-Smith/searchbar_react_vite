import React from 'react';

interface ResultsProps {
    results: { name: string }[];
}

const SearchResults = ({results}: ResultsProps) => {
  return (
    <div className='mt-4 flex flex-col items-center justify-center'>
        {results.map((result, id: number )=> {
            return <div 
            key={id} 
            onClick={() => alert(`You click on ${result.name}`)}
            className=' hover:bg-slate-200 p-2 w-1/2 text-center rounded transition-all duration-200'>{result.name}
            </div>
        })}
    </div>
  )
}

export default SearchResults