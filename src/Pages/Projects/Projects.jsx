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

                    {/* <img src="../../../public/assets/shared/desktop/bg-pattern-two-circles.svg" className='three-circle-pattern' alt="" /> */}

                    {
                        project === 'web design' && (

                            <div className="text-contents">
            
                                <h1>Web Design</h1>
            
                                <p>We build websites that serve as powerful marketing tool and brings memorable brand experiences.</p>
                            </div>
                        )
                    }
                    {
                        project === 'app design' && (

                            <div className="text-contents">
            
                                <h1>App Design</h1>
            
                                <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                            </div>
                        )
                    }
                    {
                        project === 'graphic design' && (

                            <div className="text-contents">
            
                                <h1>Graphic Design</h1>
            
                                <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                            </div>
                        )
                    }

                </div>

                {
                    project === 'web design' && (
                        <div className="project-card-section">
                            <ProjectCard imgSrc='../assets/web-design/desktop/image-express.jpg' projectName='EXPRESS' projectDesc='A multi-carrier shipping website for ecommerce business'  />
                            
                            <ProjectCard imgSrc='../assets/web-design/desktop/image-transfer.jpg' projectName='TRANSFER' projectDesc='Site for low-cost money transfer and sending money within seconds' />

                            <ProjectCard imgSrc='../assets/web-design/desktop/image-photon.jpg' projectName='PHOTON' projectDesc='A state-of-the-art music player with high-resolution audio and DSP effects' />

                            <ProjectCard imgSrc='../assets/web-design/desktop/image-builder.jpg' projectName='BUILDER' projectDesc='Connects users with local contractors based on their location' />

                            <ProjectCard imgSrc='../assets/web-design/desktop/image-blogr.jpg' projectName='BLOGR' projectDesc='Blogr is a platform for creating an online blog or publication' />

                            <ProjectCard imgSrc='../assets/web-design/desktop/image-camp.jpg' projectName='CAMP' projectDesc='Get expert training in coding, data, design, and digital marketing' />

                        </div>
                    )
                }
                {
                    project === 'app design' && (
                        <div className="project-card-section">

                            <ProjectCard imgSrc='../assets/app-design/desktop/image-airfilter.jpg' projectName='AIRFILTER' projectDesc='Solving the problem of poor indoor air quality by filtering the air' />

                            <ProjectCard imgSrc='../assets/app-design/desktop/image-eyecam.jpg' projectName='EYECAM' projectDesc='Product that lets you edit your favorite photos and videos at any time' />

                            <ProjectCard imgSrc='../assets/app-design/desktop/image-faceit.jpg' projectName='FACEIT' projectDesc='Get to meet your favorite internet superstar with the faceit app' />

                            <ProjectCard imgSrc='../assets/app-design/desktop/image-todo.jpg' projectName='TODO' projectDesc='A todo app that features cloud sync with light and dark mode' />

                            <ProjectCard imgSrc='../assets/app-design/desktop/image-loopstudios.jpg' projectName='LOOPSTUDIOS' projectDesc='A VR experience app made for Loopstudios' />
                        
                        </div>
                    )
                }
                {
                    project === 'graphic design' && (
                        <div className="project-card-section">
                            <ProjectCard imgSrc='../assets/graphic-design/desktop/image-change.jpg' projectName='TIM BROWN' projectDesc="A book cover designed for Tim Brown's new release, 'Change'"  />

                            <ProjectCard imgSrc='../assets/graphic-design/desktop/image-boxed-water.jpg' projectName='BOXED WATER' projectDesc="A simple packaging concept made for Boxed Water"  />

                            <ProjectCard imgSrc='../assets/graphic-design/desktop/image-science.jpg' projectName='SCIENCE!' projectDesc="A poster made in collaboration with the Federal Art Project"  />
                        </div>
                    )
                }
                {
                    // Default case
                    !['web design', 'app design', 'graphic design'].includes(project) && (
                        <p>Invalid project type</p>
                        // navigate('/')
                    )
                }



            </div>
        </section>
    )
}
