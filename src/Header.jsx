// Header.jsx
import React from 'react';
import logo from './logo.jpg'; // Import your logo image

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="/" className="flex items-center"> {/* Change Link to anchor tag */}
                    <img src={logo} alt="Logo" className="h-8 mr-2" /> {/* Adjust the height as needed */}
                    <span className="text-xl font-bold">My App</span>
                </a>
                {/* Add more navigation links or elements here */}
            </div>
        </header>
    );
};

export default Header;