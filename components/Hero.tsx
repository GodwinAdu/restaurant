import React from 'react'

const Hero = () => {
  return (
    <>
       <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Delicious Food Delivered to You</h1>
          <p className="text-lg md:text-xl mb-8">Enjoy a wide range of tasty dishes from your favorite restaurants, delivered fast and fresh to your doorstep.</p>
          <div>
            <input type="text" placeholder="Enter your address" className="py-2 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white w-full md:w-1/2" />
            <button className="py-2 px-6 bg-yellow-500 text-gray-900 rounded-r-full ml-2 focus:outline-none hover:bg-yellow-600">Find Food</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
