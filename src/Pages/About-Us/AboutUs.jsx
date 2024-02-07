import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { WCTalent } from '../../Components/WCTalent/WCTalent'
import {title1, title2, textContent1, textContent2, textContent3, textContent4} from '../../Components/WCTalentTexts/WCTalentTexts'
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
                <WCTalent title={title1} textContent1={textContent1} textContent2={textContent2} imgPath='../assets/about/desktop/image-world-class-talent.jpg'  />
                <div className="locations">
                    <div className="canada">
                        <div className="location-wrapper">
                            <div className="location-illustration">
                                <img src="../assets/shared/desktop/bg-pattern-small-circle.svg" className='img-pattern' alt="" />
                                <img src="../assets/shared/desktop/illustration-canada.svg" alt="" />
                            </div>
                            <div className="location-contents">
                                <h1>CANADA</h1>
                                <Link to="/">SEE LOCATION</Link>
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