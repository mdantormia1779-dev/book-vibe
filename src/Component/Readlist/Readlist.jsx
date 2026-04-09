import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Pages/BookContext/BookProvider';
import BooksCard from '../BooksCard/BooksCard';


const Readlist = ({ sorting }) => {
    const { storebook } = useContext(BookContext);
    const [filtered, setFiltered] = useState(storebook)
    useEffect(() => {
        if (sorting) {
            if (sorting == "pages") {
                const sorteddata = [...storebook].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sorteddata);
                setFiltered(sorteddata);

            }
            else if (sorting == "rating") {
                const sorteddata = [...storebook].sort((a, b) => a.rating - b.rating);
                console.log(sorteddata);
                setFiltered(sorteddata);
            }
        }
    }, [sorting, storebook])
    if (storebook.length == 0) {
        return <div className='h-[101vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Data Found Wish List</h2>
        </div>
    }
    if (storebook.length == 0) {
        return <div className='h-[101vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Data Found Read List</h2>
        </div>
    }
    return (
        <div className='container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                filtered.map((book) => {
                    return <BooksCard book={book} key={book.bookId}></BooksCard>
                })
            }
        </div>
    );
};

export default Readlist;