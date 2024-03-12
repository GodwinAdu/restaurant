import Image from 'next/image';


const Menu = ({ categories }) => {
    return (
        <div className="py-4 px-2 bg-gray-400">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Menu</h2>
            <div className="container mx-auto px-4 overflow-x-auto custom-scrollbar py-4">
                <div className="flex flex-nowrap gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex-shrink-0 bg-white rounded-lg relative shadow-xl hover:scale-[1.1] cursor-pointer transition-all">
                            <Image width={200} height={200} src={category.image} alt={category.name} className=" h-40 w-56 object-cover rounded-lg shadow-xl" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center">
                                <h3 className="text-xl font-semibold">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
