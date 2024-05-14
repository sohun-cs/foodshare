import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const AvailableFoodCard = ({ allFood }) => {

    const { _id, food_image, food_name, quantity, location, expired_date, notes, donar_name } = allFood;

    return (
        <div className="max-w-sm border border-green-500">
            <div className="overflow-hidden h-60">
                <img src={food_image}
                    className="hover:scale-110 duration-500" alt="" />
            </div>
            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <p>Expire:- <span>{expired_date}</span> </p>
                    <p>Quantity:- <span>{quantity}</span></p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">{food_name}</h2>
                    <p className="text-sm">{notes.slice(0, 44)}</p>
                </div>

            </div>
            <div className="bg-green-100">
                <div className="px-4 py-2">
                    <div className="flex items-center gap-2">
                        <div>
                            <img className="w-9  rounded-full" src="https://i.ibb.co/RYZpjHj/pic.jpg" alt="" />
                        </div>
                        <div className="">
                            <p className="font-semibold text-sm">{donar_name}</p>
                            <p className="text-xs">Donator</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm">
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                    <div>
                        <Link to={`/details/${_id}`}>
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-emerald-700 transition-all duration-300 group-hover:h-56 group-hover:w-36"></span><span className="relative">View Details</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodCard;


AvailableFoodCard.propTypes = {
    allFood: PropTypes.object
}