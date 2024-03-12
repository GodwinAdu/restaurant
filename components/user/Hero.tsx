import Image from 'next/image'

const Hero = () => {
    return (
        <div className="relative bg-cover h-96 bg-center flex items-center justify-center">
            {/* Background image */}
            <Image
                src="/hero.jpg"
                alt="Delicious food"
                width={246}
                height={356}
                className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Content */}
            <div className="absolute z-10 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Delicious Bites</h1>
                <p className="text-lg md:text-xl mb-8">Explore our wide range of mouth-watering dishes</p>
                <button className="py-2 px-6 bg-yellow-500 text-gray-900 rounded-full focus:outline-none hover:bg-yellow-600">Order Now</button>
            </div>
        </div>
    )
}

export default Hero
