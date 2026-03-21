import api from "../services/api";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await api.get("/auth/checkauth", { withCredentials: true });
                setIsAuthenticated(res.data.isAuthenticated);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    // user is not logged in — normal case after logout
                    setIsAuthenticated(false);
                } else {
                    console.error("CheckAuth Error:", err);
                }
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const res = await api.post("/auth/login", { email, password }, { withCredentials: true });
        if (res.data.success) {
            // optional: save token if backend sends one
            if (res.data.token) localStorage.setItem("token", res.data.token);
            setIsAuthenticated(true);
        }
    };

    const logout = async () => {
        await api.post("/auth/logout", {}, { withCredentials: true });
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
