import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const ManageFoodTable = ({ managedFood, manageFoods, setManageFoods }) => {

    const { _id, food_name, donar_name, donar_email, donar_image, status } = managedFood;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you want to delete this item?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success"
                    }
                );
                fetch(`https://food-sphere.vercel.app/foods/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = manageFoods.filter(deleted => deleted._id !== _id)
                        setManageFoods(remaining)

                    })
            }
        });
    }

    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={donar_image} alt="Jese image" />
                <div className="ps-3">
                    <div className="text-base font-semibold">{donar_name}</div>
                    <div className="font-normal text-gray-500">{donar_email}</div>
                </div>
            </th>
            <td className="px-6 py-4">
                {food_name}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {status}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-between">

                    <Link to={`/edit-food/${_id}`} className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                    </Link>

                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-between">

                    <Link onClick={() => handleDelete(_id)} className="font-bold text-orange-600 dark:text-orange-500 hover:underline">
                        Delete
                    </Link>

                </div>
            </td>
        </tr>

    );
};

export default ManageFoodTable;


ManageFoodTable.propTypes = {
    managedFood: PropTypes.object,
    manageFoods: PropTypes.array,
    setManageFoods: PropTypes.func
}