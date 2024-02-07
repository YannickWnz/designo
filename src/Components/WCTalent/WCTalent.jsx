import './WCTalent.scss'

export const WCTalent = ({title, textContent1, textContent2, reversed, imgPath}) => {

    return (
        // <section className="world-class-talent"  >
        <section className={` world-class-talent ${reversed ? 'reverse-section' : ''} `}  >
            <div 
            className="section-img"
            style={{ backgroundImage: `url(${imgPath})` }}
            ></div>
            <div className="section-text">
                {/* <h1>World-Class Talent</h1> */}
                <h1>{title}</h1>
                {/* <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. </p> */}
                <p>{textContent1}</p>
                <br />
                {/* <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p> */}
                <p>{textContent2}</p>
            </div>
        </section>
    )

}