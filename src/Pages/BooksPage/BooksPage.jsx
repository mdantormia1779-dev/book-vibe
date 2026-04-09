import React, { useState } from 'react';
import { BookContext } from '../BookContext/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from '../../Component/Readlist/Readlist';
import Wishlist from '../../Component/Wishlist/Wishlist';


const BooksPage = () => {
    // const { storebook, wishlist } = useContext(BookContext);
    const [sorting, setSorting] = useState("");
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-center items-center'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSorting("pages")}><a>pages</a></li>
                        <li onClick={()=>setSorting("rating")}><a>rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <Readlist sorting={sorting}></Readlist>
                </TabPanel>
                <TabPanel>
                    <Wishlist sorting={sorting}></Wishlist>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default BooksPage;