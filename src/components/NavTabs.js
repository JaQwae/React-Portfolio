import React from 'react';
import '../styles.css/Variables.css';
import '../styles.css/NavTabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a
                    href = "#aboutMe"
                    onClick = {() => handlePageChange ('AboutMe')}
                    className = {currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    aboutMe()
                </a>
            </li>
            <li className="nav-item">
                <a
                    href = "#portfolio"
                    onClick = {() => handlePageChange ('Portfolio')}
                    className = {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    portfolio()
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href = "#contact"
                    onClick = {() => handlePageChange ('Contact')}
                    className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    contact()
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    resume()
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;