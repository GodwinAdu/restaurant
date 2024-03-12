import React from 'react'

const Popular = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Popular Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Add popular dishes here */}
                        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
                            <img src="dish1.jpg" alt="Popular Dish 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Delicious Dish 1</h3>
                                <p className="text-gray-700">Description of the delicious dish 1. It's absolutely mouth-watering!</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Price: $9.99</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Order Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
                            <img src="dish2.jpg" alt="Popular Dish 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Scrumptious Dish 2</h3>
                                <p className="text-gray-700">Description of the scrumptious dish 2. It's a culinary delight!</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Price: $11.99</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Order Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
                            <img src="dish3.jpg" alt="Popular Dish 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Exquisite Dish 3</h3>
                                <p className="text-gray-700">Description of the exquisite dish 3. It's a culinary masterpiece!</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Price: $14.99</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popular
