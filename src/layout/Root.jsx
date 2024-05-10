import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="font-lato">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;