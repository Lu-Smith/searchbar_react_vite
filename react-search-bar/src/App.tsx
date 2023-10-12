import { useState } from 'react';
import SearchBar from "./components/SearchBar";

function App() {

  const [results, setResults] = useState([])

  return (
    <div className='App'>
      <div className="searchBarContainer">
        <SearchBar setResults={setResults} />
        <div>{results}</div>
      </div>
    </div>
  )
}

export default App;
