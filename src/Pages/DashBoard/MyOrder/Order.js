import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ book }) => {
    console.log(book)
    const { IteamName, image, price, _id } = book;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{IteamName}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/dashboard/orders/${_id}`}>
                        <button className="btn btn-primary">Payment Detailes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Order;