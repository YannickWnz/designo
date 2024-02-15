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
                <h1>{title}</h1>
                <p>{textContent1}</p>
                <br />
                <p>{textContent2}</p>
            </div>
        </section>
    )

}