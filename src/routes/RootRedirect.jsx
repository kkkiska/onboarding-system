import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RootRedirect = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default RootRedirect;