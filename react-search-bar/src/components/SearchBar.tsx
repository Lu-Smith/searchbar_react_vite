import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    setResults: (results: string[]) => void;
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
    <div className='input-wrapper'>
        <FaSearch id="search-icon" />
        <input 
        type="text" 
        placeholder='Type to search...' 
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
  )
}

export default SearchBar;