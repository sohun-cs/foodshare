import { useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods/FeaturedFoods";
import FoodGallery from "../Components/FoodGallery";
import Teams from "../Components/Teams";

const Home = () => {

    useEffect(() => {
        document.title = 'FoodSphere | Home'
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto my-24">
                <FeaturedFoods></FeaturedFoods>
                <FoodGallery></FoodGallery>
                <Teams></Teams>
            </div>

        </div>
    );
};

export default Home;