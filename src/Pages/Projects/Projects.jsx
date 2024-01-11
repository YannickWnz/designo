import { useParams } from 'react-router-dom'
import './Projects.scss'

export const Projects = ({ service }) => {

    const { project } = useParams()

    return (
        <section className="projects">


            <div className="projects-container">

                <div className="section-intro">

                    <img src="../assets/shared/desktop/bg-pattern-two-circles.svg" className='three-circle-pattern' alt="" />

                    <img src="../../../public/assets/shared/desktop/bg-pattern-two-circles.svg" className='three-circle-pattern' alt="" />

                    <h1>Web Design</h1>

                    <p>We build websites that serve as powerful marketing tool and brings memorable brand experiences</p>

                </div>

                <div className="projects-showcase-section">
                    {/* <h1>this is where it goes</h1> */}

                    <div className="project-wrapper">
                        <div className="project-img">
                            {/* <img src="../../../public/assets/web-design/desktop/image-transfer.jpg" alt="" /> */}
                            <img src="../assets/web-design/desktop/image-transfer.jpg" alt="" />
                        </div>
                        <div className="project-desc">
                            <h1>EXPRESS</h1>
                            <p>A multi-carrier shipping website for ecommerce business</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
