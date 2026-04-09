import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Pages/BookContext/BookProvider';
import BooksCard from '../BooksCard/BooksCard';

const Wishlist = ({ sorting }) => {
    const { wishlist } = useContext(BookContext);
    const [filtered, setFiltered] = useState(wishlist)
    useEffect(() => {
        if (sorting) {
            if (sorting == "pages") {
                const sorteddata = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sorteddata);
                setFiltered(sorteddata);

            }
            else if (sorting == "rating") {
                const sorteddata = [...wishlist].sort((a, b) => a.rating - b.rating);
                console.log(sorteddata);
                setFiltered(sorteddata);
            }
        }
    }, [sorting, wishlist])
    if (wishlist.length == 0) {
        return <div className='h-[101vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Data Found Wish List</h2>
        </div>
    }
    return (
        <div className='py-8'>
            <div className='container gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    filtered.map((book) => {
                        return <BooksCard book={book} key={book.bookId}></BooksCard>
                    })
                }
            </div>
        </div>
    );
};

export default Wishlist;