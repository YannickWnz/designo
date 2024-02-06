import './Feature.scss'

export const Features = () => {
    return (
        <div className="features">
            <img src="../assets/shared/desktop/bg-pattern-leaf.svg" className='leaf-pattern' alt="" />
            
            <div className="features-container">
                <div className="features-wrapper">
                    <div className="feature-illustration">

                        <img src="../assets/home/desktop/illustration-passionate.svg" alt="" />

                        <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />

                    </div>
                    <div className="feature-contents">
                        <h1>PASSIONATE</h1>
                        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </div>
                <div className="features-wrapper">
                    <div className="feature-illustration">
                        <img src="../assets/home/desktop/illustration-resourceful.svg" alt="" />
                        <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                    </div>
                    <div className="feature-contents">
                        <h1>RESOURCEFUL</h1>
                        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                    </div>
                </div>
                <div className="features-wrapper">
                    <div className="feature-illustration">
                        <img src="../assets/home/desktop/illustration-friendly.svg" alt="" />
                        <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                    </div>
                    <div className="feature-contents">
                        <h1>FRIENDLY</h1>
                        <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}