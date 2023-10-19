import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    setResults: (results: { name: string }[]) => void;
}

const SearchBar = ({setResults}: SearchBarProps) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user: {name: string}) => {
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            setResults(results);
        });
    };

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <div 
    className='flex-row flex justify-center content-center p-4
     bg-green-600 w-1/2 rounded shadow-lg shadow-slate-300 
     placeholder-green-600 font-semibold text-base'>
        <FaSearch className='text-cyan-800 text-3xl bg-white p-2 w-12 h-12 rounded-s' />
        <input 
        type="text" 
        placeholder='Type to search...' 
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className='p-2 rounded-e'
        />
    </div>
  )
}

export default SearchBar;