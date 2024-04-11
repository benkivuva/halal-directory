import React from 'react';

const RestaurantCard = ({ restaurant }) => {
    // Function to generate stars based on rating
    const renderStars = (rating) => {
        const filledStars = Math.floor(rating);
        const remainingStar = 5 - filledStars;
        return (
            <>
                {[...Array(filledStars)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1l2.583 5.72L18 7.75l-4.167 4.083.917 5.67-5.75-3.167L5.25 17 6 10 .583 7.75 7.5 6 10 1z" />
                    </svg>
                ))}
                {[...Array(remainingStar)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 fill-current inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1l2.583 5.72L18 7.75l-4.167 4.083.917 5.67-5.75-3.167L5.25 17 6 10 .583 7.75 7.5 6 10 1z" />
                    </svg>
                ))}
            </>
        );
    };

    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50">
            <h2 className="text-2xl font-semibold mb-2">{restaurant.restaurant_name}</h2>
            <div className="flex items-center mb-2">
                <p className="text-gray-700 mr-2"><strong>Rating:</strong></p>
                {renderStars(restaurant.rating)}
            </div>
            <p className="text-gray-700"><strong>City:</strong> {restaurant.city}</p>
            <p className="text-gray-700"><strong>State:</strong> {restaurant.state}</p>
            <p className="text-gray-700"><strong>Zipcode:</strong> {restaurant.zipcode}</p>
            <p className="text-gray-700"><strong>Phone Number:</strong> {restaurant.phone_number}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Order Now</button>
            {/* Include other fields as needed */}
        </div>
    );
};

export default RestaurantCard;