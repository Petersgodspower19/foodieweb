import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './home/Home';
import Dishes from './pages/Dishes';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function AppLayout() {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleOpenBar() {
        setIsOpen(open => !open);
    }

    return (
        <div>
            {isOpen ? (
                <NavBar handleClick={handleOpenBar} open={isOpen} /> // Show NavBar when isOpen is true
            ) : (
                <>
                    <Header handleClick={handleOpenBar} />
                    <main>
                        <Home />
                        <Dishes />
                        <About />
                        <Menu />
                        <Reviews />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default AppLayout;
