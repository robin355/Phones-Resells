import React from 'react';
import { Link } from 'react-router-dom';

const Cetagory = ({ phone }) => {
    const { name, _id, image } = phone
    return (
        <div>
            <Link to={`/cetagorie/${_id}`}>
                <div className='flex flex-col shadow-lg justify-center items-center bg-[#FFFFFF] card mb-[30px] pt-[40px] pb-[40px]'>
                    <img src={image} alt="" />
                    <h2 className='text-base pt-4'>{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Cetagory;