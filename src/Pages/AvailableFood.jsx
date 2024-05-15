import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../Components/AvailableFoodCard";
import { useState } from "react";
import { TfiLayoutGrid3 } from "react-icons/tfi";

import { CiGrid41 } from "react-icons/ci";


const AvailableFood = () => {

    const allFoods = useLoaderData();

    const [cols, setCols] = useState(true);
   

    const handleThreeCols = () => {
        setCols(true);
    }


   

    const handleTwoCols = () => {
        setCols(false);
    }

    return (
        <div className="container mx-auto min-h-[calc(100vh-80px-181.09px)]">

            {/* <div>
                <button onClick={handleCols}>2 Cols</button>
                <button>3 c0ls</button>
            </div> */}

            <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl flex flex-col items-center justify-center">

                <div className="xl:my-10 hidden lg:inline">
                    <div className="flex gap-6 items-center justify-end">
                        <button onClick={handleTwoCols}>
                            <CiGrid41 className="text-4xl" />
                        </button>
                        <button onClick={handleThreeCols}>
                            <TfiLayoutGrid3 className="text-3xl shadow-xl" />
                        </button>
                    </div>
                </div>

                <div className={cols === true ? "grid lg:grid-cols-3 gap-8 justify-center" : "grid lg:grid-cols-2 gap-8 justify-center items-center"}>


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