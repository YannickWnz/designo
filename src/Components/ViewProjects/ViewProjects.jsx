import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import './ViewProjects.scss'

export const ViewProjects = () => {
    return (
        <div className="view-projects">
            <div className="view-projects-container">
                    <div className="web-design">
                        <Link to=''>
                                <h1>WEB DESIGN</h1>
                                {/* <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link> */}
                                <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                                {/* <div className="hover"></div> */}
                        </Link>
                    </div>
                <div className="app-design">
                    <Link>
                        <h1>APP DESIGN</h1>
                        <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                        {/* <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link> */}
                    </Link>
                </div>
                <div className="graphic-design">
                    <Link>
                        <h1>GRAPHIC DESIGN</h1>
                        <p>VIEW PROJECTS <span><IoIosArrowForward /></span></p>
                        {/* <Link to=''>VIEW PROJECTS <span><IoIosArrowForward /></span></Link> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}