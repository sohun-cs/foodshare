import { useEffect } from "react";
import { ScrollRestoration} from "react-router-dom";

const ViewDetails = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'Details - Food Sphere'
    }, []);


    // const { _id, food_image, food_name, quantity, location, expired_date, notes, donar_name, donar_email, donar_image, status } = details;




    // if (navigation.state === 'loading') return <div className="min-h-[calc(100vh-80px-181.09px)] flex items-center justify-center"><Spinner className="h-16 w-16 text-gray-900/50" /></div>



    return (
        <div className="container min-h-[calc(100vh-80px-181.09px)] mx-auto">
        </div>
    );
};

export default ViewDetails;