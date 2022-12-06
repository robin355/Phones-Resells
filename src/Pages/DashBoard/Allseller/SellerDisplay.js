import React from 'react';

const SellerDisplay = ({ seler, handleDelete }) => {
    const { name, email, _id } = seler
    return (
        <div>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-secondary'>Delete</button></td>
            </tr>
        </div>
    );
};

export default SellerDisplay;