import { Button } from '../Button/Button'
import './Cta.scss'

export const Cta = () => {
    return (
        <section className="cta">
            <div className="cta-container">

                <img src="../assets/shared/desktop/bg-pattern-three-circles.svg" className='three-circle-pattern' alt="" />

                <div className="text-contents">
                    <h1>Let's talk about your project</h1>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Button btnContent='GET IN TOUCH' />
            </div>
        </section>
    )
}