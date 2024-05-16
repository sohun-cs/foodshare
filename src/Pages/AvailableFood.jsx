import { ScrollRestoration, useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../Components/AvailableFoodCard";
import { useEffect, useState } from "react";
import { TfiLayoutGrid3 } from "react-icons/tfi";

import { CiGrid41 } from "react-icons/ci";


const AvailableFood = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | All Foods'
    }, []);

    const allFoods = useLoaderData();

    const [cols, setCols] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByExpDate, setSortByExpDate] = useState(false);

    const handleThreeCols = () => {
        setCols(true);
    };

    const handleTwoCols = () => {
        setCols(false);
    };

    const handleSearchFood = e => {
        setSearchQuery(e.target.value);
    };

    const handleSortByExpDate = () => {
        setSortByExpDate(!sortByExpDate);
    };

    const searchedFoods = allFoods.filter(food => food.food_name.toLowerCase().includes(searchQuery.toLowerCase()));

    const sortedFoods = searchedFoods.slice().sort((a, b) => {
        if (!sortByExpDate) {
            return new Date(a.expired_date) - new Date(b.expired_date);
        }
        else {
            return new Date(b.expired_date) - new Date(a.expired_date);
        }
    });

    return (
        <div className="container mx-auto min-h-[calc(100vh-80px-181.09px)]">

            {/* <div>
                <button onClick={handleCols}>2 Cols</button>
                <button>3 c0ls</button>
            </div> */}

            <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl flex flex-col items-center justify-center">

                <div className="w-full flex justify-between items-center">

                    <div>

                        <button
                            onClick={handleSortByExpDate}
                            className="px-4 py-2 rounded-md shadow-xl outline-none bg-blue-50">
                            Sort by expire date: {sortByExpDate ? " Descending" : " Ascending"}
                        </button>

                    </div>

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

                </div>

                <div className="mb-4 w-full">
                    <input type="text"
                        onChange={handleSearchFood}
                        value={searchQuery}
                        className="px-4 py-2 bg-indigo-50 focus-visible: focus:outline-1 outline-green-600 w-full"
                        placeholder="Search for food?... Write down here" />
                </div>

                <div className={cols === true ? "grid lg:grid-cols-3 gap-8 justify-center" : "grid lg:grid-cols-2 gap-8 justify-center items-center"}>


                    {
                        sortedFoods.map(allFood => <AvailableFoodCard
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