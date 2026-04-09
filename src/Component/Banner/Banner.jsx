import React from 'react';
import bookImage from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-[70vh] rounded-2xl my-8 container mx-auto p-10">
                <div className="w-full justify-between hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bookImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn mt-12 text-white font-bold btn-success">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;