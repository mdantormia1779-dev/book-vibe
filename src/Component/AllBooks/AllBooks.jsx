import React, { use } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise)
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl font-bold'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 space-y-4'>
                {
                    books.map((book) => {
                        return <BooksCard key={book.bookId} book={book}></BooksCard>
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;