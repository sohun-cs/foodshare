import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const ModalButton = ({ loadedDetails, handleRequest }) => {


    const { user, loading } = useContext(AuthContext);
    const { _id, food_image, food_name, location, expired_date, notes, donar_name, donar_email } = loadedDetails;

    console.log(loadedDetails);

    console.log("email: ", donar_email);

    return (
        <div>
            <button className="h-8 px-4 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 shadow-xl text-green-50" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-green-100">
                    <h3 className="font-bold text-2xl text-center">Request Item</h3>

                    <div className="modal-action">
                        <form method="dialog" className="text-green-800">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Food Name</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-100 mt-3"
                                        type="text"
                                        name="food_name"
                                        disabled
                                        defaultValue={food_name}
                                        placeholder="Enter food item name"
                                    />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Food Image URL</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-100 mt-3"
                                        type="text"
                                        name="food_image"
                                        disabled
                                        defaultValue={food_image}
                                        placeholder="Enter food image url"
                                    />
                                </div>

                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Food ID</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-100 mt-3"
                                        type="text"
                                        name="quantity"
                                        disabled
                                        defaultValue={_id}
                                        placeholder="Enter food quantity"
                                    />
                                </div>


                                <div>
                                    <label className="text-base font-semibold">Donar Name</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                        type="text"
                                        name="quantity"
                                        disabled
                                        defaultValue={donar_name}
                                        placeholder="Enter food quantity"
                                    />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Donar Email</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                        type="text"
                                        name="quantity"
                                        disabled
                                        defaultValue={donar_email}
                                        placeholder="Enter food quantity"
                                    />
                                </div>



                            </div>



                            <div className="grid grid-cols-1 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Additional Notes</label>
                                    <textarea
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3 resize-none"
                                        type="text"
                                        name="notes"
                                        defaultValue={notes}
                                        placeholder="Write additional notes"
                                        rows="2"
                                    >
                                    </textarea>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">User email</label>
                                    <input
                                        className="w-full px-4 py-3 
        focus:outline-green-600 mt-3"
                                        type="text"
                                        name="donar_name"
                                        disabled
                                        defaultValue={user?.email}
                                        placeholder="Enter donar name"
                                    />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Expired Date</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                        type="text"
                                        name="donar_image"
                                        disabled
                                        defaultValue={expired_date}
                                        placeholder="Enter donar image"
                                    />
                                </div>

                                <div>
                                    <label className="text-base font-semibold">Pickup Location</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                        type="text"
                                        name="location"
                                        disabled
                                        defaultValue={location}
                                        placeholder="Enter pickup location"
                                    />
                                </div>

                                <div>
                                    <label className="text-base font-semibold">Requested Date</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-green-600 mt-3"
                                        type="text"
                                        name="location"
                                        disabled
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                        placeholder="Enter pickup location"
                                    />
                                </div>


                            </div>

                            <div className="text-end">
                                <Link onClick={() => handleRequest(loadedDetails, _id)} to={loading === true ? "" : `/my-requested-foods`} className={donar_email === user?.email ? 'btn-disabled' : ''}>
                                    <button className=" group relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-green-600 to-emerald-600 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-emerald-700 transition-all duration-300 group-hover:h-56 group-hover:w-36"></span><span className="relative">Request</span></button>

                                </Link>
                            </div>

                            {/* <button className="btn flex justify-end">Close</button> */}
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalButton;


ModalButton.propTypes = {
    loadedDetails: PropTypes.object,
    handleRequest: PropTypes.func
}