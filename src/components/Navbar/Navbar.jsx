import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.title}>My Team Flix</h1>
            <ul className={styles.menu}>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#nuevoVideo">Nuevo video</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
