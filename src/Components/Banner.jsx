

const Banner = () => {
    return (

        <div className="">

            <div className="md:max-h-[792px] bg-[url('https://i.imgur.com/cYkL9Ee.jpg')] bg-cover">

                <div className="bg-rose-950 bg-opacity-25 h-full flex flex-col items-center justify-center gap-16">


                    <div className="tracking-wider max-w-xl md:text-center px-4 pt-24 text-red-50 md:text-rose-800">

                        <div className="space-y-4 lg:space-y-8 mb-12 bg-rose-200 px-4 py-10 md:p-10 bg-opacity-30">

                            <h4 className="font-extrabold">FoodSphere</h4>
                            <h2 className="text-3xl font-extrabold">Connecting communities through food sharing.</h2>
                            <p className="font-semibold text-lg">At FoodSphere, surplus becomes sustenance. Join our mission to reduce waste and nourish communities.</p>

                        </div>

                        <div className="flex items-center sm:justify-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-500 h-12 px-6 mr-6 tracking-wide text-white font-bold  rounded shadow-md hover:bg-gradient-to-r focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </button>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-rose-50 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </a>
                        </div>

                    </div>

                    <div className="bg-rose-50 rounded-sm mb-12">
                        <div className=" grid grid-cols-1 md:grid-cols-3 text-red-500 font-bold text-sm">
                            <div className="w-[343px] md:w-56 xl:w-64 h-40 flex flex-col items-center justify-center space-y-4 border-b-2 md:border-b-0 md:border-r-2 border-rose-200 ">
                                <img className="mx-auto w-14 rounded-full bg-rose-200 p-2" src="https://i.ibb.co/gt6Z6HL/fruit-4.png" alt="" />
                                <h3>Colorful, Healthy Treats</h3>
                            </div>
                            <div className="w-[343px] md:w-56 xl:w-64 h-40 flex flex-col items-center justify-center space-y-4 border-b-2 md:border-b-0 md:border-r-2 border-rose-200 ">
                                <img className="mx-auto w-14 rounded-full bg-rose-200 p-2" src="https://i.ibb.co/tDb1wjh/vegs-4.png" alt="" />
                                <h3>Nutrient-Rich Greens</h3>
                            </div>
                            <div className="w-[343px] md:w-56 xl:w-64 h-40 flex flex-col items-center justify-center space-y-4 border-b-2 md:border-b-0 md:">
                                <img className="mx-auto w-14 rounded-full bg-rose-200 p-2" src="https://i.ibb.co/kxNdcdV/foods.png" alt="" />
                                <h3>Morning Fuel Start</h3>
                            </div>
                        </div>
                    </div>

                </div>




            </div>


        </div>

    );
};

export default Banner;