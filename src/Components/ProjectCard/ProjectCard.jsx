import './ProjectCard.scss'

export const ProjectCard = ({ imgSrc, projectName, projectDesc }) => {
    return (
        <div className="project-card">
            <div className="card-wrapper">
                <div className="project-img">
                    {/* <img src="../../../public/assets/web-design/desktop/image-transfer.jpg" alt="" /> */}
                    {imgSrc ? <img src={imgSrc} alt="" height='100%' width='100%' /> : <img src="../assets/web-design/desktop/image-transfer.jpg" alt="" />}
                </div>
                <div className="project-desc">
                    {/* <h1>yppp</h1> */}
                    {projectName ? <h1>{projectName}</h1> : <h1>EXPRESS</h1>}
                    {projectDesc ? <p>{projectDesc}</p> : <p>A multi-carrier shipping website for ecommerce business</p>}
                </div>
            </div>
        </div>
    )
}