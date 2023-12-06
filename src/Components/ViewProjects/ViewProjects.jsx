import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import './ViewProjects.scss'

export const ViewProjects = () => {
    return (
        <div className="view-projects">
            <div className="view-projects-container">
                <div className="web-design">
                    <h1>WEB DESIGN</h1>
                    <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link>
                </div>
                <div className="app-design">
                    <h1>APP DESIGN</h1>
                    <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link>
                </div>
                <div className="graphic-design">
                    <h1>APP DESIGN</h1>
                    <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link>
                </div>
            </div>
        </div>
    )
}