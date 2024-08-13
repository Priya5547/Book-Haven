import React from 'react'
import "./dashboard/css/About.css"
import logo from './assets/img/BookWala.png'

const About = () => {
    return (
        <div>
            <div className='main-body'>
                <div className="container about-page main-body-1">
                    <h1>About Us</h1>
                    <img  className='logo' src={logo} alt="BookWalaa Store" />
                    <p>Welcome to BookWalaa, your number one source for all things books. We're dedicated to giving you the very best of books, with a focus on dependability, customer service, and uniqueness.</p>
                    <p>Founded in 2021, BookWalaa has come a long way from its beginnings. When we first started out, our passion for providing the best books for our fellow book lovers drove us to do tons of research so that BookWalaa can offer you the world's most amazing books. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.</p>
                    <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    <p><strong>Sincerely,</strong></p>
                    <p><strong>The BookWalaa Team</strong></p>
                </div>

            </div>
        </div>
    )
}

export default About
