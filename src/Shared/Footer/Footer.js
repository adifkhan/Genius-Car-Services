import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer bg-dark'>
            <p><small>All Rights Reserved - Copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;