import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../Components/AvailableFoodCard";

const AvailableFood = () => {

    const allFoods = useLoaderData();

    return (
        <div className="container mx-auto min-h-[calc(100vh-80px-181.09px)]">


            <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="grid lg:grid-cols-3 gap-8 justify-center">


                    {
                        allFoods.map(allFood => <AvailableFoodCard 
                        key={allFood._id}
                        allFood={allFood}>

                        </AvailableFoodCard>)
                    }

                </div>

              

            </div>

        </div>
    );
};

export default AvailableFood;