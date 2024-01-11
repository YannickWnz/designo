import './ProjectCard.scss'

export const ProjectCard = ({ imgSrc, projectName, projectDesc }) => {
    return (
        <div className="project-card">
            <div className="card-wrapper">
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
    )
}