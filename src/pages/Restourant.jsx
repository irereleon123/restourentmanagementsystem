import React from 'react';
import { Link } from 'react-router-dom'; 

const restaurants = [
  { id: 1, name: 'Restaurant 1', location: 'Location 1' },
  { id: 2, name: 'Restaurant 2', location: 'Location 2' },
  { id: 3, name: 'Restaurant 3', location: 'Location 3' },
  { id: 4, name: 'Restaurant 4', location: 'Location 4' },
  { id: 5, name: 'Restaurant 5', location: 'Location 5' },
  { id: 6, name: 'Restaurant 6', location: 'Location 6' }
];

const RestaurantsPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Restaurants</h1>
      <div className="grid grid-cols-2 gap-4">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="bg-gray-100 p-4">
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-500">{restaurant.location}</p>
            <Link to={`/restaurant/${restaurant.id}`} className="block mt-2 text-blue-500">More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
