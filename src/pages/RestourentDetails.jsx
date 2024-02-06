import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetailsPage = () => {
  const { id } = useParams();

  // Assuming you have a function to fetch restaurant details by id
  const restaurantDetails = fetchRestaurantDetails(id);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">{restaurantDetails.name}</h1>
          <div>
            <h2 className="text-xl font-bold">Service Categories</h2>
            <ul>
              <li>Snacks</li>
              <li>Pizzas</li>
              <li>Hamburgers</li>
              <li>Beverages</li>
              <li>Coffees</li>
              <li>Milkshakes</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
          {/* Your reservation form component goes here */}
        </div>
      </div>
    </div>
  );
};

// Function to fetch restaurant details by ID (mock implementation)
const fetchRestaurantDetails = (id) => {
  // Mock restaurant details data
  return {
    id,
    name: `Restaurant ${id}`,
    // Other restaurant details...
  };
};

export default RestaurantDetailsPage;
