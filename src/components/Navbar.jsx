import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#004d00', color: '#fff', padding: '1rem' }}>
            <h1 style={{ margin: '0', fontSize: '1.5rem' }}>My Team Flix</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: '0' }}>
                <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
                <li><a href="/equipos" style={{ color: '#fff', textDecoration: 'none' }}>Equipos</a></li>
                <li><a href="/videos" style={{ color: '#fff', textDecoration: 'none' }}>Videos</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
