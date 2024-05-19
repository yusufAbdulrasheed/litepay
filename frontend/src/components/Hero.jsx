import React from 'react'

const Hero = () =>{
  return(
    <div className=" text-black py-20">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to LitePay</h1>
          <p className="text-lg mb-6 text-justify text-white">Say goodbye to cash and hello to a smoother, more convenient way to pay for your rides. Welcome to Litepay – where every journey begins with simplicity, security, and peace of mind. Start your cashless commute today!</p>
          {/* <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Button 1</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Button 2</button>
          </div> */}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="/4203280-removebg-preview.png" alt="Placeholder" className="rounded-md shadow-md" />
        </div>
      </div>
    </div>
  )
}

export default Hero