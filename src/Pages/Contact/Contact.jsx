import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import './Contact.scss'

export const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Sending email')
        
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        };
    

    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="intro">
                    <img src="../assets/about/desktop/bg-pattern-hero-about-desktop.svg" className='bg-pattern' alt="" />
                    <div className="text-intro">
                        <h1>Contact Us</h1>
                        <p>Ready to take it the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                    </div>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail} action="" className="">
                            {/* <p>form goes in here</p> */}
                            <input type="text" placeholder='Name' name='user_name' />
                            <br />
                            <input type="email" placeholder='Email' name='user_email' />
                            <br />
                            <input type="text" placeholder='Phone' name='user_phone' />
                            <br />
                            <textarea placeholder='Your message' name='message' id="" cols="30" rows="10"></textarea>
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