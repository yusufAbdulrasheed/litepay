import React from 'react';
import NavBar from '../components/NavBar'

const Dashboard = () => {
  const user = {
    name: "John Doe",
    address: "123 Main St, City, Country",
    dob: "5th July 1999",
    profilePic: "https://via.placeholder.com/150",
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Payment clicked");
  };

  return (
    <>
      <NavBar/>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <img src={user.profilePic} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.address}</p>
              <p className="text-gray-600">{user.dob}</p>
            </div>
          </div>
          <button onClick={handlePayment} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center mr-2">
            Make Payment
          </button>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
