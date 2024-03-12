import Hero from "@/components/Hero";
import HomeNav from "@/components/HomeNav";
import Menu from "@/components/Menu";
import MenuDishes from "@/components/MenuDishes";
import Popular from "@/components/Popular";
import QRCode from "react-qr-code";

const dishes = [
  {
    name: 'Delicious Dish 1',
    description: 'Description of the delicious dish 1. It\'s absolutely mouth-watering!',
    price: 9.99,
    image: '/dish1.jpg'
  },
  {
    name: 'Scrumptious Dish 2',
    description: 'Description of the scrumptious dish 2. It\'s a culinary delight!',
    price: 11.99,
    image: '/dish2.jpg'
  },
  {
    name: 'Exquisite Dish 3',
    description: 'Description of the exquisite dish 3. It\'s a culinary masterpiece!',
    price: 14.99,
    image: '/dish3.jpg'
  }
];

const categories = [
  {
    name: 'Appetizers',
    image: '/hero.jpg'
  },
  {
    name: 'Soups',
    image: '/hero1.jpg'
  },
  {
    name: 'Salads',
    image: '/salads.jpg'
  },
  {
    name: 'Main Courses',
    image: '/main_courses.jpg'
  },
  {
    name: 'Pasta',
    image: '/pasta.jpg'
  },
  {
    name: 'Pizza',
    image: '/pizza.jpg'
  },
  {
    name: 'Burgers',
    image: '/burgers.jpg'
  },
  {
    name: 'Sandwiches',
    image: '/sandwiches.jpg'
  },
  {
    name: 'Seafood',
    image: '/seafood.jpg'
  },
  {
    name: 'Steak',
    image: '/steak.jpg'
  },
  {
    name: 'Chicken',
    image: '/chicken.jpg'
  },
  {
    name: 'Vegetarian',
    image: '/vegetarian.jpg'
  },
  {
    name: 'Vegan',
    image: '/vegan.jpg'
  },
  {
    name: 'Side Dishes',
    image: '/side_dishes.jpg'
  },
  {
    name: 'Desserts',
    image: '/desserts.jpg'
  },
  {
    name: 'Drinks',
    image: '/drinks.jpg'
  },
  {
    name: 'Cocktails',
    image: '/cocktails.jpg'
  },
  {
    name: 'Wines',
    image: '/wines.jpg'
  },
  {
    name: 'Beers',
    image: '/beers.jpg'
  },
  {
    name: 'Spirits',
    image: '/spirits.jpg'
  }
];


export default function Home() {
  const value = 'https://summaq.vercel.app';
  return (
    <>
    <HomeNav />
      <Hero />
      <Popular />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Popular Dishes</h2>
        <MenuDishes dishes={dishes} />
      </div>

      <Menu categories={categories} />

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Restaurants</h2>
          {/* Add featured restaurants here */}
        </div>
      </section>



      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Customer Reviews</h2>
          {/* Add customer reviews here */}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Special Offers</h2>
          {/* Add special offers here */}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
          {/* Add contact form here */}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          {/* Add footer content here */}
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>


      <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
        <QRCode
          size={456}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}
