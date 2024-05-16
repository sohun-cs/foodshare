import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Spinner } from '@material-tailwind/react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <div className="min-h-[calc(100vh-80px-181.09px)] flex items-center justify-center"><Spinner className="h-16 w-16 text-gray-900/50" /></div>

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}