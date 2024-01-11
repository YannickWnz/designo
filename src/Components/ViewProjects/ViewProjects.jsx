import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import './ViewProjects.scss'

export const ViewProjects = () => {
    return (
        <div className="view-projects">
            <div className="view-projects-container">
                <div className="web-design">
                    <Link to='/projects/web design'>
                            <h1>WEB DESIGN</h1>
                            <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                    </Link>
                </div>
                <div className="app-design">
                    <Link to='/projects/app design' >
                        <h1>APP DESIGN</h1>
                        <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                    </Link>
                </div>
                <div className="graphic-design">
                    <Link to='/projects/graphic design' >
                        <h1>GRAPHIC DESIGN</h1>
                        <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}