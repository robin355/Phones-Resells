import React from 'react';
import { Link } from 'react-router-dom';

const Cetagory = ({ phone }) => {
    const { category, _id, image } = phone
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure><img className='w-[200px] h-[200px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500">{category}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/cetagore/${_id}`}>
                            <button className="btn btn-secondary">See All</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cetagory;