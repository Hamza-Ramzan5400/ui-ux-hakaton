import FoodtuckNavbar from "../components/FoodtuckNavbar";
import HeroCommon from "../components/HeroCommom";
import Image from "next/image";
 

const Menu = () => {
  return (
    <div>
      <div>
      <FoodtuckNavbar/>
    <HeroCommon title="Our Menu" subtitle="Blog" />
    </div>
    
    






    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 p-4">
        <Image src="/starter.png" alt="Dish" width={224} height={326} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Starter Menu</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Alder Grilled Chinook Salmon</h2>
          <p>Toasted French bread topped with romano, cheddar</p>
          <p>560 CAL</p>
          <p className="text-right font-bold text-[#ff9f0d]">32$</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-600">Berries and creme tart</h2>
          <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
          <p>700 CAL</p>
          <p className="text-right font-bold text-[#ff9f0d]">43$</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Tormentoso Bush Pizza Pintoage</h2>
          <p>Ground cumin, avocados, peeled and cubed</p>
          <p>1000 CAL</p>
          <p className="text-right font-bold text-[#ff9f0d]">14$</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Spicy Vegan Potato Curry</h2>
          <p>Spreadable cream cheese, crumbled blue cheese</p>
          <p>560 CAL</p>
          <p className="text-right font-bold text-[#ff9f0d]">35$</p>
        </div>
      </div>
    </div>


   
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">Main Course</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Optic Big Breakfast Combo Menu <span className="text-orange-500">32$</span></h2>
          <p>Toasted French bread topped with romano, cheddar</p>
          <p className="text-gray-500">560 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Cashew Chicken With Stir-Fry <span className="text-orange-500">43$</span></h2>
          <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
          <p className="text-gray-500">700 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Vegetables & Green Salad <span className="text-orange-500">14$</span></h2>
          <p>Ground cumin, avocados, peeled and cubed</p>
          <p className="text-gray-500">1000 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Spicy Vegan Potato Curry <span className="text-orange-500">35$</span></h2>
          <p>Spreadable cream cheese, crumbled blue cheese</p>
          <p className="text-gray-500">580 CAL</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Image
          src="/course.png" 
          alt="Burger"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>




    
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-6xl mb-2 ml-20">
            <Image
          src="/Group.png" 
          alt="Burger"
          width={120}
          height={120}
        />
            </div>
            <h2 className="text-4xl font-bold">420</h2>
            <p className="text-lg">Professional Chefs</p>
          </div>
          <div>
            <div className="text-6xl mb-2">
            <div className="text-6xl mb-2 ml-20">
            <Image
          src="/Group.png" 
          alt="Burger"
          width={120}
          height={120}
        />
            </div>
            </div>
            <h2 className="text-4xl font-bold">320</h2>
            <p className="text-lg">Items Of Food</p>
          </div>
          <div>
            <div className="text-6xl mb-2">
            <div className="text-6xl mb-2 ml-20">
            <Image
          src="/chamach.png" 
          alt="Burger"
          width={120}
          height={120}
        />
            </div>
            </div>
            <h2 className="text-4xl font-bold">30+</h2>
            <p className="text-lg">Years Of Experience</p>
          </div>
          <div>
            <div className="text-6xl mb-2">
            <div className="text-6xl mb-2 ml-20">
            <Image
          src="/Hamza.png" 
          alt="Burger"
          width={120}
          height={120}
        />
            </div>
            </div>
            <h2 className="text-4xl font-bold">220</h2>
            <p className="text-lg">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>


 
    <div className="flex flex-col md:flex-row items-center md:items-start p-4">
      <div className="w-full md:w-1/2 p-4">
        <Image
          src="/dessert.png"
          alt="Cupcake"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Dessert Menu</h1>
        <ul>
          <li className="mb-4">
            <h2 className="text-xl font-semibold">Fig and lemon cake - 32$</h2>
            <p>Toasted French bread topped with romano, cheddar</p>
            <p className="text-gray-500">550 CAL</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-semibold">Creamy mascarpone cake - 43$</h2>
            <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className="text-gray-500">700 CAL</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-semibold">Pastry, blueberries, lemon juice - 14$</h2>
            <p>Ground cumin, avocados, peeled and cubed</p>
            <p className="text-gray-500">1000 CAL</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-semibold">Pain au chocolat - 35$</h2>
            <p>Spreadable cream cheese, crumbled blue cheese</p>
            <p className="text-gray-500">550 CAL</p>
          </li>
        </ul>
      </div>
    </div>


   
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Drinks</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Caffè macchiato <span className="text-orange-500 float-right">32$</span></h2>
          <p>Toasted French bread topped with romano, cheddar</p>
          <p className="text-gray-500">560 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Aperol Spritz Capacianno <span className="text-orange-500 float-right">43$</span></h2>
          <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
          <p className="text-gray-500">700 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Caffè Latte Campuri <span className="text-orange-500 float-right">14$</span></h2>
          <p>Ground cumin, avocados, peeled and cubed</p>
          <p className="text-gray-500">1000 CAL</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Tormentoso BushTea Pintoage <span className="text-orange-500 float-right">35$</span></h2>
          <p>Spreadable cream cheese, crumbled blue cheese</p>
          <p className="text-gray-500">580 CAL</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Image
          src="/drinks.png"
          alt="Cocktails"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>



    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 text-sm mb-2">Partners & Clients</h2>
        <h1 className="text-center text-2xl font-bold mb-6">We work with the best people</h1>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <Image src="/restaurant.png" alt="Restaurant" width={240} height={240} className="h-16" />
          <Image src="/bakery.png" alt="Bakery" width={166} height={128} className="h-16" />
          <Image src="/fork.png" alt="Fork & Spoon" width={143} height={127} className="h-16" />
          <Image src="/coffee.png" alt="Wolf Coffee" width={130} height={129} className="h-16" />
          <Image src="/bistro.png" alt="Bistro" width={169} height={129} className="h-16" />
          <Image src="/Baker.png" alt="Bakery" width={113} height={129} className="h-16" />
        </div>
      </div>
    </div>






    </div>
  );
};

export default Menu;






