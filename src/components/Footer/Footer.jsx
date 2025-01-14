import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Design by Daniela Silvana Tochi. © {new Date().getFullYear()} Todos los derechos reservados.</p>
            <div className={styles.socials}>
                <a href="https://linkedin.com/in/daniela-silvana-tochi" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/danielas-tochi" target="_blank" rel="noreferrer">GitHub</a>
                <a href="mailto:danielastochi@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;

