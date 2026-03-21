import api from './api';

export const signupUser = async (userData) => {
    try {
        const res = await api.post('/auth/signup', userData, {
            withCredentials: true, // to send cookies if backend uses them
        });
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const loginUser = async (userData) => {
    try {
        const res = await api.post('/auth/login', userData, {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const res = await api.post('/auth/logout', {}, {
            withCredentials: true,
        })
    } catch (err) {
        throw err;
    }
};