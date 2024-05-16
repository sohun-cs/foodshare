import { useContext, useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import ModalButton from "../ModalButton";


const ViewDetails = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | Details'
    }, []);

    const { setLoading } = useContext(AuthContext);

    const [loadedDetails, setLoadedDetails] = useState(useLoaderData())

    const { food_image, food_name, quantity, location, expired_date, donar_name, donar_email, donar_image, status } = loadedDetails;

    console.log(loadedDetails);

    const handleRequest = (data, _id) => {

        setLoading(true);

        fetch('https://food-sphere.vercel.app/requests', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });

                    setLoading(false);
                }
            });


        fetch(`https://food-sphere.vercel.app/foods/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = loadedDetails.filter(deleted => deleted._id !== _id)
                setLoadedDetails(remaining)

            })
    }



    return (
        <div className="container min-h-[calc(100vh-80px-181.09px)] mx-auto">

            <div className="h-[800px] flex flex-col justify-center items-center m-1">
                <div className="max-w-2xl p-4 border-2 border-green-600">

                    <div className="w-full h-96 overflow-hidden">
                        <img className="w-full h-full hover:scale-110 duration-500 cursor-pointer" src={food_image} alt="" />
                    </div>

                    <div className="py-4 flex flex-col md:flex-row md:justify-between gap-2">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 border-4 border-green-600">
                                <img className="w-full h-full rounded-full " src={donar_image} alt="" />
                            </div>

                            <div>
                                <p>{donar_name}</p>
                                <p>{donar_email}</p>
                            </div>

                        </div>

                        <div>
                            <p className="flex items-center gap-2 text-lg text-blue-600">
                                <CiLocationOn /> Pickup location: <span>{location}</span>
                            </p>
                            <p className={status === 'Available' ? 'text-green-600 font-bold md:text-end' : 'text-orange-600 font-bold md:text-end'}>{status}</p>
                        </div>

                    </div>

                    <div>

                        <h1 className="text-3xl font-semibold text-green-600">
                            {food_name}
                        </h1>


                        <div className="border-y-2 border-green-600 bg-green-50 text-green-600 mt-4 px-1 py-2">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col md:flex-row gap-1">
                                    <p className="text-xs md:text-base">Quantity: {quantity}</p>
                                    <p className="text-xs md:text-base">Expire Date: {expired_date}</p>
                                </div>
                                {/* <Link onClick={() => handleRequest(loadedDetails, _id)} to={loading === true ? "" : `/details`} className={donar_email === user?.email ? 'btn-disabled' : ''}>
                                    <button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-emerald-700 transition-all duration-300 group-hover:h-56 group-hover:w-36"></span><span className="relative">Request</span></button>

                                </Link> */}
                                <ModalButton
                                    handleRequest={handleRequest}
                                    setLoadedDetails={setLoadedDetails}
                                    loadedDetails={loadedDetails}>
                                </ModalButton>
                            </div>
                        </div>


                    </div>

                </div>


            </div>


        </div>
    );
};

export default ViewDetails;