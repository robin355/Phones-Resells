import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProducts = ({ product }) => {
    const { name, img, support, touch, Motion, battery, frequency, version, processor, _id, price, voltage, BatteryCapacity, cells, Resolution, operatingSystem, warenty, Ram, storage, feature, } = product
    return (
        <div>
            <div className='shadow-lg bg-[#FFFFFF]'>
                <div className='flex flex-col  justify-center items-center'>
                    <img className='w-[200px] h-[200px]' src={img} alt="" />
                </div>
                <div className='p-[30px]'>
                    <Link to={`/newArrival/${_id}`}>
                        <p className='text-left font-semibold hover:text-red-600'>{name}</p>
                    </Link>
                    <p className='text-left'>{processor}</p>
                    <p className='text-left'>{voltage}</p>
                    <p className='text-left'>{BatteryCapacity}</p>
                    <p className='text-left'>{cells}</p>
                    <p>{Resolution}</p>
                    <p>{operatingSystem}</p>
                    <p className='text-left'>{support}</p>
                    <p className='text-left'>{frequency}</p>
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
                    <div className='flex gap-2'>
                        <Link to={`/payment/${_id}`}>
                            <button className='btn btn-outline btn-accent'>Buy Now</button>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default DisplayProducts;