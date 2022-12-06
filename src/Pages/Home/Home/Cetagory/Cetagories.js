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
        <div className='mt-10'>
            <h3 className='text-orange-600 font-bold text-3xl'>Cetagory</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 '>
                {
                    phones.map(phone => <Cetagory key={phone._id} phone={phone}></Cetagory>)
                }
            </div>
        </div>
    );
};

export default Cetagories;