import './LocationDetails.scss'

export const LocationDetails = ({}) => {
    return (
        <section className="location-details">
            <div className="details-container">
                <div className="details-wrapper">
                    <div className="details-contents">
                        <img src="../assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                        <h1>Canada</h1>
                        <div className="contents-wrapper">
                            <div className="office-location">
                                <h3>Designo Central Office</h3>
                                <p>3886 Wellington Street</p>
                                <p>Toronto Ontario M9C 3J5</p>
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                <p>P : +1 234 567 890 </p>
                                <p>M : contact@designo.co</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-map"></div>
                </div>
            </div>
        </section>
    )
}