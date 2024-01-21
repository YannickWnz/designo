import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NotFound from './Components/404/NotFound';
import { Cta } from './Components/CTA/Cta';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { AboutUs } from './Pages/About-Us/AboutUs';
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
          <Route path='/projects/:project' element={ <Projects /> } ></Route>
          <Route path='/contact' element={ <Contact /> } ></Route>
          <Route path='/about' element={ <AboutUs /> } ></Route>
          <Route path='/locations' element={ <Locations /> }  ></Route>
          <Route path='*' element={ <NotFound /> }  ></Route>
        </Routes>

        <Cta />
        <Footer />

        {/* <div className="test"></div> */}


      </Router>
    </div>
  );
}

export default App;
