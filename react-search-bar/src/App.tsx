import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

interface AppProps {
  setResults: (results: { name: string }[]) => void;
  results: { name: string }[];
}

function App() {

  const [results, setResults] = useState<AppProps['results']>([])

  return (
    <div className='App'>
      <div className="searchBarContainer">
        <NavBar />
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
        <Footer />
      </div>
    </div>
  )
}

export default App;
