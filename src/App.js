import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
import PagesRoutes from './PagesRoutes/PagesRoutes';

function App() {

  const [footerState, setFooterState] = useState(false)

  // window.location.pathname !== '/contact' ? setFooterState(true) : setFooterState(false)

  // const location = useLocation()
  const {pathname} = useLocation()


  // console.log(location)

  // const isContactPage = location.pathname === '/contact';


  return (
    <div className="App">
      {/* <Router> */}

        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> } ></Route>
          <Route path='/projects/:project' element={ <Projects /> } ></Route>
          <Route path='/about' element={ <AboutUs /> } ></Route>
          <Route path='/locations' element={ <Locations /> }  ></Route>
          <Route path='/contact' element={ <Contact /> } ></Route>
          <Route path='*' element={ <NotFound /> }  ></Route>
        </Routes>

        {/* <Cta />
        <Footer /> */}

        {/* {!isContactPage && <Cta />} */}
        {/* {!isContactPage && <Footer />} */}

        { window.location.pathname !== '/contact' 
        && 
        <Cta />
        }

        { window.location.pathname !== '/contact' 
        && 
        <Footer />
        }

        {/* <div className="test"></div> */}


      {/* </Router> */}
    </div>
  );
}

export default App;
