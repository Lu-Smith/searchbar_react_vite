import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Puzzle from './components/pages/Puzzle';
import SideBar from './components/SideBar';

function App() {

  return (
    <div className='App'>
      <div className="searchBarContainer">
        <NavBar />
        <SideBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/puzzle' element={<Puzzle />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App;
