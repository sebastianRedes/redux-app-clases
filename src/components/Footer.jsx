import React from 'react';
import "../assets/styles/components/Footer.scss";
const Footer = () => (
    <footer className='footer'>
        <div className='footer__made'>   
            Made with
            {" "}
            <span role="img" aria-label='heart'>💚</span>
            {" "}
            by
            <a
                href='https://www.linkedin.com/in/sebastian-azocar-9496a5210/'
                rel='noopener noreferrer'
                target="_blank"
                className='logo'
            />

            <span className='logo-img'>&lt;&gt;</span>
            {" "}
            <span>Sebastian Azocar </span>
        </div>
        <div className='footer__location'>
            CH,
            <span>Valparaiso</span>
            , 2022
        </div>
    </footer>
)

export default Footer;
