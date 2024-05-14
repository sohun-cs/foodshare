import { useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";


const ViewDetails = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'Details - Food Sphere'
    }, []);


    // const { _id, food_image, food_name, quantity, location, expired_date, notes, donar_name, donar_email, donar_image, status } = details;




    // if (navigation.state === 'loading') return <div className="min-h-[calc(100vh-80px-181.09px)] flex items-center justify-center"><Spinner className="h-16 w-16 text-gray-900/50" /></div>



    return (
        <div className="container min-h-[calc(100vh-80px-181.09px)] mx-auto">

            <div className="h-[800px] flex flex-col justify-center items-center">
                <div className="max-w-2xl p-4 border-2 border-green-600">



                    <div className="w-full h-96 overflow-hidden">
                        <img className="w-full h-full hover:scale-110 duration-500 cursor-pointer" src="https://i.ibb.co/m4fhbVM/sandwich-2301387-640-min.jpg" alt="" />
                    </div>

                    <div className="py-4 flex justify-between">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 border-4 border-green-600">
                                <img className="w-full h-full rounded-full " src="https://i.ibb.co/gmxKCrK/86690b22ee0a3b52a421d944e5d02060.jpg" alt="" />
                            </div>

                            <div>
                                <p>Paola Tezz</p>
                                <p>paola@gmail.com</p>
                            </div>

                        </div>

                        <div>
                            <p className="flex items-center gap-2 text-lg text-blue-600">
                                <CiLocationOn /> Pickup location: <span>Mirpur-12, Dhaka</span>
                            </p>
                        </div>

                    </div>

                    <div>

                        <h1 className="text-3xl font-semibold text-green-600">
                            Chicken Curry
                        </h1>

                        <div className="border-y-2 border-green-600 bg-green-50 text-green-600 mt-4 px-1 py-2">
                            <div className="flex items-center justify-between">
                                <p>Quantity: 26</p>
                                <p>Expire Date: 18/05/2024</p>
                                <Link to={`/details`} className="">
                                    <button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-emerald-700 transition-all duration-300 group-hover:h-56 group-hover:w-36"></span><span className="relative">Request</span></button>
                                </Link>
                            </div>
                        </div>


                    </div>

                </div>


            </div>


        </div>
    );
};

export default ViewDetails;