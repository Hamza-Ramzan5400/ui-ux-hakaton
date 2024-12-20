import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Category from "./components/Category";
import Cheef from "./components/Cheef";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import RestaurantProcess from "./components/RestaurantProcess";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Aboutus/>
    <Category/>
    <Choose/>
    <Clients/>
    <Menu/>
    <Cheef/>
    <Testimonials/>
    <RestaurantProcess/>
    <Blog/>
   </div>
  );
}
