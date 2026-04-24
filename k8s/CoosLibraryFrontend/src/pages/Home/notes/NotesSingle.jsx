import { useEffect, useState } from 'react';
import BookList from '../../../components/books/BookList';
import { getAllNotes } from '../../../services/noteService';


const NotesSingle = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async() => {
            try{
                const data = await getAllNotes();
                setNotes(data);
            }catch(err){
                console.error("Error in fetching all Notes", err);
            }
        };
        fetchNotes();
    }, []);

    return (
        <div className='p-24 space-y-5 min-h-screen'>
            <BookList books={notes} />
        </div>
    )
}

export default NotesSingle