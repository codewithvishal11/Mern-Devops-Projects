const Note = require('../models/Note');

const getNotes = async (req, res) => {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getNotesById = async(req, res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const createNote = async(req, res) => {
    try{
        const note = new Note(req.body);
    const savedNote = await note.save();
    res.status(201).json(savedNote);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateNote = async(req, res) => {
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, res.body, {
            new: true,
            runValidators: true,
        });
        if(!updatedNote){
            return res.status(404).json({message: "Note not Found"});
        }
        res.status(201).json(updatedNote);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const deleteNote = async(req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(deletedNote);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {getNotes, getNotesById, createNote, updateNote, deleteNote};