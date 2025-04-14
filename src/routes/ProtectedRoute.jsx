import { useContext } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import { currentUser, userInfo } from '../mocks/mock-data';

const ProtectedRoute = ({ departmentCheck = false }) => {
    const { isAuthenticated } = useContext(AuthContext); 
    const { departmentId } = useParams();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;