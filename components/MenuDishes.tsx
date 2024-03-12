import Image from 'next/image';

const MenuDishes = ({ dishes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {dishes.map((dish, index) => (
        <div key={index} className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6">
          <Image width={200} height={200} src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-lg mb-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
            <p className="text-gray-700">{dish.description}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">Price: ${dish.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuDishes;
