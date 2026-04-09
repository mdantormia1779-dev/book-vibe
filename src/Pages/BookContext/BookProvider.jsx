import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadlist, getAllReadlistFromDb } from '../../Utilities/LocalDB';


export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storebook, setStorebook] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        const localdb= getAllReadlistFromDb();
        // console.log(localdb);
    },[])
    const handleRead = (storedbook) => {
        addReadlist(storebook)
        const existBook = storebook.find(book => book.bookId == storedbook.bookId);
        if (existBook) {
            toast.error("already books exist")
        }
        else {
            setStorebook([...storebook, storedbook])
            toast.success("added successfully")
        }
    }
    const handlewishlist = (storedbook) => {
        const isexistReadlist = storebook.find(book => book.bookId == storedbook.bookId);
        if (isexistReadlist) {
            toast("book already readlist you cannot add wishlist");
            return
        }
        const existBook = wishlist.find(book => book.bookId == storedbook.bookId);
        if (existBook) {
            toast.error("already books exist")
        }
        else {
            setWishlist([...wishlist, storedbook])
            toast.success("added successfully")
        }
    }
    const data = {
        storebook, setStorebook, handleRead, handlewishlist, wishlist, setWishlist
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;