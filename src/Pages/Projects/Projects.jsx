import { useNavigate, useParams } from 'react-router-dom'
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard'
import './Projects.scss'

export const Projects = ({ service }) => {

    const { project } = useParams()

    const navigate = useNavigate()


    return (
        <section className="projects">


            <div className="projects-container">

                <div className="section-intro">

                    <img src="../assets/shared/desktop/bg-pattern-two-circles.svg" className='three-circle-pattern' alt="" />

                    <img src="../../../public/assets/shared/desktop/bg-pattern-two-circles.svg" className='three-circle-pattern' alt="" />

                    <h1>Web Design</h1>

                    <p>We build websites that serve as powerful marketing tool and brings memorable brand experiences</p>

                </div>

                {/* <div className="projects-showcase-section">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <img src="../assets/web-design/desktop/image-transfer.jpg" alt="" />
                        </div>
                        <div className="project-desc">
                            <h1>EXPRESS</h1>
                            <p>A multi-carrier shipping website for ecommerce business</p>
                        </div>
                    </div>
                </div> */}
                {
                    project === 'web design' && (
                        <div className="project-card-section">
                            <ProjectCard  />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    )
                }
                {
                    project === 'app design' && (
                        <div className="project-card-section">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    )
                }
                {
                    project === 'graphic design' && (
                        <div className="project-card-section">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    )
                }
                {
                    // Default case
                    !['web design', 'app design', 'graphic design'].includes(project) && (
                        // <p>Invalid project type</p>
                        navigate('/')
                    )
                }



            </div>
        </section>
    )
}
