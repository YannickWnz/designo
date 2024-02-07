import './AboutUs.scss'

export const AboutUs = () => {
    return (
        <section className="about">

            <img src="../assets/shared/desktop/bg-pattern-leaf.svg" className='pattern-leaf' alt="" />

            <div className="about-container">
                <div className="intro">
                    <img src="../assets/about/desktop/bg-pattern-hero-about-desktop.svg" className='bg-pattern' alt="" />
                    <div className="text-intro">
                        <h1>About Us</h1>
                        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                    </div>
                    <div className="img-intro"></div>
                </div>
                <div className="world-class-talent">
                    <div className="section-img"></div>
                    <div className="section-text">
                        <h1>World-Class Talent</h1>
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. </p>
                        <br />
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                    </div>
                </div>
                <div className="locations">
                    <div className="canada">
                        <div className="location-wrapper">
                            <div className="location-illustration"></div>
                            <div className="location-contents"></div>
                        </div>
                    </div>
                    <div className="australia">
                        <div className="location-wrapper">
                            <div className="location-illustration"></div>
                            <div className="location-contents"></div>
                        </div>
                    </div>
                    <div className="uk">
                        <div className="location-wrapper">
                            <div className="location-illustration"></div>
                            <div className="location-contents"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}