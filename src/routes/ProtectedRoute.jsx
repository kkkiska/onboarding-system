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

    if (departmentCheck && currentUser.isTrainee() && userInfo.departmentId !== parseInt(departmentId)) {
        return <Navigate to={`/departments/${userInfo.departmentId}`} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;