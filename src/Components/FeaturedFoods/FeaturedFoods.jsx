import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion"




const FeaturedFoods = () => {

    const loadedFoods = useLoaderData();

    loadedFoods.sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity));

    console.log(loadedFoods);


    return (
        <div>

            <div>
                <h1>Featured Food</h1>
            </div>


            <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="grid lg:grid-cols-3 gap-8 justify-center">


                    {
                        loadedFoods.slice(0, 6).map(loadedFood => <FoodCard
                            key={loadedFood._id}
                            loadedFood={loadedFood}>

                        </FoodCard>)
                    }




                    {/* ------------------------------------------------------------------ */}

                </div>

                <div className="text-center my-16">

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >

                        <Link to='/available-foods'

                            className="bg-gradient-to-r from-green-500 to-emerald-500 px-16 py-4 text-white text-lg font-bold rounded shadow-md hover:bg-gradient-to-r focus:shadow-outline focus:outline-none">
                            <button>Show All</button>


                        </Link>

                    </motion.button>



                </div>

            </div>



            <div>

            </div>

        </div>
    );
};

export default FeaturedFoods;