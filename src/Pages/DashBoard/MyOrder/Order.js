import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ book }) => {
    console.log(book)
    const { IteamName, image, price, _id } = book;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {IteamName}
            </td>
            <td>{price}</td>
            <th>

                {price && !book?.paid && <Link to={`/dashboard/payment/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                </Link>}
                {
                    price && book.paid && <span className='text-primary'>Paid</span>
                }
            </th>
        </tr>
    );
};

export default Order;