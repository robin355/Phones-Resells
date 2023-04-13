import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsProduct = () => {
    const product = useLoaderData();
    const { name, price, _id, Ram, touch, Motion, battery, version, frequency, processor, Sensitivity, support, storage, operatingSystem, Resolution, img, feature, voltage, BatteryCapacity, cells, warenty } = product;
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-[80px]'>
                <div>
                    <img className='w-[300px]' src={img} alt="" />
                </div>
                <div>
                    <p className='text-2xl mb-8'>{name}</p>
                    <p>Key Featurs</p>
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
                    <Link to={`/payment/${_id}`}>
                        <button className='btn btn-outline btn-accent w-full'>Buy Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DetailsProduct;