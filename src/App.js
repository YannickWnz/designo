import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NotFound from './Components/404/NotFound';
import { Navbar } from './Components/Navbar/Navbar';
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';
import { Locations } from './Pages/Locations/Locations';
import { Projects } from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> } ></Route>
          <Route path='/projects' element={ <Projects /> } ></Route>
          <Route path='/contact' element={ <Contact /> } ></Route>
          <Route path='/location' element={ <Locations /> }  ></Route>
          <Route path='*' element={ <NotFound /> }  ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
