import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="mt-4">
            <input
                type="text"
                placeholder="Search restaurants..."
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                aria-label="Search"
            />
        </div>
    );
};

export default SearchBar;