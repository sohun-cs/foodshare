import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const FoodRequestTable = ({ requestedFood }) => {

    const { donar_image, quantity, location, expired_date, donar_name, donar_email } = requestedFood;

    const {user} = useContext(AuthContext)

    if (donar_email === user.email) {
        return null; // Do not render the table row if the user's email does not match
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
                {location}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {expired_date}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {new Date().toISOString().split('T')[0]}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    {quantity}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-between">

                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Requested</p>

                </div>
            </td>

        </tr>
    );
};

export default FoodRequestTable;


FoodRequestTable.propTypes = {
    requestedFood: PropTypes.object,
}