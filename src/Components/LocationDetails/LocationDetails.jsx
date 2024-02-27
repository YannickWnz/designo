import './LocationDetails.scss'

export const LocationDetails = ({country, addressOne, addressTwo, phone, email, reversed, mapImg }) => {

    var w = window.innerWidth;

    console.log(w)


    return (
        <section className="location-details">
            <div className="details-container">
                {/* <div className="details-wrapper"> */}
                <div className={` details-wrapper ${reversed ? 'reverse cl-reverse' : ''} `}>
                    <div className="details-contents">
                        <img src="../assets/shared/desktop/bg-pattern-two-circles.svg" alt="" />
                        {/* <h1>Canada</h1> */}
                        <h1>{country}</h1>
                        <div className="contents-wrapper">
                            <div className="office-location">
                                <h3>Designo Central Office</h3>
                                {/* <p>3886 Wellington Street</p> */}
                                <p>{addressOne}</p>
                                <p>{addressTwo}</p>
                                {/* <p>Toronto Ontario M9C 3J5</p> */}
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                {/* <p>P : +1 234 567 890 </p> */}
                                <p>P : {phone}</p>
                                {/* <p>M : {contact@designo.co}</p> */}
                                {country == 'Canada' && <p>contact@designo.co</p> }
                                {country == 'Australia' && <p>contact@designo.au</p> }
                                {country == 'United Kingdom' && <p>contact@designo.uk</p> }
                                {/* <p>M : {` ${country = 'Canada' ? 'contact@designo.co' : ''} `}</p> */}
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
                        {/* <img src="../assets/locations/desktop/image-map-canada.png" alt="" /> */}
                        {/* <img src={mapImg} alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}