import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // State variables for active drivers and routes
  const [activeDrivers, setActiveDrivers] = useState([]);
  const [activeRoutes, setActiveRoutes] = useState([]);

  // Fetch active drivers and routes data
  useEffect(() => {
    // Fetch active drivers
    fetch('https://api.example.com/active-drivers')
      .then(response => response.json())
      .then(data => setActiveDrivers(data))
      .catch(error => console.error('Error fetching active drivers:', error));

    // Fetch active routes
    fetch('https://api.example.com/active-routes')
      .then(response => response.json())
      .then(data => setActiveRoutes(data))
      .catch(error => console.error('Error fetching active routes:', error));
  }, []);

  return (
    <div className="flex h-screen bg-purple-500">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 flex flex-col">
        <div className="text-white text-lg font-bold p-4">Admin Dashboard</div>
        <ul className="text-gray-300">
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Create Driver</li>
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Create Routes</li>
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Bus Stop</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card: Number of active drivers */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Active Drivers</h2>
            <p className="text-gray-600">Number of active drivers: {activeDrivers.length}</p>
          </div>

          {/* Card: List of active drivers */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">List of Active Drivers</h2>
            <ul>
              {activeDrivers.map(driver => (
                <li key={driver.id}>{driver.name}</li>
              ))}
            </ul>
          </div>

          {/* Card: Number of active routes */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Active Routes</h2>
            <p className="text-gray-600">Number of active routes: {activeRoutes.length}</p>
          </div>

          {/* Card: List of active routes */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">List of Active Routes</h2>
            <ul>
              {activeRoutes.map(route => (
                <li key={route.id}>{route.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
