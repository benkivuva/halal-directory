// Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
    return (
        <div className="mt-8 flex justify-between">
            <button
                onClick={onPrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 disabled:opacity-50"
            >
                Previous
            </button>
            <span className="text-xl">{currentPage} / {totalPages}</span>
            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;