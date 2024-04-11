// NavigationBar.jsx
import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    { }
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;
