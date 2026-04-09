import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';


const BooksCard = ({ book }) => {
    return (
        <Link to={`/books/${book.bookId}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-4'>
                    <img className='rounded-2xl w-full h-96'
                        src={book.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3 items-center'>
                        {
                            book.tags.map((badge,index) =>
                                <div key={index} className="badge badge-soft badge-success">{badge}</div>
                            )
                        }
                    </div>
                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='font-bold text-lg'>{book.author}</p>
                    <div className="card-actions justify-between border-t text-xl border-dashed border-gray-300 pt-4">
                        <div className="font-semibold">{book.category}</div>
                        <div className="font-semibold items-center flex gap-2 ">{book.rating}<FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;