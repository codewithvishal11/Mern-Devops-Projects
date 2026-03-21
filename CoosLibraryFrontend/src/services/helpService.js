import api from './api';

export const getHelpRequests = async () => {
    const res = await api.get("/help");
    return res.data;
};

export const postHelpRequest = async(helpData) => {
    const res = await api.post('./help', helpData);
    return res.data;
};