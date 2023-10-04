import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center text-blue-700"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}> </Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;