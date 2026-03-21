import React, { useState, useMemo } from "react";
import BookCard from "./BookCard";
import BookFilter from "./BookFilter";

const BookList = ({ books }) => {
    const [filters, setFilters] = useState({
        category: "",
        minPrice: 0,
        maxPrice: 500,
    });

    const onFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    //Extract unique categories safely
    const categories = useMemo(()=>{
        const uniqueCategories = [...new Set(books.map((b) => b.category))];
        return uniqueCategories.filter(Boolean); //remove null/undefined
    },[books]);

    // Filter logic (memoized for performance)
    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const withinPrice =
                (!filters.minPrice || book.n_price >= filters.minPrice) &&
                (!filters.maxPrice || book.n_price <= filters.maxPrice);

            const categoryMatch =
                !filters.category ||
                book.category?.toLowerCase() === filters.category.toLowerCase();

            return withinPrice && categoryMatch;
        });
    }, [books, filters]);

    return (
        <div className="space-y-5">
            <BookFilter filters={filters} onFilterChange={onFilterChange} categories = {categories} />

            {filteredBooks.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">No books found.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {filteredBooks.map((book, idx) => (
                        <BookCard key={idx} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;
