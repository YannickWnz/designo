import { Cta } from '../../Components/CTA/Cta'
import { Features } from '../../Components/Features/Features'
import { Footer } from '../../Components/Footer/Footer'
import HeroSection from '../../Components/HeroSection/HeroSection'
import { ViewProjects } from '../../Components/ViewProjects/ViewProjects'
import './Home.scss'

export const Home = () => {
    return (
        <div className="home">
            {/* <p>hey yoo</p> */}
            <HeroSection />

            <ViewProjects />

            <Features />

            {/* <Cta /> */}

            {/* <Footer /> */}

            {/* <div className="test"></div> */}

        </div>
    )
}