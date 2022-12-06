import React from 'react';

const Product = ({ product, handleDelete }) => {
    const { conditon, ProductName, ReselPrice, _id } = product
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ProductName}</h2>
                    <p>Statuse: Available</p>
                    <p>Price: {ReselPrice}</p>
                    <p>Condition:{conditon}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <button className="btn btn-ghost">advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;