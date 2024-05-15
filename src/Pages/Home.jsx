import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods/FeaturedFoods";
import FoodGalleries from "../Components/FoodGalleries";

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto my-24">

                <FeaturedFoods></FeaturedFoods>

            </div>
            <FoodGalleries></FoodGalleries>
        </div>
    );
};

export default Home;