import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { WCTalent } from '../../Components/WCTalent/WCTalent'
import './AboutUs.scss'

export const AboutUs = () => {

    let title1 = 'World-Class Talent'
    let textContent1 = 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
    let textContent2 = 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'

    let title2 = 'The real deal'
    let textContent3 = 'As strategic partners in our clients\' businesses, we are ready to take on any challenge on our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'

    let textContent4 = 'We are visual storytellers in appealling and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'

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
                <WCTalent title={title1} textContent1={textContent1} textContent2={textContent2} imgPath='../assets/about/desktop/image-world-class-talent.jpg'  />
                {/* <div className="world-class-talent">
                    <div className="section-img"></div>
                    <div className="section-text">
                        <h1>World-Class Talent</h1>
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. </p>
                        <br />
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                    </div>
                </div> */}
                <div className="locations">
                    <div className="canada">
                        <div className="location-wrapper">
                            <div className="location-illustration">
                                {/* <img src="../assets/about/desktop/bg-pattern-hero-about-desktop.svg" alt="" /> */}
                                <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                                <img src="../assets/shared/desktop/illustration-canada.svg" alt="" />
                            </div>
                            <div className="location-contents">
                                <h1>CANADA</h1>
                                <Link to="/">SEE LOCATION</Link>
                                {/* <Button btnContent='SEE LOCATION' /> */}
                            </div>
                        </div>
                    </div>
                    <div className="australia">
                        <div className="location-wrapper">
                            <div className="location-illustration">
                                <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                                <img src="../assets/shared/desktop/illustration-australia.svg" alt="" />
                            </div>
                            <div className="location-contents">
                                <h1>AUSTRALIA</h1>
                                <Link to='#'>SEE LOCATION</Link>
                            </div>
                        </div>
                    </div>
                    <div className="uk">
                        <div className="location-wrapper">
                            <div className="location-illustration">
                                <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                                <img src="../assets/shared/desktop/illustration-united-kingdom.svg" alt="" />
                            </div>
                            <div className="location-contents">
                                <h1>UNITED KINGDOM</h1>
                                <Link to='#'>SEE LOCATION</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <WCTalent title={title2} textContent1={textContent3} textContent2={textContent4} imgPath='../assets/about/desktop/image-real-deal.jpg' reversed='true' />

            </div>
        </section>
    )
}