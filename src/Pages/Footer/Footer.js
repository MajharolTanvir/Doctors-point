import React from 'react';

const Footer = () => {
    const year = () => {
        let currentYear = new Date().getFullYear()
        return currentYear;
    }
    return (
        <footer>
            <div className="footer p-10 justify-around text-neutral-content">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <p>Emergency Checkup</p>
                    <p>Monthly Checkup</p>
                    <p>Weekly Checkup</p>
                    <p>Deep Checkup</p>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <p>Fluoride Treatment</p>
                    <p>Cavity Filling</p>
                    <p>Teath Whitening</p>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div>
                <p className='text-center pb-4'>Copyright &copy; {year()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;