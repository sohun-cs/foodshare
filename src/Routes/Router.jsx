import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import AvailableFood from "../Pages/AvailableFood";
import AddFood from "../Pages/AddFood";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/available-foods',
                element: <AvailableFood></AvailableFood>
            },
            {
                path: '/add-food',
                element: <AddFood></AddFood>
            },
            {
                path: '/manage-my-foods',
                element: <ManageMyFood></ManageMyFood>
            },
            {
                path: '/my-food-request',
                element: <MyFoodRequest></MyFoodRequest>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;