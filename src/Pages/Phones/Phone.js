import React from 'react';
import { Link } from 'react-router-dom';
import BookModal from './BookModal/BookModal';

const Phone = ({ phone }) => {
    console.log(phone)
    const { name, price, location, usedYear, newPrice, img } = phone
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure><img className='w-[200px] h-[200px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500">Name: {name}</h2>
                    <h2 className="card-title text-orange-500">Original Price:{price}</h2>
                    <h2 className="card-title text-orange-500">Location: {location}</h2>
                    <h2 className="card-title text-orange-500">Used Year:{usedYear}</h2>
                    <h2 className="card-title text-orange-500">ReSells Price: {newPrice}</h2>
                    <div className="card-actions justify-between">
                        <label htmlFor="booking-modal" className="btn btn-secondary">Booking Now</label>
                    </div>
                </div>
            </div>
            {
                <BookModal
                    name={name}
                    newPrice={newPrice}
                    img={img}
                >
                </BookModal>
            }

        </div>
    );
};

export default Phone;