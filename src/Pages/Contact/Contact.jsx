import './Contact.scss'

export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="intro">
                    <img src="../assets/about/desktop/bg-pattern-hero-about-desktop.svg" className='bg-pattern' alt="" />
                    <div className="text-intro">
                        <h1>Contact Us</h1>
                        <p>Ready to take it the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                    </div>
                    <div className="contact-form">
                        <form action="" className="">
                            {/* <p>form goes in here</p> */}
                            <input type="text" placeholder='Name' />
                            <br />
                            <input type="email" placeholder='Email' />
                            <br />
                            <input type="text" placeholder='Phone' />
                            <br />
                            <textarea name="" placeholder='Your message' id="" cols="30" rows="10"></textarea>
                            <br />
                            <div className="submit-btn">
                                <input type="submit" value='SUBMIT' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}