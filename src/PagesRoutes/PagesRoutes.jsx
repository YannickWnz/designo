import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cta } from '../Components/CTA/Cta'
import { Footer } from '../Components/Footer/Footer'
import { AboutUs } from '../Pages/About-Us/AboutUs'
import { Home } from '../Pages/Home/Home'
import { Locations } from '../Pages/Locations/Locations'
import { Projects } from '../Pages/Projects/Projects'


function PagesRoutes() {
    return (
        <div>
            <Route path='/' element={ <Home /> } ></Route>
            <Route path='/projects/:project' element={ <Projects /> } ></Route>
            <Route path='/locations' element={ <Locations /> }  ></Route>
            <Route path='/about' element={ <AboutUs /> } ></Route>

            <Cta />
            <Footer />
        </div>
    )
}

export default PagesRoutes