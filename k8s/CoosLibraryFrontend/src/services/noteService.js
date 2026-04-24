import api from './api';

export const getAllNotes = async() => {
    const res = await api.get("/notes");
    return res.data;
}

export const postNote = async(noteData) => {
    const res = await api.post("/notes", noteData);
    return res.data;
}