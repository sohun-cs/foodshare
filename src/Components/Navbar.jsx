import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const link = <>

        <li className="font-semibold">
            <NavLink to="/" className={({ isActive }) => isActive ? 'transition-colors duration-200 text-gray-950 border-b border-gray-950 pb-1' : 'transition-colors duration-200 text-gray-700'}>
                Home
            </NavLink>
        </li>
        <li className="font-semibold">
            <NavLink to="/available-foods" className={({ isActive }) => isActive ? 'transition-colors duration-200 text-gray-950 border-b border-gray-950 pb-1' : 'transition-colors duration-200 text-gray-700'}>
                Available Foods
            </NavLink>
        </li>
        <li className="font-semibold">
            <NavLink to="/add-food" className={({ isActive }) => isActive ? 'transition-colors duration-200 text-gray-950 border-b border-gray-950 pb-1' : 'transition-colors duration-200 text-gray-700'}>
                Add Food
            </NavLink>
        </li>
        <li className="font-semibold">
            <NavLink to="/manage-my-foods" className={({ isActive }) => isActive ? 'transition-colors duration-200 text-gray-950 border-b border-gray-950 pb-1' : 'transition-colors duration-200 text-gray-700'} >
                Manage My Foods
            </NavLink>
        </li>
        <li className="font-semibold">
            <NavLink to="/my-food-request" className={({ isActive }) => isActive ? 'transition-colors duration-200 text-gray-950 border-b border-gray-950 pb-1' : 'transition-colors duration-200 text-gray-700'} >
                My Food Request
            </NavLink>
        </li>

    </>

    return (
        <div className="bg-gradient-to-r from-red-50 to-rose-50 text-black ">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <a
                        href="/" className="inline-flex items-center">
                        <img className="w-8" src="https://i.imgur.com/p5e9hia.jpg" alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-green-700">
                            FoodSphere
                        </span>
                    </a>
                    <ul className=" items-center hidden space-x-8 lg:flex ">
                        {
                            link
                        }
                        <li>
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white 
                                bg-gradient-to-r from-green-600 to-lime-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" >
                                Login
                            </Link>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-black" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img className="w-8" src="https://i.imgur.com/p5e9hia.jpg" alt="" />

                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                                                    FoodSphere
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-white focus:bg-white focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-black" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">

                                            <li className="font-semibold">
                                                <Link to="/"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="font-semibold">
                                                <Link to="/available-foods"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                                    Available Foods
                                                </Link>
                                            </li>
                                            <li className="font-semibold">
                                                <Link to="/add-food"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                                    Add Food
                                                </Link>
                                            </li>
                                            <li className="font-semibold">
                                                <Link to="/manage-my-foods"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                                    Manage My Foods
                                                </Link>
                                            </li>
                                            <li className="font-semibold">
                                                <Link to="/my-food-request"
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" >
                                                    My Food Request
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-gradient-to-r from-green-600 to-lime-600 text-white">
                                                    Login
                                                </a>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;