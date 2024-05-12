import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods/FeaturedFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto my-24">
                <FeaturedFoods></FeaturedFoods>
            </div>
        </div>
    );
};

export default Home;