import { useEffect, useState } from 'react';
import { getAllBooks } from '../../../services/bookService';
import BookList from '../../../components/books/BookList';

const EBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching all books:", err);
      }
    };
    fetchBooks();
  }, []);



  return (
    <div className='p-24 space-y-5 min-h-screen'>
      <BookList books={books} />
    </div>
  )
}

export default EBook;
// import React, { useEffect, useState } from 'react';
// import { getAllBooks, getBookById } from '../../../services/bookService';
// import BookList from '../../../components/books/BookList';
// import BookCard from '../../../components/books/BookCard';

// const EBook = () => {

//   const [book, setBook] = useState(null);

//   const bookid = "68f4da514155c08dc9dd3500";


//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const data = await getAllBooks();
//         setBooks(data);
//       } catch (err) {
//         console.error("Error fetching all books:", err);
//       }
//     };
//     fetchBooks();



//     const fetchBooksById = async (id) => {
//       const singlebook = await getBookById(id);
//       setBook(singlebook);
//     }

//     fetchBooksById(bookid);
//   }, [bookid]);



//   return (
//     <div className='p-24 space-y-5 min-h-screen'>
//       <BookList books={books} />
//       {book && <BookCard book={book} />}
//     </div>
//   )
// }

// export default EBook;
