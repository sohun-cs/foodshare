import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import AvailableFood from "../Pages/AvailableFood";
import AddFood from "../Pages/AddFood";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ViewDetails from "../Components/FeaturedFoods/ViewDetails";
import PrivateRoutes from "../Provider/PrivateRoutes";
import ErrorPage from "../Error/ErrorPage";
import EditFood from "../Components/ManageFoodTable/EditFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://food-sphere.vercel.app/foods')
            },
            {
                path: '/available-foods',
                element: <AvailableFood></AvailableFood>,
                loader: () => fetch('https://food-sphere.vercel.app/foods')
            },
            {
                path: '/add-food',
                element: <AddFood></AddFood>
            },
            {
                path: '/manage-my-foods',
                element: <ManageMyFood></ManageMyFood>,
                loader: () => fetch(`https://food-sphere.vercel.app/foods`)
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
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://food-sphere.vercel.app/foods/${params.id}`)
            },
            {
                path: '/edit-food/:id',
                element: <PrivateRoutes><EditFood></EditFood></PrivateRoutes>,
                loader: ({params}) => fetch(`https://food-sphere.vercel.app/foods/${params.id}`)
            }
        ]
    }
])

export default router;