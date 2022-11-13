import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PageNavigation () {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    );
}