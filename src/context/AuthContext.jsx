import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };