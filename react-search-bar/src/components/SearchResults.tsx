import React from 'react';

interface ResultsProps {
    results: { name: string }[];
}

const SearchResults = ({results}: ResultsProps) => {
  return (
    <div className='resultsList'>
        {results.map((result, id: number )=> {
            return <div key={id} onClick={() => alert(`You click on ${result.name}`)}>{result.name}</div>
        })}
    </div>
  )
}

export default SearchResults