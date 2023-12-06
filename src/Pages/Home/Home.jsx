import HeroSection from '../../Components/HeroSection/HeroSection'
import { ViewProjects } from '../../Components/ViewProjects/ViewProjects'
import './Home.scss'

export const Home = () => {
    return (
        <div className="home">
            {/* <p>hey yoo</p> */}
            <HeroSection />

            <ViewProjects />

            <div className="test"></div>

        </div>
    )
}