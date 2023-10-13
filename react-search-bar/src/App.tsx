import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';

interface AppProps {
  setResults: (results: { name: string }[]) => void;
  results: { name: string }[];
}

function App() {

  const [results, setResults] = useState<AppProps['results']>([])

  return (
    <div className='App'>
      <div className="searchBarContainer">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  )
}

export default App;
