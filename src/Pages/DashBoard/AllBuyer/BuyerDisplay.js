import React from 'react';

const BuyerDisplay = ({ buyer, handleDelete }) => {
    const { name, email, _id } = buyer
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

export default BuyerDisplay;