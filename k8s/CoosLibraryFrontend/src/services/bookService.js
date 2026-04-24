import api from './api';

export const getAllBooks = async () => {
    const res = await api.get("/books");
    return res.data;
};

export const getBookById = async (id) => {
    const res = await api.get(`/books/${id}`);
    return res.data;
}