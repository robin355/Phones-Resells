import React, { useEffect, useState } from 'react';
import Cetagory from './Cetagory';

const Cetagories = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch('https://books-reseles-server.vercel.app/cetagorie')
            .then(res => res.json())
            .then(data => {
                setPhones(data)
            })
    }, [])


    return (
        <div className='mt-[120px]'>
            <p className='text-center text-2xl font-medium leading-10'>Featured Category</p>
            <p className='text-center  '>Get Your Desired Product from Featured Category!</p>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 lg:p-[100px] gap-4 '>
                {
                    phones.map(phone => <Cetagory key={phone._id} phone={phone}></Cetagory>)
                }
            </div>
        </div>
    );
};

export default Cetagories;