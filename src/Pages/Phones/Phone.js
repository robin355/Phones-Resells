import React from 'react';
import { Link } from 'react-router-dom';
const Phone = ({ phone }) => {
    const { name, price, _id, Ram, touch, Motion, battery, version, frequency, processor, Sensitivity, support, storage, operatingSystem, Resolution, img, feature, voltage, BatteryCapacity, cells, warenty } = phone
    return (
        <div className='shadow-lg bg-[#FFFFFF]'>
            <div className='flex flex-col  justify-center items-center'>
                <img className='w-[200px] h-[200px]' src={img} alt="" />
            </div>
            <div className='p-[30px]'>
                <Link to={`/details/${_id}`}>
                    <p className='text-left font-semibold hover:text-red-600'>{name}</p>
                </Link>
                <p className='text-left'>{processor}</p>
                <p className='text-left'>{voltage}</p>
                <p className='text-left'>{BatteryCapacity}</p>
                <p className='text-left'>{cells}</p>
                <p>{Resolution}</p>
                <p>{operatingSystem}</p>
                <p className='text-left'>{warenty}</p>
                <p className='text-left'>{Ram}</p>
                <p className='text-left'>{storage}</p>
                <p className='text-left'>{feature}</p>
                <p className='text-left'>{support}</p>
                <p className='text-left'>{frequency}</p>
                <p className='text-left'>{Sensitivity}</p>
                <p className='text-left'>{version}</p>
                <p className='text-left'>{battery}</p>
                <p className='text-left'>{touch}</p>
                <p className='text-left'>{Motion}</p>
                <br />
                <br />
                <hr />
                <br />
                <p className='text-center'>{price}</p>
                <br />
                <div>
                    <button className='btn btn-outline btn-accent'>Add Product</button>
                    <Link to={`/payment/${_id}`}>
                        <button className='btn btn-outline btn-accent ml-5'>Buy Now</button>
                    </Link>
                </div>

            </div>


        </div>


    );
};

export default Phone;