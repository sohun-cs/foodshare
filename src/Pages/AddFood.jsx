import { useContext, useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { TypeAnimation } from "react-type-animation";
import { Spinner } from "@material-tailwind/react";
import Swal from "sweetalert2";

const AddFood = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | Add Food Item'
    }, []);


    const { user, loading, setLoading } = useContext(AuthContext);

    if (loading) return <div className="min-h-[calc(100vh-80px-181.09px)] flex items-center justify-center"><Spinner className="h-16 w-16 text-gray-900/50" /></div>


    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;

        const food_image = form.food_image.value;
        const food_name = form.food_name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expired_date = form.expired_date.value;
        const notes = form.notes.value;
        const donar_name = form.donar_name.value;
        const donar_email = form.donar_email.value;
        const donar_image = form.donar_image.value;
        const status = form.status.value;

        const foods = { food_image, food_name, quantity, location, expired_date, notes, donar_name, donar_email, donar_image, status };

        console.log(foods);

        fetch('https://food-sphere.vercel.app/foods', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoading(false)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Food has been successfully added",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    form.reset();
                }
            })



    }

    return (
        <div className="container min-h-[calc(100vh-80px-181.09px)] mx-auto">
            <div>
                <div className="max-w-[1320px] mx-auto pb-20 xl:pb-28 font-rubik text-green-600">
                    <div className="p-10">
                        <Link to='/' className="text-3xl flex items-center gap-4 ">
                            Back to home
                        </Link>
                    </div>

                    <div className="bg-green-50 py-16 p-3">
                        <div className="text-center xl:my-10 ">
                            <h1 className="text-[20px] xl:text-[40px] font-bold mb-4 font-merriweather">Nourishing Communities, One Plate at a Time</h1>
                            <p className="max-w-[932px] h-8 mx-auto text-sm font-semibold xl:leading-loose font-merriweather">
                                <TypeAnimation
                                    sequence={[
                                        'Donated food: Sharing sustenance, alleviating hunger, fostering community, reducing waste, making a difference, nourishing those in need.',
                                        1000,

                                    ]}
                                    speed={60}
                                    cursor={false}
                                />
                            </p>


                        </div>


                        <div className="max-w-[1096px] mx-auto p-3">

                            <form onSubmit={handleAddItem}>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                    <div>
                                        <label className="text-base font-semibold">Food Name</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="text"
                                            name="food_name"
                                            placeholder="Enter food item name"
                                            required />
                                    </div>
                                    <div>
                                        <label className="text-base font-semibold">Food Image</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="text"
                                            name="food_image"
                                            placeholder="Enter food image url"
                                            required />
                                    </div>

                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">

                                    <div>
                                        <label className="text-base font-semibold">Food Quantity</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="number"
                                            name="quantity"
                                            placeholder="Enter food quantity"
                                            required />
                                    </div>
                                    <div>
                                        <label className="text-base font-semibold">Pickup Location</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="text"
                                            name="location"
                                            placeholder="Enter pickup location"
                                            required />
                                    </div>
                                    <div>
                                        <label className="text-base font-semibold">Expired Date</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="date"
                                            name="expired_date"
                                            placeholder="Enter expire date"
                                            required />
                                    </div>

                                </div>



                                <div className="grid grid-cols-1 gap-6 py-4">

                                    <div>
                                        <label className="text-base font-semibold">Additional Notes</label>
                                        <textarea
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3 resize-none"
                                            type="text"
                                            name="notes"
                                            placeholder="Write additional notes"
                                            rows="4"
                                            required >
                                        </textarea>
                                    </div>

                                </div>


                                <div className="w-full text-center my-6">
                                    <p className="text-2xl font-merriweather font-extralight">
                                        -------------------------- &nbsp; Donor Information &nbsp; --------------------------
                                    </p>
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                    <div>
                                        <label className="text-base font-semibold">Donar Name</label>
                                        <input
                                            className="w-full px-4 py-3 
                                            focus:outline-green-600 mt-3"
                                            type="text"
                                            name="donar_name"
                                            defaultValue={user?.displayName}
                                            placeholder="Enter donar name"
                                            required />
                                    </div>
                                    <div>
                                        <label className="text-base font-semibold">Donar Email</label>
                                        <input
                                            className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                            type="email"
                                            name="donar_email"
                                            defaultValue={user?.email}
                                            placeholder="Enter donar email"
                                            required />
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                    <div>
                                        <label className="text-base font-semibold">Donar Image</label>
                                        <input
                                            className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                            type="text"
                                            name="donar_image"
                                            defaultValue={user?.photoURL}
                                            placeholder="Enter donar image"
                                            required />
                                    </div>

                                    <div>
                                        <label className="text-base font-semibold">Rating</label><br />

                                        <select
                                            className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                            name='status'>
                                            <option value='Available'>Available</option>
                                            <option value='Unavailable'>Not Available</option>
                                        </select>

                                    </div>

                                </div>

                                <div className=" py-4">

                                    <div>
                                        <input
                                            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 
                                            font-semibold text-white py-2 mt-3 hover:shadow-lg shadow-black duration-500"
                                            type="submit"
                                            value='Add Food'
                                        />
                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddFood;