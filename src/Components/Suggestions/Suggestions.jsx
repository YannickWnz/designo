import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


import './Suggestions.scss'

export const Suggestions = ({ project }) => {
    return (
        <div className="suggestions">
            <div className="suggestions-container">

                {
                    project !== 'web design' && (
                        <div className="web-design">
                            <h1>WEB DESIGN</h1>
                            <Link to='/projects/web design'>VIEW PROJECT <span><IoIosArrowForward /></span></Link>
                        </div>
                    )
                }

                {
                    project !== 'app design' && (
                        <div className="app-design">
                            <h1>APP DESIGN</h1>
                            <Link to='/projects/app design'>VIEW PROJECT <span><IoIosArrowForward /></span></Link>
                        </div>
                    )
                }

                {
                    project !== 'graphic design' && (
                        <div className="graphic-design">
                            <h1>GRAPHIC DESIGN</h1>
                            <Link to='/projects/graphic design'>VIEW PROJECT <span><IoIosArrowForward /></span></Link>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}