import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {
    return (
        <div>

            <div>
                <h1>Featured Food</h1>
            </div>


            <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl">

                <div className="grid lg:grid-cols-3 gap-8 ">

                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-sm border border-slate-500 ">
                        <div className="overflow-hidden cursor-pointer">
                            <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
                                className="hover:scale-110 duration-500" alt="" />
                        </div>

                        <div className="bg-slate-100">
                            <div className="relative mb-7 ">
                                <div className="px-4 py-2 mb-4">
                                    <div className="space-y-2">
                                        <div className="absolute -top-2/3 right-40 rounded-full border-4 border-white overflow-hidden cursor-pointer">
                                            <img
                                                className="w-16 mx-auto hover:scale-125 duration-700" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                                        </div>
                                        <div className="text-center relative top-7">
                                            <p className="font-semibold text-sm">Asad Sohun</p>
                                            <p className="text-xs text-slate-600 font-semibold">Donator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t-2 border-slate-600">
                                <div className=" space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <p>Expire:- <span>20 Dec, 2024</span> </p>
                                        <p>Quantity:- <span>18</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
                                        <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <CiLocationOn className="text-slate-800" />
                                            <p className="text-xs">Dhaka, Bangladesh</p>
                                        </div>
                                        <div>
                                            <Link to='/' className="text-rose-500 font-semibold">
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------- */}

                    {/* <div className="max-w-sm border border-rose-500">
    <div className="overflow-hidden">
        <img src="https://i.ibb.co/mHsDzcs/pizza.jpg"
            className="hover:scale-110 duration-500" alt="" />
    </div>
    <div className="p-4 space-y-2">
        <div className="flex justify-between items-center text-sm">
            <p>Expire:- <span>20 Dec, 2024</span> </p>
            <p>Quantity:- <span>18</span></p>
        </div>
        <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Dominos Pizza</h2>
            <p className="text-sm">Nourishing generosity, combating hunger. Sharing surplus, fostering hope. Community support, making a difference, one meal at a time.</p>
        </div>

    </div>
    <div className="bg-slate-100">
        <div className="px-4 py-2">
            <div className="flex items-center gap-2">
                <div>
                    <img className="w-9  rounded-full" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                </div>
                <div className="">
                    <p className="font-semibold text-sm">Asad Sohun</p>
                    <p className="text-xs">Donator</p>
                </div>
            </div>
        </div>
    </div>
    <div className="px-4 py-2">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm">
                <CiLocationOn />
                <p>Dhaka, Bangladesh</p>
            </div>
            <div>
                <Link to='/' className="text-rose-500 font-semibold">
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    </div>
</div> */}

                    {/* ------------------------------------------------------------------ */}

                </div>

                <div className="text-center my-16">
                    <Link to='/'
                        className="bg-gradient-to-r from-red-500 to-rose-500 px-16 py-4 text-white 
                        text-lg font-bold rounded shadow-md hover:bg-gradient-to-r focus:shadow-outline focus:outline-none">
                        <button>Show All</button>
                    </Link>
                </div>

            </div>



            <div>

            </div>

        </div>
    );
};

export default FeaturedFoods;