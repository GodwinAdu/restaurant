import Hero from '@/components/user/Hero'
import Image from 'next/image'


const page = () => {
    return (
        // <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
        //     {/* Image */}
        //     <div className="flex-1 h-full overflow-hidden">
        //         <Image
        //             src="/fashion.png"
        //             alt="Delicious food"
        //             width={200}
        //             height={600}
        //             className="w-full h-full object-cover"
        //         />
        //     </div>

        //     {/* Text */}
        //     <div className="flex-1 flex flex-col justify-center pl-8">
        //         <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Delicious Bites</h1>
        //         <p className="text-lg md:text-xl mb-8">Explore our wide range of mouth-watering dishes</p>
        //         <button className="py-2 px-6 bg-yellow-500 text-gray-900 rounded-full focus:outline-none hover:bg-yellow-600">Order Now</button>
        //     </div>
        // </div>
        <>
            <Hero />
        </>
    )
}

export default page
