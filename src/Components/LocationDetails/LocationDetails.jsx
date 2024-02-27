import './LocationDetails.scss'

export const LocationDetails = ({country, addressOne, addressTwo, phone, email, reversed, mapImg }) => {

    var w = window.innerWidth;

    console.log(w)


    return (
        <section className="location-details">
            <div className="details-container">
                <div className={` details-wrapper ${reversed ? 'reverse cl-reverse' : ''} `}>
                    <div className="details-contents">
                        <img src="../assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                        <h1>{country}</h1>
                        <div className="contents-wrapper">
                            <div className="office-location">
                                <h3>Designo Central Office</h3>
                                <p>{addressOne}</p>
                                <p>{addressTwo}</p>
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                <p>P : {phone}</p>
                                {country == 'Canada' && <p>contact@designo.co</p> }
                                {country == 'Australia' && <p>contact@designo.au</p> }
                                {country == 'United Kingdom' && <p>contact@designo.uk</p> }
                            </div>
                        </div>
                    </div>
                    <div 
                        className="details-map"
                        style={{
                            backgroundImage: `url("${mapImg}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>
                </div>
            </div>
        </section>
    )
}