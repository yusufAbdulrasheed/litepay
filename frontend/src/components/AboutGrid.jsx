import React from 'react';

const AboutGrid = () => {
  return (
    <div className="container mx-auto">
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">About LitePay</h2>
          <p className="mt-2 text-white">LitePay is the ultimate solution for modern, convenient, and secure transportation payments. Our innovative app redefines the way passengers and transportation providers interacts, making travel seamless and hassle-free. </p>
        </div>
        <div className="p-4">
          <img src="/11136-removebg-preview.png" alt="placeholder" />
        </div>
      </div>

      <hr className='my-8 border-gray-300 '></hr>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <img src="/4137379-removebg-preview.png" alt="placeholder" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">Our Mission</h2>
          <p className="mt-2 content-center text-white">At LitePay, our mission is to revolutionize the transportation industry by providing a cashless payment solution that enhances the passenger experience and streamlines operations for transportation providers. We strive to empower both passengers and providers with cutting-edge technology that simplifies travel and ensures safety and convenience.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
