import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../BookContext/BookProvider';

const BookDetails = () => {
    const { id } = useParams()
    const books = useLoaderData()
    const expectedBook = books.find((book) => book.bookId == id)
    
    const {handleRead,handlewishlist}=useContext(BookContext)
    return (
        <div className='container mx-auto p-10 items-center'>
            <div className="card lg:card-side bg-base-100 shadow-sm grid grid-cols-2 p-4">
                <figure>
                    <img className='w-xl h-140 rounded-lg'
                        src={expectedBook.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{expectedBook.bookName}</h2>
                    <p className='font-bold'>by : {expectedBook.author}</p>
                    <h2>{expectedBook.category}</h2>
                    <p>Reviews : {expectedBook.review}</p>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold'>Tags</h1>
                        {
                            expectedBook.tags.map((badge, index) =>
                                <div key={index} className="badge badge-soft badge-success">{badge}</div>
                            )
                        }
                    </div>
                    <div className="border-t pt-3 border-gray-300">
                        <div className='space-y-4 text-gray-400 font-semibold'>
                            <h3 className='font-semibold'>Number of pages: {expectedBook.totalPages} </h3>
                            <h3 className='font-semibold'>Publisher: {expectedBook.publisher} </h3>
                            <h3 className='font-semibold'>Year of Publishing: {expectedBook.yearOfPublishing} </h3>
                            <h3 className='font-semibold'>Rating: {expectedBook.rating} </h3>
                        </div>
                        <div className='gap-4 flex mt-4'>
                            <button onClick={()=>handleRead(expectedBook)} className="btn btn-soft font-bold">Read</button>
                            <button onClick={()=>handlewishlist(expectedBook)} className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;