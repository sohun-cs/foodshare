import { useLoaderData } from "react-router-dom";
import FoodRequestTable from "../Components/FoodRequestTable/FoodRequestTable";

const MyFoodRequest = () => {

    const loadedRequests = useLoaderData();

    return (
        <div className="container mx-auto min-h-[calc(100vh-80px-181.09px)] flex flex-col items-center justify-center">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Donator Info
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Food Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Evaluation
                                </th>
                            </tr>
                        </thead>
                        <tbody className="h-full">
                            {
                                loadedRequests.map(requestedFood => <FoodRequestTable
                                    key={requestedFood._id}
                                    requestedFood={requestedFood}>

                                </FoodRequestTable>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default MyFoodRequest;