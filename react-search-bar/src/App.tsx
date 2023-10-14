import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Puzzle from './components/pages/Puzzle';

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
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/puzzle' element={<Puzzle />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
        <Footer />
      </div>
    </div>
  )
}

export default App;
